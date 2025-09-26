// API service for backend communication
const getApiBaseUrl = () => {
  // If environment variable is set, use it
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  
  // If we're in production (deployed), use the production backend
  if (import.meta.env.PROD) {
    return 'https://morphy-2-n2tb.onrender.com';
  }
  
  // Default to localhost for development
  return 'http://localhost:3000';
};

const API_BASE_URL = getApiBaseUrl();

export interface ConversionOptions {
  quality?: 'high' | 'medium' | 'low';
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
    body?: FormData | any
  ): Promise<Response> {
    const url = `${API_BASE_URL}${endpoint}`;
    
    const options: RequestInit = {
      method,
      headers: {},
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

    const response = await fetch(url, options);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: 'Unknown error' }));
      const message = errorData.details
        ? `${errorData.error || 'Error'}: ${errorData.details}`
        : (errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      throw new Error(message);
    }

    return response;
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
    if (options.quality) formData.append('quality', options.quality);
    if (options.lossless !== undefined) formData.append('lossless', options.lossless.toString());
    if (options.format) formData.append('format', options.format);
    if (options.width) formData.append('width', options.width.toString());
    if (options.height) formData.append('height', options.height.toString());
    if (options.iconSize) formData.append('iconSize', options.iconSize.toString());

    const response = await this.makeRequest('/api/convert', 'POST', formData);
    
    const blob = await response.blob();
    const contentDisposition = response.headers.get('Content-Disposition');
    const filename = this.extractFilename(contentDisposition) || 
                   `${file.name.replace(/\.[^.]+$/, '')}.${options.format || 'bin'}`;

    return {
      blob,
      filename,
      size: blob.size
    };
  }

  async convertBatch(files: File[], options: ConversionOptions = {}): Promise<BatchConversionResult> {
    const formData = new FormData();
    
    // Add files with proper UTF-8 handling
    files.forEach(file => {
      // Create a new File object to ensure proper UTF-8 encoding
      const fileWithProperName = new File([file], file.name, {
        type: file.type,
        lastModified: file.lastModified
      });
      formData.append('files', fileWithProperName);
    });
    
    // Add conversion options
    if (options.quality) formData.append('quality', options.quality);
    if (options.lossless !== undefined) formData.append('lossless', options.lossless.toString());
    if (options.format) formData.append('format', options.format);

    const response = await this.makeRequest('/api/convert/batch', 'POST', formData);
    return await response.json();
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
  async downloadFile(filename: string, originalFilename?: string): Promise<void> {
    try {
      const response = await this.makeRequest(`/download/${filename}`);
      const blob = await response.blob();
      
      // Try to extract filename from Content-Disposition header first
      const contentDisposition = response.headers.get('Content-Disposition');
      const extractedFilename = this.extractFilename(contentDisposition);
      
      // Use extracted filename, then originalFilename, then fallback to cleaned filename
      const downloadFilename = extractedFilename || originalFilename || filename.replace(/^\d+_/, '');
      
      this.downloadBlob(blob, downloadFilename);
    } catch (error) {
      console.error('Download failed:', error);
      throw new Error('Failed to download file');
    }
  }
}

export const apiService = new ApiService();
