const fs = require('fs');

// Read SamplesHub.tsx and extract all format keys
const hubContent = fs.readFileSync('src/components/SamplesHub.tsx', 'utf8');
const pathMatches = hubContent.matchAll(/path:\s*["']\/samples\/sample-([^"']+)["']/g);
const formatsInHub = [...pathMatches].map(m => m[1]).filter(f => f).sort();

// Read samplesPage.ts
const samplesPageContent = fs.readFileSync('src/locales/samplesPage.ts', 'utf8');

// Languages to check
const languages = ['fr', 'it', 'pt', 'tr', 'ru', 'th', 'ja', 'id'];

// Check each format in each language
const missing = {};
formatsInHub.forEach(format => {
  languages.forEach(lang => {
    const escapedFormat = format.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`${lang}:\\s*{[\\s\\S]*?samples_page:[\\s\\S]*?formats:[\\s\\S]*?['"]?${escapedFormat}['"]?:\\s*{\\s*name:`, 'm');
    if (!pattern.test(samplesPageContent)) {
      if (!missing[format]) missing[format] = [];
      missing[format].push(lang);
    }
  });
});

const missingFormats = Object.keys(missing).filter(f => missing[f].length > 0).sort();

console.log(`Total missing formats: ${missingFormats.length}`);
console.log(`\nMissing formats list:`);
console.log(JSON.stringify(missingFormats, null, 2));

