// Translations importer for Qwik
// This module imports translations from the original React app's i18n.ts
// Due to the large file size (~85k lines), we'll use dynamic imports

import type { Translations } from './i18n-loader';

// Since the original i18n.ts file is very large, we have two options:
// 1. Extract translations manually to separate files
// 2. Use dynamic import from the original file (if it's accessible)
// 3. Copy the resources object structure

// For now, we'll use a hybrid approach:
// - Basic translations are in src/locales/en.ts
// - Full translations can be loaded from the original i18n.ts file
// - We can gradually migrate translations as needed

/**
 * Import translations from the original i18n.ts file
 * This is a placeholder that will be extended
 */
export const importTranslationsFromOriginal = async (lang: string): Promise<Translations> => {
  try {
    // Option 1: Dynamic import (if we can access the original file)
    // This requires the original file to export the resources object
    // const { resources } = await import('../../../morphy_copy/src/i18n.ts');
    // return resources[lang]?.translation || {};
    
    // Option 2: For now, return empty and use basic translations
    // Full translations should be extracted manually or via script
    return {};
  } catch (error) {
    // eslint-disable-next-line no-console
    console.warn(`Failed to load translations from original file for language: ${lang}`, error);
    return {};
  }
};

/**
 * Check if we should use the original i18n.ts file directly
 * This is useful during migration when both files exist
 */
export const shouldUseOriginalTranslations = (): boolean => {
  // Set to true if you want to use the original i18n.ts file
  // Requires exporting the resources object from the original file
  return false; // Set to true when ready to use original translations
};
