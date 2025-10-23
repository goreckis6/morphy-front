import { useState, useRef } from 'react';
import { apiService } from '../services/api';
import { useFileValidation } from './useFileValidation';

export interface BatchResultItem {
  originalName: string;
  outputFilename?: string;
  success: boolean;
  downloadPath?: string;
  storedFilename?: string;
  error?: string;
  size?: number;
}

interface UseCsvConversionOptions {
  targetFormat: string;
}

export const useCsvConversion = ({ targetFormat }: UseCsvConversionOptions) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchResults, setBatchResults] = useState<BatchResultItem[]>([]);
  const [batchConverted, setBatchConverted] = useState(false);
  const [conversionLimitReached, setConversionLimitReached] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Mock user state - replace with actual user authentication
  const user = null;

  const {
    validationError,
    validateSingleFile,
    validateBatchFiles,
    getSingleInfoMessage,
    getBatchInfoMessage,
    getBatchSizeDisplay,
    formatFileSize,
    clearValidationError
  } = useFileValidation();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith('.csv')) {
      setError('Please select a valid CSV file');
      return;
    }

    const validation = validateSingleFile(file);
    if (!validation.isValid) {
      setError(validation.error?.message || 'File validation failed.');
      if (fileInputRef.current) fileInputRef.current.value = '';
      setSelectedFile(null);
      setPreviewUrl(null);
      return;
    }

    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
    setConvertedFile(null);
    setConvertedFilename(null);
    setBatchResults([]);
    setBatchConverted(false);
    setError(null);
    clearValidationError();
  };

  const handleBatchFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    const csvFiles = files.filter(file => file.name.toLowerCase().endsWith('.csv'));

    if (csvFiles.length === 0) {
      setError('No valid CSV files selected.');
      if (fileInputRef.current) fileInputRef.current.value = '';
      setBatchFiles([]);
      return;
    }

    const validation = validateBatchFiles(csvFiles);
    if (!validation.isValid) {
      setError(validation.error?.message || 'Batch validation failed.');
      if (fileInputRef.current) fileInputRef.current.value = '';
      setBatchFiles([]);
      return;
    }

    setBatchFiles(csvFiles);
    setError(null);
    clearValidationError();
    setSelectedFile(null);
    setConvertedFile(null);
    setConvertedFilename(null);
    setPreviewUrl(null);
    setBatchResults([]);
    setBatchConverted(false);
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;

    setIsConverting(true);
    setError(null);
    setConversionLimitReached(false);
    
    try {
      const result = await apiService.convertFile(selectedFile, { format: targetFormat });
      setConvertedFile(result.blob);
      setConvertedFilename(result.filename);
      
      // Conversion is now recorded on the backend via IP-based tracking
      // Banner will refresh when user clicks download
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Conversion failed. Please try again.';
      setError(message);
    } finally {
      setIsConverting(false);
    }
  };

  const handleBatchConvert = async () => {
    if (batchFiles.length === 0) return;

    setIsConverting(true);
    setError(null);
    setConversionLimitReached(false);
    
    try {
      console.log('Starting batch conversion for', batchFiles.length, 'files to', targetFormat);
      
      // Use specific endpoint for CSV to DOC/DOCX/EPUB/HTML/MD/MOBI conversion
      let result;
      if (targetFormat === 'doc') {
        result = await apiService.convertBatchCsvToDoc(batchFiles);
      } else if (targetFormat === 'docx') {
        result = await apiService.convertBatchCsvToDocx(batchFiles);
      } else if (targetFormat === 'epub') {
        result = await apiService.convertBatchCsvToEpub(batchFiles);
      } else if (targetFormat === 'html') {
        result = await apiService.convertBatchCsvToHtml(batchFiles);
      } else if (targetFormat === 'md') {
        result = await apiService.convertBatchCsvToMd(batchFiles);
      } else if (targetFormat === 'mobi') {
        result = await apiService.convertBatchCsvToMobi(batchFiles);
      } else if (targetFormat === 'odp') {
        result = await apiService.convertBatchCsvToOdp(batchFiles);
      } else {
        result = await apiService.convertBatch(batchFiles, { format: targetFormat });
      }
      
      console.log('Batch conversion result:', result);
      
      const results = (result.results as BatchResultItem[]) ?? [];
      setBatchResults(results);
      
      const successCount = results.filter(item => item.success).length;
      console.log('Successful conversions:', successCount, 'out of', results.length);
      
      setBatchConverted(successCount > 0);
      
      // Conversion is now recorded on the backend via IP-based tracking
      // Banner will refresh when user downloads files
      
      if (successCount === 0) {
        const errorMessages = results
          .filter(item => !item.success && item.error)
          .map(item => item.error)
          .join(', ');
        setError(`Batch conversion failed: ${errorMessages || 'No files were successfully converted.'}`);
      }
    } catch (err) {
      console.error('Batch conversion error:', err);
      const message = err instanceof Error ? err.message : 'Batch conversion failed. Please try again.';
      setError(message);
      setBatchConverted(false);
      setBatchResults([]);
    } finally {
      setIsConverting(false);
    }
  };

  const handleDownload = () => {
    if (!convertedFile) return;
    const url = URL.createObjectURL(convertedFile);
    const a = document.createElement('a');
    a.href = url;
    a.download = convertedFilename || (selectedFile ? selectedFile.name.replace(/\.[^.]+$/, `.${targetFormat}`) : `converted.${targetFormat}`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    // Refresh the conversion limit banner for anonymous users after download
    if (!user && (window as any).refreshConversionLimitBanner) {
      (window as any).refreshConversionLimitBanner();
    }
  };

  const getSafeFilename = (result: any) => {
    try {
      if (result?.outputFilename) return result.outputFilename;
      if (result?.filename) return result.filename;
      if (result?.originalName && typeof result.originalName === 'string') {
        return result.originalName.replace(/\.[^.]+$/, `.${targetFormat}`);
      }
      return `converted.${targetFormat}`;
    } catch (error) {
      console.warn('Error processing filename:', error);
      return `converted.${targetFormat}`;
    }
  };

  const handleBatchDownload = async (result: BatchResultItem) => {
    try {
      console.log('Downloading batch result:', result);
      
      if (result.storedFilename) {
        // Use backend API to fetch the file from the correct origin
        console.log('Using storedFilename for download:', result.storedFilename);
        const filename = getSafeFilename(result);
        await apiService.downloadAndSaveFile(result.storedFilename, filename);
        
        // Refresh the conversion limit banner for anonymous users after first batch download
        if (!user && (window as any).refreshConversionLimitBanner) {
          (window as any).refreshConversionLimitBanner();
        }
        return;
      }
      if (result.downloadPath) {
        console.log('Using downloadPath for download:', result.downloadPath);
        
        // Check if downloadPath is a base64 data URL
        if (result.downloadPath.startsWith('data:')) {
          // Convert base64 data URL to blob and download
          const response = await fetch(result.downloadPath);
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = getSafeFilename(result);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        } else {
          // Regular download path - use API service
          const blob = await apiService.downloadFile(result.downloadPath);
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = getSafeFilename(result);
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          URL.revokeObjectURL(url);
        }
        
        // Refresh the conversion limit banner for anonymous users after first batch download
        if (!user && (window as any).refreshConversionLimitBanner) {
          (window as any).refreshConversionLimitBanner();
        }
        return;
      }
      if (result.downloadUrl) {
        // Handle downloadUrl from the new CSV to DOC batch endpoint
        console.log('Using downloadUrl for download:', result.downloadUrl);
        const link = document.createElement('a');
        link.href = result.downloadUrl;
        link.download = result.filename || result.outputFilename || `converted.${targetFormat}`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Refresh the conversion limit banner for anonymous users after first batch download
        if (!user && (window as any).refreshConversionLimitBanner) {
          (window as any).refreshConversionLimitBanner();
        }
        return;
      }
      
      console.error('No valid download path found for result:', result);
      setError('Download failed: No valid download path found.');
    } catch (e) {
      console.error('Batch download failed:', e);
      setError(`Download failed: ${e instanceof Error ? e.message : 'Unknown error'}`);
    }
  };

  const resetForm = () => {
    setSelectedFile(null);
    setConvertedFile(null);
    setConvertedFilename(null);
    setError(null);
    setPreviewUrl(null);
    setBatchFiles([]);
    setBatchResults([]);
    setBatchConverted(false);
    setConversionLimitReached(false);
    clearValidationError();
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return {
    selectedFile,
    convertedFile,
    convertedFilename,
    isConverting,
    error,
    setError,
    validationError,
    previewUrl,
    batchMode,
    setBatchMode,
    batchFiles,
    batchResults,
    batchConverted,
    conversionLimitReached,
    fileInputRef,
    getSingleInfoMessage,
    getBatchInfoMessage,
    getBatchSizeDisplay,
    formatFileSize,
    handleFileSelect,
    handleBatchFileSelect,
    handleSingleConvert,
    handleBatchConvert,
    handleDownload,
    handleBatchDownload,
    resetForm
  };
};

