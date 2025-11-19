// Full automated migration script using Node.js
// Properly parses TypeScript object literals and merges translations

const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, '../src/i18n.ts');
const i18nV2Path = path.join(__dirname, '../src/i18n_v2.ts');

console.log('=== Full Automated i18n Migration ===');
console.log('Using intelligent merge strategy\n');

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

let totalMerged = 0;

// Function to extract translation keys from a block
function extractKeys(block) {
    const keys = new Map();
    const lines = block.split('\n');
    let currentKey = null;
    let currentValue = [];
    let braceDepth = 0;
    let inString = false;
    let stringChar = null;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();
        
        // Skip comments
        if (trimmed.startsWith('//')) continue;
        
        // Check for key-value pair: 'key': 'value' or 'key': {
        const keyMatch = trimmed.match(/^'([^']+)'\s*:\s*(.+)$/);
        if (keyMatch) {
            const key = keyMatch[1];
            const value = keyMatch[2].trim();
            
            // Check if it's a nested object
            if (value.startsWith('{')) {
                // Find the closing brace
                let nestedLines = [line];
                let depth = (value.match(/\{/g) || []).length - (value.match(/\}/g) || []).length;
                let j = i + 1;
                
                while (depth > 0 && j < lines.length) {
                    nestedLines.push(lines[j]);
                    depth += (lines[j].match(/\{/g) || []).length - (lines[j].match(/\}/g) || []).length;
                    j++;
                }
                
                keys.set(key, {
                    type: 'nested',
                    lines: nestedLines,
                    fullText: nestedLines.join('\n')
                });
                i = j - 1;
            } else {
                // Simple value
                keys.set(key, {
                    type: 'simple',
                    line: line,
                    value: value
                });
            }
        }
    }
    
    return keys;
}

// Function to find language section boundaries
function findLanguageSection(content, lang) {
    // Pattern: lang: { translation: { ... } }
    const startPattern = new RegExp(`(\\s+${lang}\\s*:\\s*\\{[^}]*translation\\s*:\\s*\\{)`, 's');
    const match = content.match(startPattern);
    
    if (!match) return null;
    
    const startPos = match.index;
    const beforeMatch = match[1];
    let pos = startPos + beforeMatch.length;
    let depth = 1;
    let endPos = pos;
    
    // Find matching closing braces
    while (depth > 0 && pos < content.length) {
        const char = content[pos];
        if (char === '{') depth++;
        if (char === '}') depth--;
        pos++;
    }
    
    endPos = pos;
    const translationBlock = content.substring(startPos + beforeMatch.length, endPos - 1);
    const afterMatch = content.substring(endPos - 1, endPos + 100).match(/^(\}\s*\}\s*,?)/);
    
    return {
        before: beforeMatch,
        translation: translationBlock,
        after: afterMatch ? afterMatch[1] : '  },\n',
        startPos: startPos,
        endPos: endPos + (afterMatch ? afterMatch[1].length : 0)
    };
}

// Process each language
for (const lang of languages) {
    console.log(`\n=== Processing ${lang} ===`);
    
    const v2Section = findLanguageSection(i18nV2Content, lang);
    if (!v2Section) {
        console.log(`  Warning: Language ${lang} not found in i18n_v2.ts`);
        continue;
    }
    
    console.log(`  Found ${lang} in i18n_v2.ts`);
    
    const i18nSection = findLanguageSection(i18nContent, lang);
    if (!i18nSection) {
        console.log(`  Warning: Language ${lang} not found in i18n.ts`);
        continue;
    }
    
    console.log(`  Found ${lang} in i18n.ts`);
    
    // Extract keys
    const existingKeys = extractKeys(i18nSection.translation);
    const newKeys = extractKeys(v2Section.translation);
    
    console.log(`  Existing keys: ${existingKeys.size}`);
    console.log(`  New keys: ${newKeys.size}`);
    
    // Find missing keys
    const missingKeys = [];
    for (const [key, value] of newKeys) {
        if (!existingKeys.has(key)) {
            missingKeys.push({ key, value });
        }
    }
    
    console.log(`  Missing keys to add: ${missingKeys.length}`);
    
    if (missingKeys.length > 0) {
        // Build new translation block with missing keys
        let newTranslationBlock = i18nSection.translation;
        
        // Find insertion point (before the last closing brace)
        const lastBraceIndex = newTranslationBlock.lastIndexOf('}');
        if (lastBraceIndex > 0) {
            const indent = '      '; // Standard indent
            const newLines = missingKeys.map(item => {
                if (item.value.type === 'nested') {
                    return item.value.lines.map((line, idx) => {
                        if (idx === 0) return indent + line.trim();
                        return indent + line;
                    }).join('\n');
                } else {
                    return indent + item.value.line.trim();
                }
            });
            
            const insertion = '\n' + newLines.join('\n') + '\n';
            newTranslationBlock = newTranslationBlock.substring(0, lastBraceIndex) + 
                                 insertion + 
                                 newTranslationBlock.substring(lastBraceIndex);
            
            // Update the content
            const newSection = i18nSection.before + newTranslationBlock + i18nSection.after;
            i18nContent = i18nContent.substring(0, i18nSection.startPos) + 
                         newSection + 
                         i18nContent.substring(i18nSection.endPos);
            
            totalMerged += missingKeys.length;
            console.log(`  Added ${missingKeys.length} new keys`);
        }
    } else {
        console.log(`  No missing keys - already complete`);
    }
}

// Remove unused import
console.log('\n=== Removing unused import ===');
const importPattern = /import\s+\{\s*additionalTranslations\s*\}\s*from\s+['"].*i18n_v2['"];\s*\n?/;
if (importPattern.test(i18nContent)) {
    i18nContent = i18nContent.replace(importPattern, '');
    console.log('  Removed unused import');
}

// Write updated file
console.log('\n=== Writing updated file ===');
fs.writeFileSync(i18nPath, i18nContent, 'utf8');
console.log(`  File updated: ${i18nPath}`);

console.log('\n=== Migration Complete ===');
console.log(`Total keys merged: ${totalMerged}`);
console.log(`Backup saved: ${backupPath}`);
console.log('\nPlease review the changes and test the build!');



