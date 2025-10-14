import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  const [validationError, setValidationError] = useState<ValidationError | null>(null);

  const clearValidationError = () => setValidationError(null);

  const getReadableSize = (bytes: number) => {
    const sizeInMb = bytes / (1024 * 1024);
    if (sizeInMb >= 1024) {
      return `${(sizeInMb / 1024).toFixed(2)} GB`;
    }
    return `${sizeInMb.toFixed(2)} MB`;
  };

  const validateFileSize = (file: File, limitBytes: number): ValidationResult => {
    if (file.size > limitBytes) {
      return {
        isValid: false,
        error: {
          code: 'file-too-large',
          message: t('validation.file_too_large', {
            filename: file.name,
            fileSize: getReadableSize(file.size),
            maxSize: getReadableSize(limitBytes)
          })
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
          message: t('validation.too_many_files', {
            count: files.length,
            max: BATCH_MAX_FILES
          })
        }
      };
    }

    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > BATCH_TOTAL_LIMIT_BYTES) {
      return {
        isValid: false,
        error: {
          code: 'batch-too-large',
          message: t('validation.batch_too_large', {
            totalSize: getReadableSize(totalSize),
            maxSize: getReadableSize(BATCH_TOTAL_LIMIT_BYTES)
          })
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

  const formatFileSize = (bytes: number) => getReadableSize(bytes);

  const getSingleInfoMessage = () =>
    t('validation.single_file_limit', { size: getReadableSize(SINGLE_FILE_LIMIT_BYTES) });

  const getBatchInfoMessage = () =>
    t('validation.batch_info', {
      count: BATCH_MAX_FILES,
      perFileSize: getReadableSize(BATCH_FILE_LIMIT_BYTES),
      totalSize: getReadableSize(BATCH_TOTAL_LIMIT_BYTES)
    });

  const getBatchSizeDisplay = useMemo(() => (totalSize: number) => {
    const text = t('validation.total_size', {
      current: formatFileSize(totalSize),
      max: getReadableSize(BATCH_TOTAL_LIMIT_BYTES)
    });
    const isWarning = totalSize > BATCH_TOTAL_LIMIT_BYTES * 0.8;
    return { text, isWarning };
  }, [t]);

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
