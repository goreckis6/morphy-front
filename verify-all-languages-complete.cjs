const fs = require('fs');
const path = require('path');

const samplesPagePath = path.join(__dirname, 'src/locales/samplesPage.ts');
const content = fs.readFileSync(samplesPagePath, 'utf-8');

// Extract all format keys from English (as reference)
// Look for the formats section and extract top-level keys
const enFormatsMatch = content.match(/en:\s*\{[\s\S]*?formats:\s*\{([\s\S]*?)\s*\}\s*\}/);
if (!enFormatsMatch) {
  console.error('Could not find English formats section');
  process.exit(1);
}

const enFormatsContent = enFormatsMatch[1];
const formatKeys = [];

// Match format keys - they appear at the start of a line with proper indentation
// Pattern: spaces, then key (quoted or unquoted), then colon, then opening brace
const formatKeyRegex = /^\s+(['"]?)([a-z0-9_-]+)\1\s*:\s*\{/gm;
let match;
while ((match = formatKeyRegex.exec(enFormatsContent)) !== null) {
  formatKeys.push(match[2]);
}

// Remove duplicates and sort
const uniqueFormatKeys = [...new Set(formatKeys)].sort();

console.log(`Found ${uniqueFormatKeys.length} unique formats in English\n`);

// All 17 languages
const languages = ['en', 'pl', 'de', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh', 'id', 'sv'];

const results = {};

languages.forEach(lang => {
  const langPattern = new RegExp(`${lang}:\\s*\\{[\\s\\S]*?formats:\\s*\\{([\\s\\S]*?)\\s*\\}\\s*\\}`, 'm');
  const langMatch = content.match(langPattern);
  
  if (!langMatch) {
    results[lang] = { found: 0, missing: uniqueFormatKeys.length, missingFormats: uniqueFormatKeys };
    return;
  }
  
  const langFormatsContent = langMatch[1];
  const foundFormats = [];
  const missingFormats = [];
  
  uniqueFormatKeys.forEach(formatKey => {
    // Escape special regex characters
    const escapedKey = formatKey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Match format key at start of line with proper indentation
    const formatPattern = new RegExp(`^\\s+(['"]?)${escapedKey}\\1\\s*:\\s*\\{`, 'm');
    if (formatPattern.test(langFormatsContent)) {
      foundFormats.push(formatKey);
    } else {
      missingFormats.push(formatKey);
    }
  });
  
  results[lang] = {
    found: foundFormats.length,
    missing: missingFormats.length,
    missingFormats: missingFormats
  };
});

// Display results
console.log('TRANSLATION STATUS FOR ALL 17 LANGUAGES:');
console.log('='.repeat(70));
console.log();

let allComplete = true;
languages.forEach(lang => {
  const result = results[lang];
  const status = result.missing === 0 ? '✅ COMPLETE' : '❌ MISSING';
  const percentage = ((result.found / uniqueFormatKeys.length) * 100).toFixed(1);
  console.log(`${lang.toUpperCase().padEnd(3)}: ${result.found.toString().padStart(3)}/${uniqueFormatKeys.length} formats (${percentage}%) ${status}`);
  
  if (result.missing > 0 && result.missing <= 20) {
    console.log(`       Missing: ${result.missingFormats.join(', ')}`);
  } else if (result.missing > 20) {
    console.log(`       Missing ${result.missing} formats: ${result.missingFormats.slice(0, 10).join(', ')}... (+${result.missing - 10} more)`);
  }
});

console.log();
console.log('='.repeat(70));
if (allComplete) {
  console.log('✅ ALL LANGUAGES HAVE COMPLETE TRANSLATIONS!');
  console.log(`Total: ${uniqueFormatKeys.length} formats × ${languages.length} languages = ${uniqueFormatKeys.length * languages.length} translation entries`);
} else {
  console.log('❌ SOME LANGUAGES ARE MISSING TRANSLATIONS');
  
  // Summary
  console.log('\nSUMMARY:');
  const incomplete = languages.filter(lang => results[lang].missing > 0);
  const complete = languages.filter(lang => results[lang].missing === 0);
  console.log(`✅ Complete: ${complete.length} languages`);
  console.log(`❌ Incomplete: ${incomplete.length} languages`);
  
  if (incomplete.length > 0) {
    console.log('\nIncomplete languages:');
    incomplete.forEach(lang => {
      console.log(`  - ${lang}: ${results[lang].missing} missing (${results[lang].found} found)`);
    });
  }
}
