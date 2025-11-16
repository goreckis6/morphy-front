const fs = require('fs');
const path = 'src/locales/samplePages.ts';
const lines = fs.readFileSync(path, 'utf8').split('\n');
const result = [];
const langs = ['en', 'pl', 'de'];
const seen = Object.fromEntries(langs.map(l => [l, new Set()]));
let currentLang = null;
let langDepth = 0;
let insideFormats = false;
let formatsDepth = 0;
let skipMode = false;
let skipDepth = 0;
const keyRegex = /^\s{8}([^:\s]+): \{$/;

for (const line of lines) {
  const trimmed = line.trim();

  if (skipMode) {
    skipDepth += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
    if (skipDepth === 0) {
      skipMode = false;
    }
    continue;
  }

  const langMatch = trimmed.match(/^([a-z]{2}): \{$/);
  if (langMatch && langs.includes(langMatch[1])) {
    currentLang = langMatch[1];
    langDepth = 1;
    result.push(line);
    continue;
  }

  if (currentLang) {
    const openCount = (line.match(/\{/g) || []).length;
    const closeCount = (line.match(/\}/g) || []).length;
    langDepth += openCount - closeCount;

    if (trimmed === '},' && langDepth === 0) {
      currentLang = null;
      result.push(line);
      continue;
    }

    if (line.includes('formats: {')) {
      insideFormats = true;
      formatsDepth = 1;
      result.push(line);
      continue;
    }

    if (insideFormats) {
      formatsDepth += openCount - closeCount;
      if (formatsDepth === 0) {
        insideFormats = false;
      }
      const keyMatch = line.match(keyRegex);
      if (keyMatch) {
        const key = keyMatch[1];
        if (seen[currentLang].has(key)) {
          skipMode = true;
          skipDepth = 1; // account for the opening brace on this line
          continue;
        }
        seen[currentLang].add(key);
      }
    }
  }

  result.push(line);
}

fs.writeFileSync(path, result.join('\n'), 'utf8');
