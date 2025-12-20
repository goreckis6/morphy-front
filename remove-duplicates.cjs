const fs = require('fs');

// Read file
const content = fs.readFileSync('src/i18n.ts', 'utf8');
const lines = content.split('\n');

// Track keys and duplicate lines
const seenKeys = new Map();
const linesToRemove = new Set();

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const match = line.match(/^\s+'([^']+)':\s*'/);
  
  if (match) {
    const key = match[1];
    
    if (seenKeys.has(key)) {
      // Mark the FIRST occurrence for removal (keep the second, more detailed one)
      linesToRemove.add(seenKeys.get(key));
    } else {
      seenKeys.set(key, i);
    }
  }
}

console.log(`Found ${linesToRemove.size} duplicate keys to remove`);

// Filter out duplicate lines
const newLines = lines.filter((_, index) => !linesToRemove.has(index));

// Write back
fs.writeFileSync('src/i18n.ts', newLines.join('\n'), 'utf8');

console.log(`Done! Reduced from ${lines.length} to ${newLines.length} lines`);
