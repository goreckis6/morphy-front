import { useState } from 'react';

interface ValidationError {
  code: 'too-many-files' | 'file-too-large' | 'batch-too-large' | 'invalid-type';
  message: string;
}

interface ValidationResult {
  isValid: boolean;
  error?: ValidationError;
}

const SINGLE_FILE_LIMIT_BYTES = 100 * 1024 * 1024; // 100MB
const BATCH_FILE_LIMIT_BYTES = 100 * 1024 * 1024; // 100MB per file
const BATCH_TOTAL_LIMIT_BYTES = 100 * 1024 * 1024; // 100MB total per batch
const BATCH_MAX_FILES = 20;

export const useFileValidation = () => {
  const [validationError, setValidationError] = useState<ValidationError | null>(null);

  const clearValidationError = () => setValidationError(null);

  const getReadableSize = (bytes: number) => {
    if (bytes >= 1024 * 1024 * 1024) {
      return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    if (bytes >= 1024 * 1024) {
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    }
    if (bytes >= 1024) {
      return `${(bytes / 1024).toFixed(2)} KB`;
    }
    return `${bytes} bytes`;
  };

  const validateFileSize = (file: File, limitBytes: number): ValidationResult => {
    if (file.size > limitBytes) {
      return {
        isValid: false,
        error: {
          code: 'file-too-large',
          message: `File "${file.name}" is too large (${getReadableSize(file.size)}). Maximum allowed size is ${getReadableSize(limitBytes)}.`
        }
      };
    }
    return { isValid: true };
  };

  const validateBatchSize = (files: File[]): ValidationResult => {
    if (files.length > BATCH_MAX_FILES) {
      return {
        isValid: false,
        error: {
          code: 'too-many-files',
          message: `Too many files selected (${files.length}). Maximum allowed is ${BATCH_MAX_FILES}.`
        }
      };
    }

    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > BATCH_TOTAL_LIMIT_BYTES) {
      return {
        isValid: false,
        error: {
          code: 'batch-too-large',
          message: `Total batch size ${getReadableSize(totalSize)} exceeds the limit of ${getReadableSize(BATCH_TOTAL_LIMIT_BYTES)}.`
        }
      };
    }

    for (const file of files) {
      const result = validateFileSize(file, BATCH_FILE_LIMIT_BYTES);
      if (!result.isValid) {
        return result;
      }
    }

    return { isValid: true };
  };

  const validateSingleFile = (file: File): ValidationResult => {
    const result = validateFileSize(file, SINGLE_FILE_LIMIT_BYTES);
    if (!result.isValid) {
      setValidationError(result.error!);
    }
    return result;
  };

  const validateBatchFiles = (files: File[]): ValidationResult => {
    const result = validateBatchSize(files);
    if (!result.isValid) {
      setValidationError(result.error!);
    }
    return result;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes >= 1024 * 1024 * 1024) {
      return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
    }
    if (bytes >= 1024 * 1024) {
      return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
    }
    if (bytes >= 1024) {
      return `${(bytes / 1024).toFixed(2)} KB`;
    }
    return `${bytes} bytes`;
  };

  const getSingleInfoMessage = () =>
    `Single file limit: ${formatFileSize(SINGLE_FILE_LIMIT_BYTES)} per file.`;

  const getBatchInfoMessage = () =>
    `Batch conversion supports up to ${BATCH_MAX_FILES} files, ${formatFileSize(BATCH_FILE_LIMIT_BYTES)} per file, ${formatFileSize(BATCH_TOTAL_LIMIT_BYTES)} total.`;

  const getBatchSizeDisplay = (totalSize: number) => {
    const text = `Total size: ${formatFileSize(totalSize)} of ${formatFileSize(BATCH_TOTAL_LIMIT_BYTES)} allowed.`;
    const isWarning = totalSize > BATCH_TOTAL_LIMIT_BYTES * 0.8;
    return { text, isWarning };
  };

  return {
    validationError,
    validateSingleFile,
    validateBatchFiles,
    getSingleInfoMessage,
    getBatchInfoMessage,
    getBatchSizeDisplay,
    formatFileSize,
    clearValidationError
  };
};
