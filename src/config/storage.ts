// Storage configuration - base URL is hidden from user-facing code
export const STORAGE_BASE_URL = 'https://cdn.morphyhub.com';

export const getStorageUrl = (filename: string): string => {
  return `${STORAGE_BASE_URL}/${filename}`;
};

