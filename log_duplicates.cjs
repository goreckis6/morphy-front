const fs = require('fs');
const path = 'src/locales/samplePages.ts';
const lines = fs.readFileSync(path, 'utf8').split('\n');
const seen = {};
const langs = ['en', 'pl', 'de'];
let current = null;
let langDepth = 0;
let inFormats = false;
let formatsDepth = 0;
for (const line of lines) {
  const trimmed = line.trim();
  const langMatch = trimmed.match(/^([a-z]{2}): \{$/);
  if (langMatch && langs.includes(langMatch[1])) {
    current = langMatch[1];
    seen[current] = seen[current] || new Set();
    langDepth = 1;
    continue;
  }
  if (current) {
    const openCount = (line.match(/\{/g) || []).length;
    const closeCount = (line.match(/\}/g) || []).length;
    langDepth += openCount - closeCount;
    if (trimmed === '},' && langDepth === 0) {
      current = null;
      continue;
    }
    if (line.includes('formats: {')) {
      inFormats = true;
      formatsDepth = 1;
      continue;
    }
    if (inFormats) {
      formatsDepth += openCount - closeCount;
      if (formatsDepth === 0) {
        inFormats = false;
        continue;
      }
      const keyMatch = line.match(/^\s{8}([^:\s]+): \{$/);
      if (keyMatch) {
        if (seen[current].has(keyMatch[1])) {
          console.log(current + ' duplicate: ' + keyMatch[1]);
        } else {
          seen[current].add(keyMatch[1]);
        }
      }
    }
  }
}
