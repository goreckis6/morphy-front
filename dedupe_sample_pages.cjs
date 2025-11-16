const fs = require('fs');
const path = 'src/locales/samplePages.ts';
const lines = fs.readFileSync(path, 'utf8').split('\n');
const result = [];
const seen = {};
const langs = ['en', 'pl', 'de'];
let current = null;
let langDepth = 0;
let inFormats = false;
let formatsDepth = 0;
let skipDepth = 0;
for (const line of lines) {
  const trimmed = line.trim();
  if (skipDepth > 0) {
    skipDepth += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    if (skipDepth === 0) {
      // finished skipping duplicate block
    }
    continue;
  }
  const langMatch = trimmed.match(/^([a-z]{2}): \{$/);
  if (langMatch && langs.includes(langMatch[1])) {
    current = langMatch[1];
    console.log('Entering language ' + current);
    seen[current] = seen[current] || new Set();
    langDepth = 1;
    result.push(line);
    continue;
  }
  if (current) {
    const openCount = (line.match(/\{/g) || []).length;
    const closeCount = (line.match(/\}/g) || []).length;
    langDepth += openCount - closeCount;
    if (trimmed === '},' && langDepth === 0) {
      console.log('Leaving language ' + current);
      current = null;
      result.push(line);
      continue;
    }
    if (line.includes('formats: {')) {
      inFormats = true;
      formatsDepth = 1;
      result.push(line);
      continue;
    }
    if (inFormats) {
      formatsDepth += openCount - closeCount;
      if (formatsDepth === 0) {
        inFormats = false;
      }
      const keyMatch = line.match(/^\s{8}([^:\s]+): \{$/);
      if (keyMatch) {
        seen[current] = seen[current] || new Set();
        if (seen[current].has(keyMatch[1])) {
          console.log('Removing duplicate ' + keyMatch[1] + ' for ' + current);
          skipDepth = 1;
          continue;
        }
        seen[current].add(keyMatch[1]);
        if (current === 'pl' && (keyMatch[1] === 'ace' || keyMatch[1] === '\'3gp\'')) {
          console.log('Added ' + keyMatch[1] + ' to ' + current);
        }
      }
    }
  }
  result.push(line);
}
fs.writeFileSync(path, result.join('\n'), 'utf8');
