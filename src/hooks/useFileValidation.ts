import { useState } from 'react';

// Standard file validation limits - can be adjusted based on user account in the future
export const FILE_LIMITS = {
  SINGLE_FILE_MAX_SIZE: 200 * 1024 * 1024, // 200MB per file
  BATCH_MAX_TOTAL_SIZE: 100 * 1024 * 1024, // 100MB total for batch
  BATCH_MAX_FILES: 20, // Maximum 20 files per batch
  RECOMMENDED_BATCH_SIZE: '5-10', // Recommended batch size for performance
} as const;

export interface FileValidationError {
  type: 'single_file_too_large' | 'batch_too_many_files' | 'batch_total_too_large';
  message: string;
}

export interface FileValidationResult {
  isValid: boolean;
  error?: FileValidationError;
  totalSize?: number;
}

export const useFileValidation = () => {
  const [validationError, setValidationError] = useState<string>('');

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
  };

  const validateSingleFile = (file: File): FileValidationResult => {
    setValidationError('');
    
    if (file.size > FILE_LIMITS.SINGLE_FILE_MAX_SIZE) {
      const error: FileValidationError = {
        type: 'single_file_too_large',
        message: `File size (${formatFileSize(file.size)}) exceeds the ${formatFileSize(FILE_LIMITS.SINGLE_FILE_MAX_SIZE)} limit. Please choose a smaller file.`
      };
      setValidationError(error.message);
      return { isValid: false, error };
    }

    return { isValid: true };
  };

  const validateBatchFiles = (files: FileList | File[]): FileValidationResult => {
    setValidationError('');
    
    const fileArray = Array.from(files);
    
    // Check file count limit
    if (fileArray.length > FILE_LIMITS.BATCH_MAX_FILES) {
      const error: FileValidationError = {
        type: 'batch_too_many_files',
        message: `Too many files selected (${fileArray.length}). Maximum ${FILE_LIMITS.BATCH_MAX_FILES} files allowed per batch.`
      };
      setValidationError(error.message);
      return { isValid: false, error };
    }

    // Check total size limit
    const totalSize = fileArray.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > FILE_LIMITS.BATCH_MAX_TOTAL_SIZE) {
      const error: FileValidationError = {
        type: 'batch_total_too_large',
        message: `Total batch size (${formatFileSize(totalSize)}) exceeds the ${formatFileSize(FILE_LIMITS.BATCH_MAX_TOTAL_SIZE)} limit. Please reduce the number of files or choose smaller files.`
      };
      setValidationError(error.message);
      return { isValid: false, error, totalSize };
    }

    return { isValid: true, totalSize };
  };

  const getBatchInfoMessage = (): string => {
    return `💡 Maximum batch size: ${formatFileSize(FILE_LIMITS.BATCH_MAX_TOTAL_SIZE)} total. Maximum ${FILE_LIMITS.BATCH_MAX_FILES} files. For best performance, process ${FILE_LIMITS.RECOMMENDED_BATCH_SIZE} files at once.`;
  };

  const getBatchSizeDisplay = (currentSize: number): { text: string; isWarning: boolean } => {
    const percentage = (currentSize / FILE_LIMITS.BATCH_MAX_TOTAL_SIZE) * 100;
    const isWarning = percentage >= 80;
    
    return {
      text: `Total: ${formatFileSize(currentSize)} / ${formatFileSize(FILE_LIMITS.BATCH_MAX_TOTAL_SIZE)} limit`,
      isWarning
    };
  };

  const clearValidationError = () => {
    setValidationError('');
  };

  return {
    validationError,
    validateSingleFile,
    validateBatchFiles,
    getBatchInfoMessage,
    getBatchSizeDisplay,
    formatFileSize,
    clearValidationError,
    FILE_LIMITS,
  };
};
