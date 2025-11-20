const fs = require('fs');

// Read SamplesHub.tsx
const hubContent = fs.readFileSync('src/components/SamplesHub.tsx', 'utf8');
const pathMatches = hubContent.matchAll(/path:\s*["']\/samples\/sample-([^"']+)["']/g);
const formatsInHub = [...pathMatches].map(m => m[1]).filter(f => f);
console.log(`Found ${formatsInHub.length} formats in SamplesHub.tsx`);

// Read samplesPage.ts
const samplesPageContent = fs.readFileSync('src/locales/samplesPage.ts', 'utf8');

// Languages to check
const languages = ['en', 'pl', 'de', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh', 'id', 'sv'];

// Check each format in each language
const missing = {};
formatsInHub.forEach(format => {
  languages.forEach(lang => {
    // Check if format exists in this language
    // Pattern: formats: { ... formatKey: { name: ..., description: ... } }
    const formatPattern = new RegExp(`${lang}:\\s*{[^}]*samples_page:[^}]*formats:[^}]*${format.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:\\s*{[^}]*name:`);
    if (!formatPattern.test(samplesPageContent)) {
      if (!missing[format]) missing[format] = [];
      missing[format].push(lang);
    }
  });
});

// Count missing
const formatsWithMissing = Object.keys(missing);
const totalMissing = Object.values(missing).reduce((sum, langs) => sum + langs.length, 0);

console.log(`\nMissing translations:`);
console.log(`Formats with missing translations: ${formatsWithMissing.length}`);
console.log(`Total missing translation entries: ${totalMissing}`);

if (formatsWithMissing.length > 0) {
  console.log(`\nFormats missing translations:`);
  formatsWithMissing.forEach(format => {
    console.log(`  ${format}: missing in ${missing[format].length} language(s) - ${missing[format].join(', ')}`);
  });
} else {
  console.log(`\n✓ All formats have translations in all languages!`);
}

