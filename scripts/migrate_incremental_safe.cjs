// Safe incremental migration - one converter type at a time
// Processes converter types and merges missing translations safely

const fs = require('fs');
const path = require('path');

const i18nPath = path.join(__dirname, '../src/i18n.ts');
const i18nV2Path = path.join(__dirname, '../src/i18n_v2.ts');

// Get converter type from command line or process all
const targetConverter = process.argv[2] || null;

console.log('=== Safe Incremental i18n Migration ===');
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
console.log('Reading files...');
let i18nContent = fs.readFileSync(i18nPath, 'utf8');
const i18nV2Content = fs.readFileSync(i18nV2Path, 'utf8');

// Languages to migrate
const languages = ['id', 'sv', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh'];

// Find all converter types in i18n_v2.ts
function findConverterTypes(content) {
    const converterTypes = new Set();
    const pattern = /\/\/\s+([A-Z\s]+)\s+to\s+([A-Z\s]+)\s*$/gm;
    let match;
    
    // Also find by key pattern
    const keyPattern = /'([a-z_]+_to_[a-z_]+)\.title':/g;
    while ((match = keyPattern.exec(content)) !== null) {
        converterTypes.add(match[1]);
    }
    
    return Array.from(converterTypes).sort();
}

// Find language section boundaries
function findLanguageSection(content, lang) {
    const pattern = new RegExp(`(\\s+${lang}\\s*:\\s*\\{[^}]*translation\\s*:\\s*\\{)`, 's');
    const match = content.match(pattern);
    
    if (!match) return null;
    
    const startPos = match.index;
    const prefix = match[1];
    let pos = startPos + prefix.length;
    let braceCount = 1;
    
    // Find matching closing braces
    while (pos < content.length && braceCount > 0) {
        const char = content[pos];
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
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

// Extract all keys for a converter type (handles nested objects properly)
function extractConverterKeys(translationBlock, converterType) {
    const keys = [];
    const lines = translationBlock.split('\n');
    let i = 0;
    
    while (i < lines.length) {
        const line = lines[i];
        const trimmed = line.trim();
        
        // Skip comments and empty lines
        if (!trimmed || trimmed.startsWith('//')) {
            i++;
            continue;
        }
        
        // Check if this line starts a key for our converter type
        if (trimmed.startsWith(`'${converterType}.`) || trimmed.match(new RegExp(`'${converterType.replace(/_/g, '_')}\\.`))) {
            // Collect this key and its complete value
            let keyBlock = [line];
            let braceCount = 0;
            let inString = false;
            let stringChar = null;
            let escaped = false;
            
            // Count braces in the line
            for (let j = 0; j < line.length; j++) {
                const char = line[j];
                if (escaped) {
                    escaped = false;
                    continue;
                }
                if (char === '\\') {
                    escaped = true;
                    continue;
                }
                if ((char === '"' || char === "'") && !escaped) {
                    if (!inString) {
                        inString = true;
                        stringChar = char;
                    } else if (char === stringChar) {
                        inString = false;
                        stringChar = null;
                    }
                }
                if (!inString) {
                    if (char === '{') braceCount++;
                    if (char === '}') braceCount--;
                }
            }
            
            i++;
            
            // If we have unmatched braces, continue collecting lines
            while (braceCount > 0 && i < lines.length) {
                const nextLine = lines[i];
                keyBlock.push(nextLine);
                
                // Count braces in this line
                for (let j = 0; j < nextLine.length; j++) {
                    const char = nextLine[j];
                    if (escaped) {
                        escaped = false;
                        continue;
                    }
                    if (char === '\\') {
                        escaped = true;
                        continue;
                    }
                    if ((char === '"' || char === "'") && !escaped) {
                        if (!inString) {
                            inString = true;
                            stringChar = char;
                        } else if (char === stringChar) {
                            inString = false;
                            stringChar = null;
                        }
                    }
                    if (!inString) {
                        if (char === '{') braceCount++;
                        if (char === '}') braceCount--;
                    }
                }
                i++;
            }
            
            keys.push(keyBlock.join('\n'));
        } else {
            i++;
        }
    }
    
    return keys;
}

// Check if converter type exists in translation block
function hasConverterType(translationBlock, converterType) {
    return translationBlock.includes(`'${converterType}.`);
}

// Find insertion point (before the last closing brace, after last key)
function findInsertionPoint(translationBlock) {
    const lines = translationBlock.split('\n');
    let lastContentLine = -1;
    
    // Find the last non-empty, non-comment line before closing brace
    for (let i = lines.length - 1; i >= 0; i--) {
        const trimmed = lines[i].trim();
        if (trimmed && !trimmed.startsWith('//') && trimmed !== '}') {
            lastContentLine = i;
            break;
        }
    }
    
    if (lastContentLine === -1) {
        const lastBraceIndex = translationBlock.lastIndexOf('}');
        return lastBraceIndex > 0 ? lastBraceIndex : translationBlock.length;
    }
    
    // Calculate position after last content line
    let pos = 0;
    for (let i = 0; i <= lastContentLine; i++) {
        pos += lines[i].length + 1; // +1 for newline
    }
    
    return pos;
}

// Process converter types
let totalMerged = 0;
const processedTypes = [];

// Get converter types to process
let converterTypes = [];
if (targetConverter) {
    converterTypes = [targetConverter];
} else {
    converterTypes = findConverterTypes(i18nV2Content);
    console.log(`Found ${converterTypes.length} converter types to process\n`);
}

for (const converterType of converterTypes) {
    console.log(`\n=== Processing ${converterType} ===`);
    
    let typeMerged = 0;
    let allLanguagesComplete = true;
    
    for (const lang of languages) {
        // Get language section from i18n_v2.ts
        const v2Section = findLanguageSection(i18nV2Content, lang);
        if (!v2Section) continue;
        
        // Check if converter type exists in v2
        if (!hasConverterType(v2Section.translation, converterType)) {
            continue;
        }
        
        // Extract keys from v2
        const v2Keys = extractConverterKeys(v2Section.translation, converterType);
        if (v2Keys.length === 0) continue;
        
        // Get language section from i18n.ts
        const i18nSection = findLanguageSection(i18nContent, lang);
        if (!i18nSection) {
            console.log(`  ⚠️  ${lang}: Language section not found in i18n.ts`);
            continue;
        }
        
        // Check if already exists
        if (hasConverterType(i18nSection.translation, converterType)) {
            console.log(`  ✓ ${lang}: ${converterType} already exists`);
            continue;
        }
        
        // Find insertion point
        const insertionPoint = findInsertionPoint(i18nSection.translation);
        
        // Determine indentation
        const indentMatch = i18nSection.translation.match(/\n(\s+)'[^']+':/);
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
        const newTranslation = i18nSection.translation.substring(0, insertionPoint) + 
                              insertion + 
                              i18nSection.translation.substring(insertionPoint);
        
        // Update content
        const newSection = i18nSection.prefix + newTranslation + i18nSection.suffix;
        i18nContent = i18nContent.substring(0, i18nSection.start) + 
                     newSection + 
                     i18nContent.substring(i18nSection.end);
        
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

// Remove unused import (only if processing all)
if (!targetConverter) {
    console.log('\n=== Removing unused import ===');
    const importPattern = /import\s+\{\s*additionalTranslations\s*\}\s*from\s+['"].*i18n_v2['"];\s*\n?/;
    if (importPattern.test(i18nContent)) {
        i18nContent = i18nContent.replace(importPattern, '');
        console.log('  ✓ Removed unused import');
    }
}

// Write updated file
console.log('\n=== Writing updated file ===');
fs.writeFileSync(i18nPath, i18nContent, 'utf8');
console.log(`  ✓ File updated: ${i18nPath}`);

console.log('\n=== Migration Complete ===');
console.log(`Total keys merged: ${totalMerged}`);
if (processedTypes.length > 0) {
    console.log(`Converter types processed: ${processedTypes.length}`);
    console.log(`Types: ${processedTypes.slice(0, 10).join(', ')}${processedTypes.length > 10 ? '...' : ''}`);
}
console.log(`Backup saved: ${backupPath}`);
console.log('\n⚠️  Please review the changes and test the build!');

