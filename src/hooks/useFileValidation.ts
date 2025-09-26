import { useState } from 'react';

interface ValidationError {
  code: 'too-many-files' | 'file-too-large' | 'batch-too-large';
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

const formatFileSize = (bytes: number): string => {
  if (bytes >= 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${bytes} bytes`;
};

const buildFileTooLargeError = (file: File, limitBytes: number): ValidationError => ({
  code: 'file-too-large',
  message: `File "${file.name}" is too large (${formatFileSize(file.size)}). Maximum allowed size is ${formatFileSize(limitBytes)}.`
});

const buildTooManyFilesError = (count: number): ValidationError => ({
  code: 'too-many-files',
  message: `Too many files selected (${count}). Maximum allowed is ${BATCH_MAX_FILES}.`
});

const buildBatchTooLargeError = (totalSize: number): ValidationError => ({
  code: 'batch-too-large',
  message: `Total batch size ${formatFileSize(totalSize)} exceeds the limit of ${formatFileSize(BATCH_TOTAL_LIMIT_BYTES)}.`
});

export const useFileValidation = () => {
  const [validationError, setValidationError] = useState<ValidationError | null>(null);

  const clearValidationError = () => setValidationError(null);

  const validateSingleFile = (file: File): ValidationResult => {
    if (file.size > SINGLE_FILE_LIMIT_BYTES) {
      const error = buildFileTooLargeError(file, SINGLE_FILE_LIMIT_BYTES);
      setValidationError(error);
      return { isValid: false, error };
    }

    clearValidationError();
    return { isValid: true };
  };

  const validateBatchFiles = (files: File[]): ValidationResult => {
    if (files.length > BATCH_MAX_FILES) {
      const error = buildTooManyFilesError(files.length);
      setValidationError(error);
      return { isValid: false, error };
    }

    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > BATCH_TOTAL_LIMIT_BYTES) {
      const error = buildBatchTooLargeError(totalSize);
      setValidationError(error);
      return { isValid: false, error };
    }

    for (const file of files) {
      if (file.size > BATCH_FILE_LIMIT_BYTES) {
        const error = buildFileTooLargeError(file, BATCH_FILE_LIMIT_BYTES);
        setValidationError(error);
        return { isValid: false, error };
      }
    }

    clearValidationError();
    return { isValid: true };
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
