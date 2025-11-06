// Storage configuration - base URL is hidden from user-facing code
export const STORAGE_BASE_URL = 'https://storage.waw.cloud.ovh.net/v1/AUTH_12a35dc6d4f74bc880de9ce0007ed0a5/morphyimg';

export const getStorageUrl = (filename: string): string => {
  return `${STORAGE_BASE_URL}/${filename}`;
};

