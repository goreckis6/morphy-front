const fs = require('fs');

// Read the i18n.ts file
const content = fs.readFileSync('src/i18n.ts', 'utf8');

// Converters to check
const converters = ['csv_to_ppt', 'csv_to_pptx', 'csv_to_rtf', 'csv_to_txt', 'csv_to_xls', 'csv_to_xlsx'];

// Languages to check
const languages = [
  { code: 'en', name: 'English', startMarker: "const resources = {", section: 'en' },
  { code: 'pl', name: 'Polish', startMarker: "pl: {", section: 'pl' },
  { code: 'de', name: 'German', startMarker: "de: {", section: 'de' },
  { code: 'id', name: 'Indonesian', startMarker: "id: {", section: 'id' },
  { code: 'sv', name: 'Swedish', startMarker: "sv: {", section: 'sv' },
  { code: 'es', name: 'Spanish', startMarker: "es: {", section: 'es' },
  { code: 'fr', name: 'French', startMarker: "fr: {", section: 'fr' },
  { code: 'it', name: 'Italian', startMarker: "it: {", section: 'it' },
  { code: 'nl', name: 'Dutch', startMarker: "nl: {", section: 'nl' },
  { code: 'pt', name: 'Portuguese', startMarker: "pt: {", section: 'pt' },
  { code: 'vi', name: 'Vietnamese', startMarker: "vi: {", section: 'vi' },
  { code: 'tr', name: 'Turkish', startMarker: "tr: {", section: 'tr' },
  { code: 'ru', name: 'Russian', startMarker: "ru: {", section: 'ru' },
  { code: 'ar', name: 'Arabic', startMarker: "ar: {", section: 'ar' },
  { code: 'th', name: 'Thai', startMarker: "th: {", section: 'th' },
  { code: 'ja', name: 'Japanese', startMarker: "ja: {", section: 'ja' },
  { code: 'zh', name: 'Chinese', startMarker: "zh: {", section: 'zh' }
];

function extractKeysForConverter(content, converter, langCode) {
  const keys = [];
  const regex = new RegExp(`'(${converter}\\.\\w+)'\\s*:`, 'g');
  let match;
  
  // Extract language section
  let langSection = '';
  if (langCode === 'en') {
    // For English, it's in the translation object
    const translationMatch = content.match(/translation:\s*{([\s\S]*?)(?=\n\s*}\s*,\s*\n\s*}\s*,\s*\n\s*pl:|$)/);
    if (translationMatch) {
      langSection = translationMatch[1];
    }
  } else {
    // For other languages
    const langMarker = `${langCode}: {`;
    const startIdx = content.indexOf(langMarker);
    if (startIdx === -1) return keys;
    
    // Find the end of this language section (next language or end of resources)
    let braceCount = 0;
    let inSection = false;
    let endIdx = startIdx;
    
    for (let i = startIdx; i < content.length; i++) {
      if (content[i] === '{') {
        braceCount++;
        inSection = true;
      } else if (content[i] === '}') {
        braceCount--;
        if (inSection && braceCount === 1) {
          endIdx = i;
          break;
        }
      }
    }
    
    langSection = content.substring(startIdx, endIdx);
  }
  
  // Extract all keys for this converter
  while ((match = regex.exec(langSection)) !== null) {
    keys.push(match[1]);
  }
  
  return [...new Set(keys)]; // Remove duplicates
}

// Get English keys as baseline
const englishKeys = {};
for (const converter of converters) {
  const keys = extractKeysForConverter(content, converter, 'en');
  englishKeys[converter] = keys.sort();
  console.log(`\n${converter.toUpperCase()} - English baseline: ${keys.length} keys`);
}

// Check completeness for each language
const report = {
  summary: {},
  details: {}
};

for (const lang of languages) {
  console.log(`\n\n${'='.repeat(80)}`);
  console.log(`Checking ${lang.name} (${lang.code})`);
  console.log('='.repeat(80));
  
  report.details[lang.code] = {};
  
  for (const converter of converters) {
    const langKeys = extractKeysForConverter(content, converter, lang.code);
    const englishKeysForConverter = englishKeys[converter];
    
    const missing = englishKeysForConverter.filter(key => !langKeys.includes(key));
    const extra = langKeys.filter(key => !englishKeysForConverter.includes(key));
    
    console.log(`\n${converter}:`);
    console.log(`  English keys: ${englishKeysForConverter.length}`);
    console.log(`  ${lang.name} keys: ${langKeys.length}`);
    console.log(`  Missing: ${missing.length}`);
    if (extra.length > 0) {
      console.log(`  Extra (not in English): ${extra.length}`);
    }
    
    report.details[lang.code][converter] = {
      englishCount: englishKeysForConverter.length,
      langCount: langKeys.length,
      missing: missing,
      extra: extra
    };
    
    if (missing.length > 0) {
      console.log(`\n  Missing keys in ${lang.name}:`);
      missing.forEach(key => console.log(`    - ${key}`));
    }
    
    if (extra.length > 0) {
      console.log(`\n  Extra keys in ${lang.name} (not in English):`);
      extra.forEach(key => console.log(`    - ${key}`));
    }
    
    // Add to summary
    if (!report.summary[converter]) {
      report.summary[converter] = {};
    }
    report.summary[converter][lang.code] = {
      complete: missing.length === 0,
      missingCount: missing.length,
      extraCount: extra.length
    };
  }
}

// Write detailed report to file
const reportOutput = {
  generatedAt: new Date().toISOString(),
  converters: converters,
  languages: languages.map(l => ({ code: l.code, name: l.name })),
  englishBaseline: englishKeys,
  summary: report.summary,
  detailedMissingKeys: report.details
};

fs.writeFileSync('csv-converters-translation-report.json', JSON.stringify(reportOutput, null, 2));

// Generate summary table
console.log('\n\n' + '='.repeat(120));
console.log('SUMMARY TABLE');
console.log('='.repeat(120));
console.log('\nConverter completeness across all languages:\n');

// Header
console.log('Converter'.padEnd(15) + '| ' + languages.map(l => l.code.padEnd(5)).join(' | '));
console.log('-'.repeat(15) + '+-' + languages.map(() => '-'.repeat(5)).join('-+-'));

// Data rows
for (const converter of converters) {
  let row = converter.padEnd(15) + '| ';
  for (const lang of languages) {
    const data = report.summary[converter][lang.code];
    const symbol = data.complete ? '✓    ' : `${data.missingCount}`.padEnd(5);
    row += symbol + ' | ';
  }
  console.log(row.slice(0, -2)); // Remove trailing ' |'
}

console.log('\n✓ = Complete | Number = Missing keys count');
console.log(`\nDetailed report saved to: csv-converters-translation-report.json`);

// Count total missing translations
let totalMissing = 0;
let completeCount = 0;
let incompleteCount = 0;

for (const converter of converters) {
  for (const lang of languages) {
    const data = report.summary[converter][lang.code];
    totalMissing += data.missingCount;
    if (data.complete) {
      completeCount++;
    } else {
      incompleteCount++;
    }
  }
}

console.log(`\nTotal translations checked: ${converters.length * languages.length}`);
console.log(`Complete: ${completeCount}`);
console.log(`Incomplete: ${incompleteCount}`);
console.log(`Total missing keys: ${totalMissing}`);
