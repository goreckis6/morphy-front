// Supported languages configuration
export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'pl', name: 'Polish', nativeName: 'Polski' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia' },
  { code: 'tr', name: 'Turkish', nativeName: 'Türkçe' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska' },
];

export const DEFAULT_LANGUAGE = 'en';

// Helper to get localized URL
export const getLocalizedUrl = (path: string, lang: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${cleanPath}`;
};

// Helper to extract language from URL
export const getLanguageFromUrl = (pathname: string): string => {
  const parts = pathname.split('/').filter(Boolean);
  const lang = parts[0];
  return SUPPORTED_LANGUAGES.find(l => l.code === lang)?.code || DEFAULT_LANGUAGE;
};

// Translation type helper
export type TranslationKey = string;

// Simple translation function - can be enhanced later with actual translation files
export const t = (key: TranslationKey, lang: string = DEFAULT_LANGUAGE): string => {
  // For now, just return the key - will integrate with translation files later
  return key;
};
