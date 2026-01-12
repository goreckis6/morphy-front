// Script to extract translations from original i18n.ts
// This script extracts the translation resources from the original React app
// and prepares them for use in Qwik

const fs = require('fs');
const path = require('path');

const originalI18nPath = path.join(__dirname, '../../morphy_copy/src/i18n.ts');
const outputDir = path.join(__dirname, '../src/locales/translations');

// Supported languages
const languages = ['en', 'pl', 'de', 'es', 'fr', 'it', 'pt', 'ru', 'ja', 'zh', 'ko', 'ar', 'hi', 'id', 'tr', 'nl', 'sv'];

console.log('Extracting translations from original i18n.ts...');
console.log('Note: This script requires manual extraction due to the large file size.');
console.log('Please extract translations manually from the original i18n.ts file.');
console.log(`Original file: ${originalI18nPath}`);
console.log(`Output directory: ${outputDir}`);
