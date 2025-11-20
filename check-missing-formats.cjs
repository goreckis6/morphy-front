const fs = require('fs');

// Read SamplesHub.tsx and extract all format keys
const hubContent = fs.readFileSync('src/components/SamplesHub.tsx', 'utf8');
const pathMatches = hubContent.matchAll(/path:\s*["']\/samples\/sample-([^"']+)["']/g);
const formatsInHub = [...pathMatches].map(m => m[1]).filter(f => f).sort();
console.log(`Found ${formatsInHub.length} formats in SamplesHub.tsx\n`);

// Read samplesPage.ts
const samplesPageContent = fs.readFileSync('src/locales/samplesPage.ts', 'utf8');

// Extract format keys - handle both quoted and unquoted keys
// Pattern: formatKey: { or 'formatKey': { or "formatKey": {
const formatPattern = /(?:['"]?)(\w+(?:-\w+)*)(?:['"]?):\s*\{\s*name:/g;
const formatsInTranslations = [];
let match;
while ((match = formatPattern.exec(samplesPageContent)) !== null) {
  const formatKey = match[1];
  // Skip if it's not a format (like 'meta', 'schema', 'hero', etc.)
  if (!['meta', 'schema', 'hero', 'back_button', 'search', 'categories', 'actions', 'no_results', 'features', 'format_description_template', 'formats'].includes(formatKey)) {
    formatsInTranslations.push(formatKey);
  }
}

// Get unique format keys (they appear multiple times for each language)
const uniqueFormatsInTranslations = [...new Set(formatsInTranslations)].sort();

console.log(`Found ${uniqueFormatsInTranslations.length} unique formats in samplesPage.ts\n`);

// Find missing formats
const missingFormats = formatsInHub.filter(f => !uniqueFormatsInTranslations.includes(f));
const extraFormats = uniqueFormatsInTranslations.filter(f => !formatsInHub.includes(f));

console.log(`Missing formats (in SamplesHub but not in translations): ${missingFormats.length}`);
if (missingFormats.length > 0) {
  console.log(missingFormats.join(', '));
}

console.log(`\nExtra formats (in translations but not in SamplesHub): ${extraFormats.length}`);
if (extraFormats.length > 0) {
  console.log(extraFormats.join(', '));
}

// Now check which languages have these missing formats
const languages = ['en', 'pl', 'de', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh', 'id', 'sv'];
const missingByLanguage = {};

if (missingFormats.length > 0) {
  console.log(`\nChecking which languages are missing these formats...`);
  missingFormats.forEach(format => {
    languages.forEach(lang => {
      // Check if this format exists for this language
      // Look for pattern: lang: { ... formats: { ... formatKey: { name:
      const escapedFormat = format.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const langPattern = new RegExp(`${lang}:\\s*{[^}]*samples_page:[^}]*formats:[^}]*['"]?${escapedFormat}['"]?:\\s*{\\s*name:`, 's');
      if (!langPattern.test(samplesPageContent)) {
        if (!missingByLanguage[format]) missingByLanguage[format] = [];
        missingByLanguage[format].push(lang);
      }
    });
  });
  
  console.log(`\nMissing translations by format:`);
  Object.keys(missingByLanguage).forEach(format => {
    console.log(`  ${format}: missing in ${missingByLanguage[format].length} language(s) - ${missingByLanguage[format].join(', ')}`);
  });
  
  const totalMissing = Object.values(missingByLanguage).reduce((sum, langs) => sum + langs.length, 0);
  console.log(`\nTotal missing translation entries: ${totalMissing}`);
} else {
  console.log(`\n✓ All formats have translations!`);
}
