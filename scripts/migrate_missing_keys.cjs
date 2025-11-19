// Migrate missing keys for existing converter types
// Finds keys that exist in i18n_v2.ts but are missing in i18n.ts

const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, '../src/i18n.ts');
const i18nV2Path = path.join(__dirname, '../src/i18n_v2.ts');

const targetConverter = process.argv[2] || null;

console.log('=== Migrate Missing Keys ===');
if (targetConverter) {
    console.log(`Processing: ${targetConverter}\n`);
} else {
    console.log('Processing all converter types\n');
}

// Create backup
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const backupPath = `${i18nPath}.backup.${timestamp}`;
fs.copyFileSync(i18nPath, backupPath);
console.log(`Backup created: ${backupPath}\n`);

// Read files
let i18nContent = fs.readFileSync(i18nPath, 'utf8');
const i18nV2Content = fs.readFileSync(i18nV2Path, 'utf8');

const languages = ['id', 'sv', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh'];

// Find language section
function findLanguageSection(content, lang) {
    const pattern = new RegExp(`(\\s+${lang}\\s*:\\s*\\{[^}]*translation\\s*:\\s*\\{)`, 's');
    const match = content.match(pattern);
    if (!match) return null;
    
    const startPos = match.index;
    const prefix = match[1];
    let pos = startPos + prefix.length;
    let braceCount = 1;
    
    while (pos < content.length && braceCount > 0) {
        if (content[pos] === '{') braceCount++;
        if (content[pos] === '}') braceCount--;
        pos++;
    }
    
    const remaining = content.substring(pos);
    const closingMatch = remaining.match(/^(\s*\}\s*\}\s*,?)/);
    const endPos = pos + (closingMatch ? closingMatch[1].length : 0);
    
    return {
        start: startPos,
        end: endPos,
        prefix: prefix,
        translation: content.substring(startPos + prefix.length, pos - 1),
        suffix: closingMatch ? closingMatch[1] : '  },\n'
    };
}

// Extract all keys for a converter type
function extractConverterKeys(translationBlock, converterType) {
    const keys = [];
    const lines = translationBlock.split('\n');
    let i = 0;
    
    while (i < lines.length) {
        const line = lines[i];
        const trimmed = line.trim();
        
        if (!trimmed || trimmed.startsWith('//')) {
            i++;
            continue;
        }
        
        if (trimmed.startsWith(`'${converterType}.`)) {
            let keyBlock = [line];
            let braceCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
            i++;
            
            while (braceCount > 0 && i < lines.length) {
                const nextLine = lines[i];
                keyBlock.push(nextLine);
                braceCount += (nextLine.match(/\{/g) || []).length - (nextLine.match(/\}/g) || []).length;
                i++;
            }
            
            keys.push(keyBlock.join('\n'));
        } else {
            i++;
        }
    }
    
    return keys;
}

// Get all converter types
function getAllConverterTypes(content) {
    const types = new Set();
    const pattern = /'([a-z_]+_to_[a-z_]+)\.title':/g;
    let match;
    while ((match = pattern.exec(content)) !== null) {
        types.add(match[1]);
    }
    return Array.from(types).sort();
}

// Process
let totalMerged = 0;
const converterTypes = targetConverter ? [targetConverter] : getAllConverterTypes(i18nV2Content);

