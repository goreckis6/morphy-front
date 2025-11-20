const fs = require('fs');
const path = require('path');

// All 17 languages
const languages = ['en', 'id', 'sv', 'de', 'es', 'fr', 'it', 'nl', 'pl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh'];

// Read English file to get all format keys
const enFile = fs.readFileSync('src/locales/sampleTranslation/en.ts', 'utf8');

// Extract format keys from the formats object
const formatsSection = enFile.match(/formats:\s*\{([\s\S]*?)\n\s*\};/);
if (!formatsSection) {
  console.error('Could not find formats section');
  process.exit(1);
}

const formatsContent = formatsSection[1];
// Match format keys (lines like "      docx: {")
const formatKeyRegex = /^\s+([a-z0-9_-]+):\s*\{/gm;
const formatKeys = [];
let match;
while ((match = formatKeyRegex.exec(formatsContent)) !== null) {
  formatKeys.push(match[1]);
}

console.log(`Found ${formatKeys.length} sample page formats in English file\n`);

// Check each language file
const results = {};
const missingTranslations = {};

formatKeys.forEach(formatKey => {
  results[formatKey] = {};
  missingTranslations[formatKey] = [];
  
  languages.forEach(lang => {
    try {
      const langFile = fs.readFileSync(`src/locales/sampleTranslation/${lang}.ts`, 'utf8');
      // Check if this format key exists in the language file
      const formatRegex = new RegExp(`\\s+${formatKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}:\\s*\\{`);
      if (formatRegex.test(langFile)) {
        results[formatKey][lang] = true;
      } else {
        results[formatKey][lang] = false;
        missingTranslations[formatKey].push(lang);
      }
    } catch (error) {
      results[formatKey][lang] = false;
      missingTranslations[formatKey].push(lang);
    }
  });
});

// Find formats with all 17 languages
const completeFormats = formatKeys.filter(key => 
  languages.every(lang => results[key][lang] === true)
);

// Find formats missing translations
const incompleteFormats = formatKeys.filter(key => 
  languages.some(lang => results[key][lang] === false)
);

console.log(`\n=== SUMMARY ===`);
console.log(`Total sample pages: ${formatKeys.length}`);
console.log(`Pages with ALL 17 languages: ${completeFormats.length}`);
console.log(`Pages MISSING translations: ${incompleteFormats.length}\n`);

if (incompleteFormats.length > 0) {
  console.log(`\n=== PAGES MISSING TRANSLATIONS ===`);
  incompleteFormats.forEach(format => {
    const missing = missingTranslations[format];
    console.log(`\n${format}:`);
    console.log(`  Missing in: ${missing.join(', ')} (${missing.length} languages)`);
  });
}

// Write detailed report to file
const report = {
  total: formatKeys.length,
  complete: completeFormats.length,
  incomplete: incompleteFormats.length,
  completeFormats,
  incompleteDetails: incompleteFormats.map(format => ({
    format,
    missing: missingTranslations[format],
    missingCount: missingTranslations[format].length
  }))
};

fs.writeFileSync('translation-report.json', JSON.stringify(report, null, 2));
console.log(`\nDetailed report saved to translation-report.json`);


