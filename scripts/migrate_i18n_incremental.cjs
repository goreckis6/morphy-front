// Incremental migration script - merges one converter type at a time
// This is safer and allows verification after each step

const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, '../src/i18n.ts');
const i18nV2Path = path.join(__dirname, '../src/i18n_v2.ts');

console.log('=== Incremental i18n Migration ===');
console.log('Merging one converter type at a time\n');

// Create backup
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const backupPath = `${i18nPath}.backup.${timestamp}`;
fs.copyFileSync(i18nPath, backupPath);
console.log(`Backup created: ${backupPath}\n`);

// Read files
console.log('Reading files...');
let i18nContent = fs.readFileSync(i18nPath, 'utf8');
const i18nV2Content = fs.readFileSync(i18nV2Path, 'utf8');

// Languages to migrate
const languages = ['id', 'sv', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh'];

// Find all converter types in i18n_v2.ts
function findConverterTypes(content) {
    const converterTypes = new Set();
    const pattern = /'([a-z_]+_to_[a-z_]+)\.title':/g;
    let match;
    while ((match = pattern.exec(content)) !== null) {
        converterTypes.add(match[1]);
    }
    return Array.from(converterTypes).sort();
}

console.log('Identifying converter types...');
const converterTypes = findConverterTypes(i18nV2Content);
console.log(`Found ${converterTypes.length} converter types\n`);

// Determine which converter types to process (optional CLI argument)
let targetTypes = converterTypes;
if (process.argv.length > 2) {
  const requested = process.argv.slice(2)
    .join(' ')
    .split(',')
    .map(t => t.trim())
    .filter(Boolean);

  if (requested.length > 0) {
    targetTypes = converterTypes.filter(type => requested.includes(type));
    console.log(`Processing selected converter types: ${targetTypes.join(', ')}\n`);
  }
}

// Function to extract all keys for a converter type from a translation block
function extractConverterKeys(translationBlock, converterType) {
    const keys = [];
    const lines = translationBlock.split('\n');
    let i = 0;
    
    while (i < lines.length) {
        const line = lines[i];
        const trimmed = line.trim();
        
        // Check if this line starts a key for our converter type
        if (trimmed.startsWith(`'${converterType}.`)) {
            // Collect this key and its value
            let keyBlock = [line];
            let braceCount = 0;
            
            // Check if it's a nested object
            if (trimmed.includes('{')) {
                braceCount = (trimmed.match(/\{/g) || []).length - (trimmed.match(/\}/g) || []).length;
                i++;
                
                // Collect nested object
                while (braceCount > 0 && i < lines.length) {
                    keyBlock.push(lines[i]);
                    const lineContent = lines[i];
                    braceCount += (lineContent.match(/\{/g) || []).length - (lineContent.match(/\}/g) || []).length;
                    i++;
                }
            } else {
                i++;
            }
            
            keys.push(keyBlock.join('\n'));
        } else {
            i++;
        }
    }
    
    return keys;
}

// Function to check if converter type exists in translation block
function hasConverterType(translationBlock, converterType) {
    return translationBlock.includes(`'${converterType}.`);
}

// Function to find insertion point (before the last closing brace, after the last existing key)
function findInsertionPoint(translationBlock) {
    // Find the last non-empty, non-comment line before the closing brace
    const lines = translationBlock.split('\n');
    let lastContentLine = -1;
    
    for (let i = lines.length - 1; i >= 0; i--) {
        const trimmed = lines[i].trim();
        if (trimmed && !trimmed.startsWith('//') && trimmed !== '}') {
            lastContentLine = i;
            break;
        }
    }
    
    if (lastContentLine === -1) {
        // Find the last closing brace
        const lastBraceIndex = translationBlock.lastIndexOf('}');
        return lastBraceIndex > 0 ? lastBraceIndex : translationBlock.length;
    }
    
    // Find the end of the last line (including newline)
    let pos = 0;
    for (let i = 0; i <= lastContentLine; i++) {
        pos += lines[i].length + 1; // +1 for newline
    }
    
    return pos;
}

// Process each converter type
let totalMerged = 0;
const processedTypes = [];

for (const converterType of targetTypes) {
    console.log(`\n=== Processing ${converterType} ===`);
    
    let typeMerged = 0;
    let allLanguagesComplete = true;
    
    for (const lang of languages) {
        // Find language section in i18n_v2.ts
        const v2Pattern = new RegExp(`(\\s+${lang}\\s*:\\s*\\{[^}]*translation\\s*:\\s*\\{)`, 's');
        const v2Match = i18nV2Content.match(v2Pattern);
        
        if (!v2Match) continue;
        
        const v2StartPos = v2Match.index;
        const v2Prefix = v2Match[1];
        let pos = v2StartPos + v2Prefix.length;
        let braceCount = 1;
        
        // Find end of translation block
        while (pos < i18nV2Content.length && braceCount > 0) {
            const char = i18nV2Content[pos];
            if (char === '{') braceCount++;
            if (char === '}') braceCount--;
            pos++;
        }
        
        const v2TranslationBlock = i18nV2Content.substring(v2StartPos + v2Prefix.length, pos - 1);
        
        // Check if this converter type exists in v2
        if (!hasConverterType(v2TranslationBlock, converterType)) {
            continue; // Skip if not in v2
        }
        
        // Extract keys for this converter type from v2
        const v2Keys = extractConverterKeys(v2TranslationBlock, converterType);
        
        if (v2Keys.length === 0) continue;
        
        // Find language section in i18n.ts
        const i18nPattern = new RegExp(`(\\s+${lang}\\s*:\\s*\\{[^}]*translation\\s*:\\s*\\{)`, 's');
        const i18nMatch = i18nContent.match(i18nPattern);
        
        if (!i18nMatch) {
            console.log(`  ⚠️  Language ${lang} not found in i18n.ts`);
            continue;
        }
        
        const i18nStartPos = i18nMatch.index;
        const i18nPrefix = i18nMatch[1];
        let i18nPos = i18nStartPos + i18nPrefix.length;
        let i18nBraceCount = 1;
        
        // Find end of translation block
        while (i18nPos < i18nContent.length && i18nBraceCount > 0) {
            const char = i18nContent[i18nPos];
            if (char === '{') i18nBraceCount++;
            if (char === '}') i18nBraceCount--;
            i18nPos++;
        }
        
        const i18nTranslationBlock = i18nContent.substring(i18nStartPos + i18nPrefix.length, i18nPos - 1);
        const i18nSuffix = i18nContent.substring(i18nPos - 1).match(/^(\s*\}\s*\}\s*,?)/);
        const i18nEndPos = i18nPos + (i18nSuffix ? i18nSuffix[1].length : 0);
        
        // Check if converter type already exists
        if (hasConverterType(i18nTranslationBlock, converterType)) {
            console.log(`  ✓ ${lang}: ${converterType} already exists`);
            continue;
        }
        
        // Find insertion point
        const insertionPoint = findInsertionPoint(i18nTranslationBlock);
        
        // Determine indentation
        const indentMatch = i18nTranslationBlock.match(/\n(\s+)'[^']+':/);
        const indent = indentMatch ? indentMatch[1] : '      ';
        
        // Format keys with proper indentation
        const formattedKeys = v2Keys.map(keyBlock => {
            const keyLines = keyBlock.split('\n');
            return keyLines.map((line, idx) => {
                if (idx === 0) {
                    return indent + line.trim();
                }
                return line; // Keep original indentation for nested content
            }).join('\n');
        });
        
        // Insert keys
        const insertion = '\n' + formattedKeys.join('\n') + '\n';
        const newTranslationBlock = i18nTranslationBlock.substring(0, insertionPoint) + 
                                   insertion + 
                                   i18nTranslationBlock.substring(insertionPoint);
        
        // Update content
        const newSection = i18nPrefix + newTranslationBlock + (i18nSuffix ? i18nSuffix[1] : '  },\n');
        i18nContent = i18nContent.substring(0, i18nStartPos) + 
                     newSection + 
                     i18nContent.substring(i18nEndPos);
        
        typeMerged += v2Keys.length;
        totalMerged += v2Keys.length;
        allLanguagesComplete = false;
        console.log(`  ✓ ${lang}: Added ${v2Keys.length} keys`);
    }
    
    if (allLanguagesComplete) {
        console.log(`  ✓ All languages already have ${converterType}`);
    } else {
        processedTypes.push(converterType);
        console.log(`  ✓ Total: ${typeMerged} keys merged for ${converterType}`);
    }
}

// Remove unused import
console.log('\n=== Removing unused import ===');
const importPattern = /import\s+\{\s*additionalTranslations\s*\}\s*from\s+['"].*i18n_v2['"];\s*\n?/;
if (importPattern.test(i18nContent)) {
    i18nContent = i18nContent.replace(importPattern, '');
    console.log('  ✓ Removed unused import');
}

// Write updated file
console.log('\n=== Writing updated file ===');
fs.writeFileSync(i18nPath, i18nContent, 'utf8');
console.log(`  ✓ File updated: ${i18nPath}`);

console.log('\n=== Migration Complete ===');
console.log(`Total keys merged: ${totalMerged}`);
console.log(`Converter types processed: ${processedTypes.length}`);
console.log(`Processed types: ${processedTypes.slice(0, 10).join(', ')}${processedTypes.length > 10 ? '...' : ''}`);
console.log(`Backup saved: ${backupPath}`);
console.log('\n⚠️  Please review the changes and test the build!');


