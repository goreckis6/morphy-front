const fs = require('fs');

const content = fs.readFileSync('src/i18n.ts', 'utf8');
const v2content = fs.readFileSync('src/i18n_v2.ts', 'utf8');

const langs = ['en', 'pl', 'de', 'id', 'sv', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh'];

const results = {};

langs.forEach(lang => {
  const isV2 = ['id', 'sv', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh'].includes(lang);
  const fileContent = isV2 ? v2content : content;
  
  // Find the language section
  const langIndex = fileContent.indexOf(`${lang}: {`);
  if (langIndex === -1) {
    results[lang] = 'NOT_FOUND';
    return;
  }
  
  // Find the end of this language section (next language or end of object)
  let braceCount = 0;
  let startPos = langIndex;
  let inLang = false;
  let endPos = startPos;
  
  for (let i = startPos; i < fileContent.length; i++) {
    if (fileContent[i] === '{') {
      braceCount++;
      inLang = true;
    } else if (fileContent[i] === '}') {
      braceCount--;
      if (inLang && braceCount === 0) {
        endPos = i + 1;
        break;
      }
    }
  }
  
  const langSection = fileContent.substring(startPos, endPos);
  const hasCsvToParquet = langSection.includes('csv_to_parquet.title');
  results[lang] = hasCsvToParquet ? 'YES' : 'NO';
});

console.log('CSV to Parquet Translation Check:');
console.log('================================');
Object.keys(results).sort().forEach(lang => {
  const status = results[lang];
  const icon = status === 'YES' ? '✅' : '❌';
  console.log(`${icon} ${lang.padEnd(3)}: ${status}`);
});

const missing = Object.values(results).filter(v => v !== 'YES');
console.log(`\nTotal: ${Object.keys(results).length} languages`);
console.log(`Has translations: ${Object.keys(results).length - missing.length}`);
console.log(`Missing: ${missing.length}`);

if (missing.length > 0) {
  console.log('\nMissing languages:');
  Object.keys(results).forEach(lang => {
    if (results[lang] !== 'YES') {
      console.log(`  - ${lang}`);
    }
  });
}

