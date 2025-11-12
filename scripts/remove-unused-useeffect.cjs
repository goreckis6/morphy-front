const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..', 'src');

const reactImportRegex = /import React,\s*{([^}]*)}\s*from\s+['"]react['"];?/g;

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.tsx')) {
      const originalContent = fs.readFileSync(fullPath, 'utf8');
      let content = originalContent;

      if (content.includes('useEffect(')) {
        continue;
      }

      let hasChanges = false;

      content = content.replace(reactImportRegex, (match, hooks) => {
        const names = hooks
          .split(',')
          .map((token) => token.trim())
          .filter(Boolean);

        if (!names.includes('useEffect')) {
          return match;
        }

        const filtered = names.filter((name) => name !== 'useEffect');
        hasChanges = true;

        if (filtered.length === 0) {
          return `import React from 'react';`;
        }

        return `import React, { ${filtered.join(', ')} } from 'react';`;
      });

      if (hasChanges) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Removed unused useEffect import in ${fullPath}`);
      }
    }
  }
};

walk(projectRoot);

