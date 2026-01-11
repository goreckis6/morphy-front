/*
  Mirror src/routes/converters/* under src/routes/[lang]/converters/*
  Each mirrored page re-exports default and head from the root route.
*/
const fs = require('fs');
const path = require('path');

const projectRoot = 'C:/Users/admin_test/Desktop/front/morphy-front';
const rootConverters = path.join(projectRoot, 'src/routes/converters');
const langConverters = path.join(projectRoot, 'src/routes/[lang]/converters');

function ensureDir(p) { fs.mkdirSync(p, { recursive: true }); }

function main() {
  if (!fs.existsSync(rootConverters)) {
    console.error('Missing root converters dir:', rootConverters);
    process.exit(1);
  }
  ensureDir(langConverters);

  const entries = fs.readdirSync(rootConverters, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  let count = 0;
  for (const dirent of entries) {
    const name = dirent.name; // kebab-case name
    const targetDir = path.join(langConverters, name);
    ensureDir(targetDir);
    const stub = `export { default } from '../../../converters/${name}/index';
export { head } from '../../../converters/${name}/index';
`;
    fs.writeFileSync(path.join(targetDir, 'index.tsx'), stub, 'utf8');
    count++;
  }
  console.log(`Mirrored ${count} converter routes under [lang]/converters`);
}

main();
