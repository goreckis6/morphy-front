const fs = require('fs');

const lines = fs.readFileSync('src/i18n.ts', 'utf8').split('\n');
const matches = [];

lines.forEach((line, idx) => {
  if (line.includes("'epub_to_pptx.title':")) {
    matches.push({
      line: idx + 1,
      text: line.trim().substring(0, 80)
    });
  }
});

console.log('All EPUB to PPTX title occurrences:');
matches.forEach(m => console.log(`Line ${m.line}: ${m.text}`));
console.log(`\nTotal: ${matches.length} occurrences`);
console.log(`Expected: 17 languages`);
console.log(`Duplicates to remove: ${matches.length - 17}`);
