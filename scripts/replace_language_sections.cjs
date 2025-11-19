// Replace entire language sections in i18n.ts with versions from i18n_v2.ts
// This ensures all translations from i18n_v2.ts are migrated accurately.

const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, '../src/i18n.ts');
const i18nV2Path = path.join(__dirname, '../src/i18n_v2.ts');

const languagesToReplace = ['id', 'sv', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh'];

console.log('=== Replace Language Sections ===');
console.log(`Languages to replace: ${languagesToReplace.join(', ')}\n`);

const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const backupPath = `${i18nPath}.backup.${timestamp}`;
fs.copyFileSync(i18nPath, backupPath);
console.log(`Backup created: ${backupPath}\n`);

let i18nContent = fs.readFileSync(i18nPath, 'utf8');
const i18nV2Content = fs.readFileSync(i18nV2Path, 'utf8');

function extractLanguageSection(content, lang) {
  const regex = new RegExp(`(\\s+${lang}\\s*:\\s*\\{)`, 's');
  const match = regex.exec(content);

  if (!match) {
    return null;
  }

  const startIdx = match.index;
  let pos = startIdx + match[1].length;
  let depth = 1; // already inside the first "{"

  while (pos < content.length && depth > 0) {
    const char = content[pos];
    if (char === '{') depth++;
    if (char === '}') depth--;
    pos++;
  }

  // Include trailing whitespace and optional comma
  let endIdx = pos;
  while (endIdx < content.length && /\s/.test(content[endIdx])) {
    endIdx++;
  }
  if (content[endIdx] === ',') {
    endIdx++;
  }
  while (endIdx < content.length && /\s/.test(content[endIdx])) {
    // consume at most one newline after comma to keep formatting consistent
    if (content[endIdx] === '\n') {
      endIdx++;
      break;
    }
    endIdx++;
  }

  const section = content.substring(startIdx, endIdx);
  return { section, startIdx, endIdx };
}

let replacedCount = 0;

for (const lang of languagesToReplace) {
  const v2Section = extractLanguageSection(i18nV2Content, lang);
  const i18nSection = extractLanguageSection(i18nContent, lang);

  if (!v2Section) {
    console.warn(`⚠️  Language ${lang} not found in i18n_v2.ts`);
    continue;
  }
  if (!i18nSection) {
    console.warn(`⚠️  Language ${lang} not found in i18n.ts`);
    continue;
  }

  i18nContent = i18nContent.slice(0, i18nSection.startIdx) +
                v2Section.section +
                i18nContent.slice(i18nSection.endIdx);

  replacedCount++;
  console.log(`✓ Replaced language section: ${lang}`);
}

// Remove unused import if present
console.log('\nCleaning up unused imports...');
const importPattern = /import\s+\{\s*additionalTranslations\s*\}\s*from\s+['"].*i18n_v2['"];\s*\n?/;
if (importPattern.test(i18nContent)) {
  i18nContent = i18nContent.replace(importPattern, '');
  console.log('✓ Removed additionalTranslations import');
}

fs.writeFileSync(i18nPath, i18nContent, 'utf8');

console.log('\n=== Replacement Complete ===');
console.log(`Languages replaced: ${replacedCount}`);
console.log(`Output written to: ${i18nPath}`);


