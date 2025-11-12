const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..', 'src');

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      const originalContent = fs.readFileSync(fullPath, 'utf8');
      let content = originalContent;

      if (content.includes('usePathLanguageSync(i18n);')) {
        content = content.replace(
          /const\s+{\s*t,\s*i18n\s*}\s*=\s*useTranslation\(\);\s*(?:\/\/[^\n]*\n)?\s*usePathLanguageSync\(i18n\);\s*/g,
          () => '  const { t, i18n } = useTranslation();\n  usePathLanguageSync(i18n);\n'
        );

        content = content.replace(/\n\s*const { t, i18n } = useTranslation\(\);/g, '\n  const { t, i18n } = useTranslation();');

        content = content.replace(/useTranslation\(\);\s*usePathLanguageSync\(i18n\);/g, () => 'useTranslation();\n  usePathLanguageSync(i18n);');

        content = content.replace(/usePathLanguageSync\(i18n\);\s*(?!\n)/g, 'usePathLanguageSync(i18n);\n');
        content = content.replace(/(\s*)usePathLanguageSync\(i18n\);\s*\n(\s*)(?=\w)/g, (match, currentIndent) => `${currentIndent}usePathLanguageSync(i18n);\n\n${currentIndent}`);
        content = content.replace(/\n{3,}/g, '\n\n');
      }

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Formatted ${fullPath}`);
      }
    }
  }
};

walk(projectRoot);

