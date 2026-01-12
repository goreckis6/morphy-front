// Translation loader utility for Qwik
// This will be extended to load translations from the original i18n.ts file

export type TranslationKey = string;
export type Translations = Record<string, string | Translations>;

// Basic translations - will be extended to load from original i18n.ts
import { enTranslations } from '../locales/en';
import { importTranslationsFromOriginal, shouldUseOriginalTranslations } from './translations-importer';

const translationsMap: Record<string, Translations> = {
  en: enTranslations as Translations,
  // TODO: Add other languages from original i18n.ts
  // Languages to add: pl, de, es, fr, it, pt, ru, ja, zh, ko, ar, hi, id, tr, nl, sv
};

// Simple translation function - loads translations from various sources
export const loadTranslations = async (lang: string): Promise<Translations> => {
  // Option 1: Try to load from original i18n.ts if enabled
  if (shouldUseOriginalTranslations()) {
    const originalTranslations = await importTranslationsFromOriginal(lang);
    if (Object.keys(originalTranslations).length > 0) {
      return originalTranslations;
    }
  }
  
  // Option 2: Use extracted translations from locales files
  // Option 3: Fallback to basic translations
  return translationsMap[lang] || translationsMap.en;
};

// Helper function to get nested translation value
export const getTranslationValue = (
  translations: Translations,
  key: TranslationKey
): string => {
  const keys = key.split('.');
  let value: any = translations;
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
};

// Helper to interpolate variables in translation strings
export const interpolate = (template: string, vars: Record<string, string | number>): string => {
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) => {
    return vars[key] !== undefined ? String(vars[key]) : `{{${key}}}`;
  });
};
