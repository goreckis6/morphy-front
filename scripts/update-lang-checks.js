const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..', 'src');

const targetExtensions = new Set(['.tsx', '.ts']);

const getLanguageImport = "import { getLanguageFromUrl } from '../../i18n';";
const getLanguageImportFromPages = "import { getLanguageFromUrl } from '../i18n';";

function ensureImport(content, filePath) {
  const dirName = path.dirname(filePath);
  if (dirName.includes(path.sep + 'pages')) {
    if (!content.includes(getLanguageImportFromPages)) {
      return content.replace(
        /import\s+{[^}]*useTranslation[^}]*}\s+from\s+'react-i18next';/,
        match => `${match}\n${getLanguageImportFromPages}`
      );
    }
  } else {
    if (!content.includes(getLanguageImport)) {
      return content.replace(
        /import\s+{[^}]*useTranslation[^}]*}\s+from\s+'react-i18next';/,
        match => `${match}\n${getLanguageImport}`
      );
    }
  }
  return content;
}

function updateUseEffect(content) {
  return content.replace(
    /useEffect\(\s*\(\)\s*=>\s*{\s*const\s+path\s*=\s*window\.location\.pathname;([\s\S]*?)},\s*\[\s*i18n\s*\]\s*\);/g,
    `useEffect(() => {\n    const langFromUrl = getLanguageFromUrl();\n    if (i18n.language !== langFromUrl) {\n      // eslint-disable-next-line react-hooks/exhaustive-deps\n      i18n.changeLanguage(langFromUrl);\n    }\n    // eslint-disable-next-line react-hooks/exhaustive-deps\n  }, []);`
  );
}

function patchFile(filePath) {
  const ext = path.extname(filePath);
  if (!targetExtensions.has(ext)) return;

  const raw = fs.readFileSync(filePath, 'utf8');
  if (!/window\.location\.pathname/.test(raw)) return;

  let updated = raw;
  updated = updated.replace(
    /if\s*\(\s*path\.startsWith\('\/pl\/'\)\s*\)/g,
    `if (path === '/pl' || path.startsWith('/pl/'))`
  );
  updated = updated.replace(
    /if\s*\(\s*path\.startsWith\('\/de\/'\)\s*\)/g,
    `if (path === '/de' || path.startsWith('/de/'))`
  );
  updated = updated.replace(
    /const\s+path\s*=\s*window\.location\.pathname;\s*if\s*\(\s*path\s*===\s*'\/pl'\s*\|\|\s*path\.startsWith\('\/pl\/'\)\s*\)\s*i18n\.changeLanguage\('pl'\);\s*else\s+if\s*\(\s*path\s*===\s*'\/de'\s*\|\|\s*path\.startsWith\('\/de\/'\)\s*\)\s*i18n\.changeLanguage\('de'\);\s*else\s*i18n\.changeLanguage\('en'\);/g,
    `const langFromUrl = getLanguageFromUrl();\n    if (i18n.language !== langFromUrl) {\n      // eslint-disable-next-line react-hooks/exhaustive-deps\n      i18n.changeLanguage(langFromUrl);\n    }\n    // eslint-disable-next-line react-hooks/exhaustive-deps`
  );
  updated = ensureImport(updated, filePath);
  updated = updateUseEffect(updated);

  if (updated !== raw) {
    fs.writeFileSync(filePath, updated);
    console.log('Updated', filePath);
  }
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else {
      patchFile(fullPath);
    }
  }
}

walk(rootDir);

