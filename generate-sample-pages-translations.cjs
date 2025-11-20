const fs = require('fs');
const path = require('path');

const samplePagesPath = path.join(__dirname, 'src/locales/samplePages.ts');
const content = fs.readFileSync(samplePagesPath, 'utf-8');

// Extract all format keys and their English translations
const enFormatsMatch = content.match(/en:\s*\{[\s\S]*?formats:\s*\{([\s\S]*?)\s*\}\s*\}/);
if (!enFormatsMatch) {
  console.error('Could not find English formats section');
  process.exit(1);
}

const enFormatsContent = enFormatsMatch[1];
const formats = [];

// Extract each format with its full structure
const formatRegex = /^\s+(['"]?)([a-z0-9_-]+)\1\s*:\s*\{([\s\S]*?)\n\s*\},?\s*$/gm;
let match;
let lastIndex = 0;

// More reliable approach: find format keys and extract their content
const lines = enFormatsContent.split('\n');
let currentFormat = null;
let currentFormatContent = [];
let braceCount = 0;
let inFormat = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Check if this is a format key line
  const formatKeyMatch = line.match(/^\s+(['"]?)([a-z0-9_-]+)\1\s*:\s*\{/);
  if (formatKeyMatch) {
    if (currentFormat) {
      formats.push({
        key: currentFormat,
        content: currentFormatContent.join('\n')
      });
    }
    currentFormat = formatKeyMatch[2];
    currentFormatContent = [line];
    braceCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    inFormat = true;
  } else if (inFormat) {
    currentFormatContent.push(line);
    braceCount += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    if (braceCount === 0 && line.trim().endsWith('},')) {
      formats.push({
        key: currentFormat,
        content: currentFormatContent.join('\n')
      });
      currentFormat = null;
      currentFormatContent = [];
      inFormat = false;
    }
  }
}

if (currentFormat) {
  formats.push({
    key: currentFormat,
    content: currentFormatContent.join('\n')
  });
}

console.log(`Found ${formats.length} formats in English`);
console.log(`\nFirst 5 format keys: ${formats.slice(0, 5).map(f => f.key).join(', ')}`);

// Now we have all formats. For Spanish, we need to translate them.
// This script just shows what needs to be done - actual translation will be done manually
// or with a translation service

