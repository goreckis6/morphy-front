// Robust migration script that properly handles TypeScript object literals
// Merges translations from i18n_v2.ts into i18n.ts

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

// Function to find the start and end of a language section
function findLanguageBounds(content, lang) {
    // Find: lang: { translation: { ... } }
    const langPattern = new RegExp(`(\\s+${lang}\\s*:\\s*\\{[^}]*translation\\s*:\\s*\\{)`, 's');
    const match = content.match(langPattern);
    
    if (!match) return null;
    
    const startPos = match.index;
    const prefix = match[1];
    let pos = startPos + prefix.length;
    let depth = 1;
    let braceCount = 1;
    
    // Count braces to find the end
    while (pos < content.length && braceCount > 0) {
        const char = content[pos];
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
        pos++;
    }
    
    // Find the closing pattern
    const remaining = content.substring(pos);
    const closingMatch = remaining.match(/^(\s*\}\s*\}\s*,?)/);
    const endPos = pos + (closingMatch ? closingMatch[1].length : 0);
    
    return {
        start: startPos,
        end: endPos,
        prefix: prefix,
        content: content.substring(startPos + prefix.length, pos - 1),
        suffix: closingMatch ? closingMatch[1] : '  },\n'
    };
}

// Function to extract all translation keys (including nested)
function extractAllKeys(translationBlock) {
    const keys = new Map();
    const lines = translationBlock.split('\n');
    
    let i = 0;
    while (i < lines.length) {
        const line = lines[i];
        const trimmed = line.trim();
        
        // Skip empty lines and comments
        if (!trimmed || trimmed.startsWith('//')) {
            i++;
            continue;
        }
        
        // Match: 'key': value
        const keyMatch = trimmed.match(/^'([^']+)'\s*:\s*(.+)$/);
        if (keyMatch) {
            const key = keyMatch[1];
            const valuePart = keyMatch[2].trim();
            
            // Check if it's a nested object
            if (valuePart.startsWith('{')) {
                // Collect nested object
                let nestedLines = [line];
                let braceCount = (valuePart.match(/\{/g) || []).length - (valuePart.match(/\}/g) || []).length;
                let j = i + 1;
                
                while (braceCount > 0 && j < lines.length) {
                    nestedLines.push(lines[j]);
                    const lineContent = lines[j];
                    braceCount += (lineContent.match(/\{/g) || []).length - (lineContent.match(/\}/g) || []).length;
                    j++;
                }
                
                keys.set(key, {
                    type: 'nested',
                    fullText: nestedLines.join('\n')
                });
                i = j;
            } else {
                // Simple key-value
                keys.set(key, {
                    type: 'simple',
                    fullText: line
                });
                i++;
            }
        } else {
            i++;
        }
    }
    
    return keys;
}

// Process each language
for (const lang of languages) {
    console.log(`\n=== Processing ${lang} ===`);
    
    const v2Bounds = findLanguageBounds(i18nV2Content, lang);
    if (!v2Bounds) {
        console.log(`  ⚠️  Language ${lang} not found in i18n_v2.ts`);
        continue;
    }
    
    console.log(`  ✓ Found ${lang} in i18n_v2.ts`);
    
    const i18nBounds = findLanguageBounds(i18nContent, lang);
    if (!i18nBounds) {
        console.log(`  ⚠️  Language ${lang} not found in i18n.ts`);
        continue;
    }
    
    console.log(`  ✓ Found ${lang} in i18n.ts`);
    
    // Extract keys
    const existingKeys = extractAllKeys(i18nBounds.content);
    const newKeys = extractAllKeys(v2Bounds.content);
    
    console.log(`  Existing keys: ${existingKeys.size}`);
    console.log(`  New keys: ${newKeys.size}`);
    
    // Find missing keys
    const missingKeys = [];
    for (const [key, value] of newKeys) {
        if (!existingKeys.has(key)) {
            missingKeys.push({ key, value });
        }
    }
    
    console.log(`  Missing keys: ${missingKeys.length}`);
    
    if (missingKeys.length > 0) {
        // Add missing keys to the translation block
        let newTranslationBlock = i18nBounds.content;
        
        // Find insertion point (before the last closing brace)
        const lastBraceIndex = newTranslationBlock.lastIndexOf('}');
        if (lastBraceIndex > 0) {
            // Determine indentation from existing content
            const indentMatch = newTranslationBlock.match(/\n(\s+)'[^']+':/);
            const indent = indentMatch ? indentMatch[1] : '      ';
            
            // Format and add missing keys
            const newLines = missingKeys.map(item => {
                const lines = item.value.fullText.split('\n');
                return lines.map((line, idx) => {
                    if (idx === 0) {
                        return indent + line.trim();
                    }
                    return line; // Keep original indentation for nested content
                }).join('\n');
            });
            
            const insertion = '\n' + newLines.join('\n') + '\n';
            newTranslationBlock = newTranslationBlock.substring(0, lastBraceIndex) + 
                                 insertion + 
                                 newTranslationBlock.substring(lastBraceIndex);
            
            // Reconstruct the section
            const newSection = i18nBounds.prefix + newTranslationBlock + i18nBounds.suffix;
            
            // Update the content
            i18nContent = i18nContent.substring(0, i18nBounds.start) + 
                         newSection + 
                         i18nContent.substring(i18nBounds.end);
            
            totalMerged += missingKeys.length;
            console.log(`  ✓ Added ${missingKeys.length} new keys`);
            
            // Show sample of added keys
            if (missingKeys.length <= 10) {
                missingKeys.forEach(item => {
                    console.log(`    - ${item.key}`);
                });
            } else {
                missingKeys.slice(0, 5).forEach(item => {
                    console.log(`    - ${item.key}`);
                });
                console.log(`    ... and ${missingKeys.length - 5} more`);
            }
        }
    } else {
        console.log(`  ✓ No missing keys - already complete`);
    }
}

// Remove unused import
console.log('\n=== Removing unused import ===');
const importPattern = /import\s+\{\s*additionalTranslations\s*\}\s*from\s+['"].*i18n_v2['"];\s*\n?/;
if (importPattern.test(i18nContent)) {
    i18nContent = i18nContent.replace(importPattern, '');
    console.log('  ✓ Removed unused import');
} else {
    console.log('  - Import not found (may have been removed already)');
}

// Write updated file
console.log('\n=== Writing updated file ===');
fs.writeFileSync(i18nPath, i18nContent, 'utf8');
console.log(`  ✓ File updated: ${i18nPath}`);

console.log('\n=== Migration Complete ===');
console.log(`Total keys merged: ${totalMerged}`);
console.log(`Backup saved: ${backupPath}`);
console.log('\n⚠️  Please review the changes and test the build!');

