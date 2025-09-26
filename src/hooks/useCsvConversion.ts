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
}

interface UseCsvConversionOptions {
  targetFormat: string;
  extraOptions?: Record<string, string | number | boolean | undefined | null>;
}

export const useCsvConversion = ({ targetFormat, extraOptions = {} }: UseCsvConversionOptions) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [convertedFile, setConvertedFile] = useState<Blob | null>(null);
  const [convertedFilename, setConvertedFilename] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [batchMode, setBatchMode] = useState(false);
  const [batchFiles, setBatchFiles] = useState<File[]>([]);
  const [batchResults, setBatchResults] = useState<BatchResultItem[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    validationError,
    validateSingleFile,
    validateBatchFiles,
    getSingleInfoMessage,
    getBatchInfoMessage,
    getBatchSizeDisplay,
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
  };

  const buildConversionOptions = () => {
    const options: Record<string, string | number | boolean> = { format: targetFormat };

    Object.entries(extraOptions).forEach(([key, value]) => {
      if (value === undefined || value === null) {
        return;
      }
      options[key] = value;
    });

    return options;
  };

  const handleSingleConvert = async () => {
    if (!selectedFile) return;

    setIsConverting(true);
    setError(null);
    try {
      const result = await apiService.convertFile(selectedFile, buildConversionOptions());
      setConvertedFile(result.blob);
      setConvertedFilename(result.filename);
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
    try {
      const result = await apiService.convertBatch(batchFiles, buildConversionOptions());
      setBatchResults(result.results as BatchResultItem[]);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Batch conversion failed. Please try again.';
      setError(message);
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
  };

  const resetForm = () => {
    setSelectedFile(null);
    setConvertedFile(null);
    setConvertedFilename(null);
    setError(null);
    setPreviewUrl(null);
    setBatchFiles([]);
    setBatchResults([]);
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
    fileInputRef,
    getSingleInfoMessage,
    getBatchInfoMessage,
    getBatchSizeDisplay,
    handleFileSelect,
    handleBatchFileSelect,
    handleSingleConvert,
    handleBatchConvert,
    handleDownload,
    resetForm
  };
};

