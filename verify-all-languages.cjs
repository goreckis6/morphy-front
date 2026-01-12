const fs = require('fs');

// Read SamplesHub.tsx and extract all format keys
const hubContent = fs.readFileSync('src/components/SamplesHub.tsx', 'utf8');
const pathMatches = hubContent.matchAll(/path:\s*["']\/samples\/sample-([^"']+)["']/g);
const formatsInHub = [...pathMatches].map(m => m[1]).filter(f => f).sort();

// Read samplesPage.ts
const samplesPageContent = fs.readFileSync('src/locales/samplesPage.ts', 'utf8');

// Languages to check
const languages = ['en', 'pl', 'de', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh', 'id', 'sv'];

// Check each format in each language
const missing = {};
formatsInHub.forEach(format => {
  languages.forEach(lang => {
    // Escape special regex characters in format key
    const escapedFormat = format.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Look for: lang: { ... samples_page: { ... formats: { ... formatKey: { name:
    // Use multiline matching
    const pattern = new RegExp(`${lang}:\\s*{[\\s\\S]*?samples_page:[\\s\\S]*?formats:[\\s\\S]*?['"]?${escapedFormat}['"]?:\\s*{\\s*name:`, 'm');
    if (!pattern.test(samplesPageContent)) {
      if (!missing[format]) missing[format] = [];
      missing[format].push(lang);
    }
  });
});

// Count missing
const formatsWithMissing = Object.keys(missing);
const totalMissing = Object.values(missing).reduce((sum, langs) => sum + langs.length, 0);

console.log(`Checking ${formatsInHub.length} formats across ${languages.length} languages...\n`);

if (formatsWithMissing.length > 0) {
  console.log(`❌ Missing translations found:`);
  console.log(`Formats with missing translations: ${formatsWithMissing.length}`);
  console.log(`Total missing translation entries: ${totalMissing}\n`);
  
  // Group by format
  formatsWithMissing.forEach(format => {
    console.log(`  ${format}: missing in ${missing[format].length} language(s) - ${missing[format].join(', ')}`);
  });
  
  // Group by language to see which languages are most incomplete
  const missingByLanguage = {};
  formatsWithMissing.forEach(format => {
    missing[format].forEach(lang => {
      if (!missingByLanguage[lang]) missingByLanguage[lang] = [];
      missingByLanguage[lang].push(format);
    });
  });
  
  console.log(`\nMissing translations by language:`);
  Object.keys(missingByLanguage).sort().forEach(lang => {
    console.log(`  ${lang}: ${missingByLanguage[lang].length} formats missing - ${missingByLanguage[lang].slice(0, 5).join(', ')}${missingByLanguage[lang].length > 5 ? '...' : ''}`);
  });
} else {
  console.log(`✓ All ${formatsInHub.length} formats have translations in all ${languages.length} languages!`);
}

