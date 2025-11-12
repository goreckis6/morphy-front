const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..', 'src');

const relativePathToHook = (filePath) => {
  const depth = filePath
    .replace(projectRoot, '')
    .split(path.sep)
    .filter(Boolean).length - 1;

  const prefix = '../'.repeat(Math.max(depth, 0));
  return `${prefix}hooks/usePathLanguageSync`;
};

const updateFile = (filePath) => {
  const originalContent = fs.readFileSync(filePath, 'utf8');
  let content = originalContent;

  if (!content.includes('useTranslation') || !content.includes('window.location.pathname')) {
    return false;
  }

  const localeEffectRegex = /useEffect\(\s*\(\)\s*=>\s*{\s*const path = window\.location\.pathname;[\s\S]*?}\s*,\s*\[\s*i18n\s*\]\s*\);\s*/m;
  if (!localeEffectRegex.test(content)) {
    return false;
  }

  const importPath = relativePathToHook(filePath).replace(/\\/g, '/');

  if (!content.includes('usePathLanguageSync')) {
    const importRegex = /import\s+{[^}]*useTranslation[^}]*}\s+from\s+'react-i18next';/;
    content = content.replace(
      importRegex,
      (match) => `${match}\nimport { usePathLanguageSync } from '${importPath}';`
    );
  }

  content = content.replace(localeEffectRegex, '  usePathLanguageSync(i18n);\n');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${filePath}`);
    return true;
  }

  return false;
};

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      updateFile(fullPath);
    }
  }
};

walk(projectRoot);