for (const converterType of converterTypes) {
    console.log(`\n=== Processing ${converterType} ===`);
    let typeMerged = 0;
    
    for (const lang of languages) {
        const v2Section = findLanguageSection(i18nV2Content, lang);
        const i18nSection = findLanguageSection(i18nContent, lang);
        
        if (!v2Section || !i18nSection) continue;
        
        // Extract keys
        const v2Keys = extractConverterKeys(v2Section.translation, converterType);
        const i18nKeys = extractConverterKeys(i18nSection.translation, converterType);
        
        if (v2Keys.length === 0) continue;
        
        // Find missing keys by comparing key names
        const v2KeyNames = new Set();
        const i18nKeyNames = new Set();
        
        v2Keys.forEach(keyBlock => {
            const match = keyBlock.match(new RegExp(`'${converterType}\\.([^']+)'`));
            if (match) v2KeyNames.add(match[1]);
        });
        
        i18nKeys.forEach(keyBlock => {
            const match = keyBlock.match(new RegExp(`'${converterType}\\.([^']+)'`));
            if (match) i18nKeyNames.add(match[1]);
        });
        
        const missingKeyNames = Array.from(v2KeyNames).filter(k => !i18nKeyNames.has(k));
        
        if (missingKeyNames.length === 0) {
            console.log(`  ✓ ${lang}: All keys present`);
            continue;
        }
        
        // Find the missing key blocks
        const missingKeys = v2Keys.filter(keyBlock => {
            const match = keyBlock.match(new RegExp(`'${converterType}\\.([^']+)'`));
            return match && missingKeyNames.includes(match[1]);
        });
        
        // Find insertion point (after last key of this converter type or before closing brace)
        let insertionPoint = i18nSection.translation.length;
        const lastKeyIndex = i18nSection.translation.lastIndexOf(`'${converterType}.`);
        if (lastKeyIndex !== -1) {
            // Find end of last key
            let pos = lastKeyIndex;
            let braceCount = 0;
            let foundColon = false;
            
            while (pos < i18nSection.translation.length) {
                const char = i18nSection.translation[pos];
                if (char === ':') foundColon = true;
                if (foundColon && char === '{') braceCount++;
                if (foundColon && char === '}') {
                    braceCount--;
                    if (braceCount === 0) {
                        // Find the end of this line
                        while (pos < i18nSection.translation.length && i18nSection.translation[pos] !== '\n') {
                            pos++;
                        }
                        insertionPoint = pos + 1;
                        break;
                    }
                }
                pos++;
            }
        } else {
            // Converter type doesn't exist, find insertion point before closing brace
            insertionPoint = i18nSection.translation.lastIndexOf('}');
        }
        
        // Format keys
        const indentMatch = i18nSection.translation.match(/\n(\s+)'[^']+':/);
        const indent = indentMatch ? indentMatch[1] : '      ';
        
        const formattedKeys = missingKeys.map(keyBlock => {
            const keyLines = keyBlock.split('\n');
            return keyLines.map((line, idx) => {
                if (idx === 0) {
                    return indent + line.trim();
                }
                return line;
            }).join('\n');
        });
        
        // Insert
        const insertion = '\n' + formattedKeys.join('\n') + '\n';
        const newTranslation = i18nSection.translation.substring(0, insertionPoint) + 
                              insertion + 
                              i18nSection.translation.substring(insertionPoint);
        
        // Update
        const newSection = i18nSection.prefix + newTranslation + i18nSection.suffix;
        i18nContent = i18nContent.substring(0, i18nSection.start) + 
                     newSection + 
                     i18nContent.substring(i18nSection.end);
        
        typeMerged += missingKeys.length;
        totalMerged += missingKeys.length;
        console.log(`  ✓ ${lang}: Added ${missingKeys.length} missing keys`);
    }
    
    if (typeMerged > 0) {
        console.log(`  ✓ Total: ${typeMerged} keys merged for ${converterType}`);
    }
}

// Remove unused import if processing all
if (!targetConverter) {
    console.log('\n=== Removing unused import ===');
    const importPattern = /import\s+\{\s*additionalTranslations\s*\}\s*from\s+['"].*i18n_v2['"];\s*\n?/;
    if (importPattern.test(i18nContent)) {
        i18nContent = i18nContent.replace(importPattern, '');
        console.log('  ✓ Removed unused import');
    }
}

// Write
console.log('\n=== Writing updated file ===');
fs.writeFileSync(i18nPath, i18nContent, 'utf8');
console.log(`  ✓ File updated: ${i18nPath}`);

console.log('\n=== Migration Complete ===');
console.log(`Total keys merged: ${totalMerged}`);
console.log(`Backup saved: ${backupPath}`);

