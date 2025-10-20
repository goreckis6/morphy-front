
// API service for backend communication
const PRODUCTION_DEFAULTS = [
  'https://morphyimg.ovh', // Primary custom domain (backend)
  'https://morphy-2-n2tb.onrender.com' // Fallback Render backend
];

const normalizeBaseUrl = (url: string | undefined) => {
  if (!url) return undefined;
  return url.endsWith('/') ? url.slice(0, -1) : url;
};

const getApiBaseUrl = () => {
  const envPrimary = normalizeBaseUrl(import.meta.env.VITE_API_BASE_URL as string | undefined);
  const envFallback = normalizeBaseUrl(import.meta.env.VITE_API_BASE_URL_FALLBACK as string | undefined);

  if (envPrimary) {
    return envPrimary;
  }

  if (envFallback) {
    return envFallback;
  }

  // If we're in production (deployed), use the default production backend
  if (import.meta.env.PROD) {
    return PRODUCTION_DEFAULTS[0];
  }

  // Default to localhost for development
  return 'http://localhost:3000';
};

export const API_BASE_URL = getApiBaseUrl();

export interface ConversionOptions {
  quality?: 'high' | 'medium' | 'low' | string | number; // Support both string quality levels and numeric quality values
  lossless?: boolean;
  // Allow arbitrary formats (csv/doc/docx/epub/html/md/mobi/odp/odt/pdf/ppt/pptx/rtf/txt/xls/xlsx/webp/png/jpeg/ico)
  format?: string;
  width?: number;
  height?: number;
  iconSize?: number;
}

export interface ConversionResult {
  blob: Blob;
  filename: string;
  size: number;
}

export interface BatchConversionResult {
  success: boolean;
  processed: number;
  results: Array<{
    originalName: string;
    outputFilename?: string;
    size?: number;
    success: boolean;
    error?: string;
    downloadPath?: string; // New field for file-based downloads
  }>;
}

class ApiService {
  private async makeRequest(
    endpoint: string, 
    method: 'GET' | 'POST' = 'GET', 
    body?: FormData | any,
    retryCount = 0
  ): Promise<Response> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const options: RequestInit = {
      method,
      headers: {},
      mode: 'cors', // Explicitly set CORS mode
    };

    if (body instanceof FormData) {
      // Don't set Content-Type for FormData, let browser set it with boundary
      options.body = body;
    } else if (body) {
      options.headers = {
        'Content-Type': 'application/json',
      };
      options.body = JSON.stringify(body);
    }

    try {
      const response = await fetch(url, options);
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
        const message = errorData.details
          ? `${errorData.error || 'Error'}: ${errorData.details}`
          : (errorData.error || `HTTP ${response.status}: ${response.statusText}`);
        throw new Error(message);
      }

      return response;
    } catch (error) {
      // If it's a CORS error or network error, try fallback URL
      if ((error instanceof TypeError && error.message.includes('Failed to fetch')) || 
          (error instanceof Error && error.message.includes('CORS'))) {
        
        if (retryCount === 0 && API_BASE_URL !== PRODUCTION_DEFAULTS[1]) {
          console.warn('Primary API failed, trying fallback...', error);
          // Temporarily switch to fallback URL
          const originalUrl = API_BASE_URL;
          (API_BASE_URL as any) = PRODUCTION_DEFAULTS[1];
          
          try {
            const fallbackResponse = await this.makeRequest(endpoint, method, body, 1);
            return fallbackResponse;
          } finally {
            // Restore original URL
            (API_BASE_URL as any) = originalUrl;
          }
        }
      }
      
      throw error;
    }
  }

  async convertFile(file: File, options: ConversionOptions = {}): Promise<ConversionResult> {
    const formData = new FormData();
    
    // Create a new File object to ensure proper UTF-8 encoding
    const fileWithProperName = new File([file], file.name, {
      type: file.type,
      lastModified: file.lastModified
    });
    formData.append('file', fileWithProperName);
    
    // Add conversion options
    if (options.quality !== undefined) formData.append('quality', String(options.quality));
    if (options.lossless !== undefined) formData.append('lossless', options.lossless.toString());
    if (options.format) formData.append('format', options.format);
    if (options.width !== undefined) formData.append('width', options.width.toString());
    if (options.height !== undefined) formData.append('height', options.height.toString());
    if (options.iconSize !== undefined) formData.append('iconSize', options.iconSize.toString());

    // Route conversions to specific endpoints
    let endpoint = '/api/convert';
    const fileName = file.name.toLowerCase();
    
    if (fileName.endsWith('.bmp') && options.format === 'webp') {
      endpoint = '/convert/bmp-to-webp/single';
    } else if (fileName.endsWith('.cr2') && options.format === 'ico') {
      endpoint = '/convert/cr2-to-ico/single';
    } else if (fileName.endsWith('.cr2') && options.format === 'webp') {
      endpoint = '/convert/cr2-to-webp/single';
    } else if (fileName.endsWith('.eps') && options.format === 'ico') {
      endpoint = '/convert/eps-to-ico/single';
    } else if (fileName.endsWith('.eps') && options.format === 'webp') {
      endpoint = '/convert/eps-to-webp/single';
    } else if (fileName.endsWith('.gif') && options.format === 'ico') {
      endpoint = '/convert/gif-to-ico/single';
    }

    const response = await this.makeRequest(endpoint, 'POST', formData);
    
    // Check if response is JSON (new file-based approach) or blob (legacy)
    const contentType = response.headers.get('Content-Type');
    if (contentType && contentType.includes('application/json')) {
      // New file-based approach - get download link
      const jsonResult = await response.json();
      
      // Download the file from the provided link
      const downloadResponse = await this.makeRequest(jsonResult.downloadPath);
      const blob = await downloadResponse.blob();
      
      // Track conversion in global counter
      
      return {
        blob,
        filename: jsonResult.filename,
        size: jsonResult.size
      };
    } else {
      // Legacy approach - file streamed directly
      const blob = await response.blob();
      const contentDisposition = response.headers.get('Content-Disposition');
      const filename = this.extractFilename(contentDisposition) || 
                     `${file.name.replace(/\.[^.]+$/, '')}.${options.format || 'bin'}`;

      // Track conversion in global counter

      return {
        blob,
        filename,
        size: blob.size
      };
    }
  }

  async convertBatch(files: File[], options: ConversionOptions = {}): Promise<BatchConversionResult> {
    const formData = new FormData();
    
    console.log('API: Starting batch conversion with', files.length, 'files, format:', options.format);
    
    // Add files with proper UTF-8 handling
    files.forEach((file, index) => {
      // Create a new File object to ensure proper UTF-8 encoding
      const fileWithProperName = new File([file], file.name, {
        type: file.type,
        lastModified: file.lastModified
      });
      formData.append('files', fileWithProperName);
      console.log(`API: Added file ${index + 1}:`, file.name, 'size:', file.size);
    });
    
    // Add conversion options
    if (options.quality !== undefined) formData.append('quality', String(options.quality));
    if (options.lossless !== undefined) formData.append('lossless', options.lossless.toString());
    if (options.format) formData.append('format', options.format);
    if (options.width !== undefined) formData.append('width', options.width.toString());
    if (options.height !== undefined) formData.append('height', options.height.toString());

    // Route conversions to specific endpoints
    let endpoint = '/api/convert/batch';
    const firstFileName = files[0]?.name.toLowerCase();
    
    if (firstFileName?.endsWith('.bmp') && options.format === 'webp') {
      endpoint = '/convert/bmp-to-webp/batch';
    } else if (firstFileName?.endsWith('.cr2') && options.format === 'ico') {
      endpoint = '/convert/cr2-to-ico/batch';
    } else if (firstFileName?.endsWith('.cr2') && options.format === 'webp') {
      endpoint = '/convert/cr2-to-webp/batch';
    } else if (firstFileName?.endsWith('.eps') && options.format === 'ico') {
      endpoint = '/convert/eps-to-ico/batch';
    } else if (firstFileName?.endsWith('.eps') && options.format === 'webp') {
      endpoint = '/convert/eps-to-webp/batch';
    } else if (firstFileName?.endsWith('.gif') && options.format === 'ico') {
      endpoint = '/convert/gif-to-ico/batch';
    }

    console.log('API: Making request to', endpoint, 'with options:', options);
    const response = await this.makeRequest(endpoint, 'POST', formData);
    const result = await response.json();
    
    console.log('API: Batch conversion response:', result);
    
    // Track batch conversions
    if (result.success && result.results) {
      const totalSize = result.results.reduce((sum: number, r: any) => {
        return sum + (r.size || 0);
      }, 0);
    }
    
    return result;
  }

  async convertBatchCsvToDoc(files: File[]): Promise<BatchConversionResult> {
    const formData = new FormData();
    
    console.log('API: Starting CSV to DOC batch conversion with', files.length, 'files');
    
    // Add files with proper UTF-8 handling
    files.forEach((file, index) => {
      // Create a new File object to ensure proper UTF-8 encoding
      const fileWithProperName = new File([file], file.name, {
        type: file.type,
        lastModified: file.lastModified
      });
      formData.append('files', fileWithProperName);
      console.log(`API: Added file ${index + 1}:`, file.name, 'size:', file.size);
    });

    console.log('API: Making request to /convert/csv-to-doc/batch');
    const response = await this.makeRequest('/convert/csv-to-doc/batch', 'POST', formData);
    const result = await response.json();
    
    console.log('API: CSV to DOC batch conversion response:', result);
    
    // Track batch conversions
    if (result.results) {
      const totalSize = result.results.reduce((sum: number, r: any) => {
        return sum + (r.size || 0);
      }, 0);
    }
    
    return result;
  }

  async convertBatchCsvToDocx(files: File[]): Promise<BatchConversionResult> {
    const formData = new FormData();
    
    console.log('API: Starting CSV to DOCX batch conversion with', files.length, 'files');
    
    // Add files with proper UTF-8 handling
    files.forEach((file, index) => {
      // Create a new File object to ensure proper UTF-8 encoding
      const fileWithProperName = new File([file], file.name, {
        type: file.type,
        lastModified: file.lastModified
      });
      formData.append('files', fileWithProperName);
      console.log(`API: Added file ${index + 1}:`, file.name, 'size:', file.size);
    });

    console.log('API: Making request to /convert/csv-to-docx/batch');
    const response = await this.makeRequest('/convert/csv-to-docx/batch', 'POST', formData);
    const result = await response.json();
    
    console.log('API: CSV to DOCX batch conversion response:', result);
    
    // Track batch conversions
    if (result.results) {
      const totalSize = result.results.reduce((sum: number, r: any) => {
        return sum + (r.size || 0);
      }, 0);
    }
    
    return result;
  }

  async convertBatchCsvToEpub(files: File[]): Promise<BatchConversionResult> {
    const formData = new FormData();
    
    console.log('API: Starting CSV to EPUB batch conversion with', files.length, 'files');
    
    // Add files with proper UTF-8 handling
    files.forEach((file, index) => {
      // Create a new File object to ensure proper UTF-8 encoding
      const fileWithProperName = new File([file], file.name, {
        type: file.type,
        lastModified: file.lastModified
      });
      formData.append('files', fileWithProperName);
      console.log(`API: Added file ${index + 1}:`, file.name, 'size:', file.size);
    });

    console.log('API: Making request to /convert/csv-to-epub/batch');
    const response = await this.makeRequest('/convert/csv-to-epub/batch', 'POST', formData);
    const result = await response.json();
    
    console.log('API: CSV to EPUB batch conversion response:', result);
    
    // Track batch conversions
    if (result.results) {
      const totalSize = result.results.reduce((sum: number, r: any) => {
        return sum + (r.size || 0);
      }, 0);
    }
    
    return result;
  }

  async convertBatchCsvToHtml(files: File[]): Promise<BatchConversionResult> {
    const formData = new FormData();
    
    console.log('API: Starting CSV to HTML batch conversion with', files.length, 'files');
    
    // Add files with proper UTF-8 handling
    files.forEach((file, index) => {
      // Create a new File object to ensure proper UTF-8 encoding
      const fileWithProperName = new File([file], file.name, {
        type: file.type,
        lastModified: file.lastModified
      });
      formData.append('files', fileWithProperName);
      console.log(`API: Added file ${index + 1}:`, file.name, 'size:', file.size);
    });

    console.log('API: Making request to /convert/csv-to-html/batch');
    const response = await this.makeRequest('/convert/csv-to-html/batch', 'POST', formData);
    const result = await response.json();
    
    console.log('API: CSV to HTML batch conversion response:', result);
    
    // Track batch conversions
    if (result.results) {
      const totalSize = result.results.reduce((sum: number, r: any) => {
        return sum + (r.size || 0);
      }, 0);
    }
    
    return result;
  }

  async convertBatchCsvToMd(files: File[]): Promise<BatchConversionResult> {
    const formData = new FormData();
    
    console.log('API: Starting CSV to Markdown batch conversion with', files.length, 'files');
    
    // Add files with proper UTF-8 handling
    files.forEach((file, index) => {
      // Create a new File object to ensure proper UTF-8 encoding
      const fileWithProperName = new File([file], file.name, {
        type: file.type,
        lastModified: file.lastModified
      });
      formData.append('files', fileWithProperName);
      console.log(`API: Added file ${index + 1}:`, file.name, 'size:', file.size);
    });

    console.log('API: Making request to /convert/csv-to-md/batch');
    const response = await this.makeRequest('/convert/csv-to-md/batch', 'POST', formData);
    const result = await response.json();
    
    console.log('API: CSV to Markdown batch conversion response:', result);
    
    // Track batch conversions
    if (result.results) {
      const totalSize = result.results.reduce((sum: number, r: any) => {
        return sum + (r.size || 0);
      }, 0);
    }
    
    return result;
  }

  async convertBatchCsvToMobi(files: File[]): Promise<BatchConversionResult> {
    const formData = new FormData();
    
    console.log('API: Starting CSV to MOBI batch conversion with', files.length, 'files');
    
    // Add files with proper UTF-8 handling
    files.forEach((file, index) => {
      // Create a new File object to ensure proper UTF-8 encoding
      const fileWithProperName = new File([file], file.name, {
        type: file.type,
        lastModified: file.lastModified
      });
      formData.append('files', fileWithProperName);
      console.log(`API: Added file ${index + 1}:`, file.name, 'size:', file.size);
    });

    console.log('API: Making request to /convert/csv-to-mobi/batch');
    const response = await this.makeRequest('/convert/csv-to-mobi/batch', 'POST', formData);
    const result = await response.json();
    
    console.log('API: CSV to MOBI batch conversion response:', result);
    
    // Track batch conversions
    if (result.results) {
      const totalSize = result.results.reduce((sum: number, r: any) => {
        return sum + (r.size || 0);
      }, 0);
    }
    
    return result;
  }

  async convertBatchCsvToOdp(files: File[]): Promise<BatchConversionResult> {
    const formData = new FormData();
    
    console.log('API: Starting CSV to ODP batch conversion with', files.length, 'files');
    
    // Add files with proper UTF-8 handling
    files.forEach((file, index) => {
      // Create a new File object to ensure proper UTF-8 encoding
      const fileWithProperName = new File([file], file.name, {
        type: file.type,
        lastModified: file.lastModified
      });
      formData.append('files', fileWithProperName);
      console.log(`API: Added file ${index + 1}:`, file.name, 'size:', file.size);
    });

    console.log('API: Making request to /convert/csv-to-odp/batch');
    const response = await this.makeRequest('/convert/csv-to-odp/batch', 'POST', formData);
    const result = await response.json();
    
    console.log('API: CSV to ODP batch conversion response:', result);
    
    // Track batch conversions
    if (result.results) {
      const totalSize = result.results.reduce((sum: number, r: any) => {
        return sum + (r.size || 0);
      }, 0);
    }
    
    return result;
  }

  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    const response = await this.makeRequest('/health');
    return await response.json();
  }

  private extractFilename(contentDisposition: string | null): string | null {
    if (!contentDisposition) return null;
    
    // First try to get UTF-8 encoded filename (RFC 5987)
    const utf8Matches = contentDisposition.match(/filename\*=UTF-8''([^;]+)/);
    if (utf8Matches) {
      try {
        return decodeURIComponent(utf8Matches[1]);
      } catch (e) {
        console.warn('Failed to decode UTF-8 filename:', e);
      }
    }
    
    // Fallback to regular filename
    const matches = contentDisposition.match(/filename="([^"]+)"/);
    return matches ? matches[1] : null;
  }

  // Utility method to download a blob
  downloadBlob(blob: Blob, filename: string): void {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    
    // Set charset to ensure proper handling of international characters
    link.setAttribute('charset', 'UTF-8');
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  // Method to download file from the new file-based endpoint
  async downloadFile(filename: string, originalFilename?: string): Promise<Blob> {
    try {
      // If filename already starts with /download/ or /batch-download/, use it as-is
      const endpoint = (filename.startsWith('/download/') || filename.startsWith('/batch-download/')) 
        ? filename 
        : `/download/${filename}`;
      const response = await this.makeRequest(endpoint);
      const blob = await response.blob();
      
      return blob;
    } catch (error) {
      console.error('Download failed:', error);
      throw new Error('Failed to download file');
    }
  }

  // Method to download file and trigger browser download
  async downloadAndSaveFile(filename: string, originalFilename?: string): Promise<void> {
    try {
      // If filename already starts with /download/ or /batch-download/, use it as-is
      const endpoint = (filename.startsWith('/download/') || filename.startsWith('/batch-download/'))
        ? filename
        : `/download/${filename}`;
      
      const response = await this.makeRequest(endpoint);
      const blob = await response.blob();
      
      // Try to extract filename from Content-Disposition header first
      const contentDisposition = response.headers.get('Content-Disposition');
      const extractedFilename = this.extractFilename(contentDisposition);
      
      // Use extracted filename, then originalFilename, then fallback to cleaned filename
      const downloadFilename = extractedFilename || originalFilename || filename.replace(/^\d+_/, '').replace('/download/', '').replace('/batch-download/', '');
      
      this.downloadBlob(blob, downloadFilename);
    } catch (error) {
      console.error('Download failed:', error);
      throw new Error('Failed to download file');
    }
  }
}

export const apiService = new ApiService();
