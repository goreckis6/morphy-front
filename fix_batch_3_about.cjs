const fs = require('fs');
const path = require('path');

const components = [
  'SampleKey.tsx',
  'SampleCrx.tsx',
  'SampleHpp.tsx',
  'SampleHex.tsx',
  'SampleHdr.tsx',
  'SampleH.tsx',
  'SampleGz.tsx',
  'SampleAce.tsx',
  'Sample7z.tsx',
  'Sample3mf.tsx'
];

const samplesDir = path.join(__dirname, 'src', 'components', 'Samples');

components.forEach((file) => {
  const filePath = path.join(samplesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Fix the about section - remove all hardcoded items after the aboutItems mapping
  // Pattern: Find the closing of aboutItems map, then remove everything until </ul> except what should be there
  content = content.replace(
    /\{aboutItems && aboutItems\.length > 0 && aboutItems\.slice\(1\)\.map\(\(item, idx\) => \(\s*<li key=\{idx\}>• \{item\}<\/li>\s*\)\)\}[\s\S]*?(?=<\/ul>)/g,
    `{aboutItems && aboutItems.length > 0 && aboutItems.slice(1).map((item, idx) => (\n                <li key={idx}>• {item}</li>\n              ))}`
  );

  // Also fix "About These Sample Files" if it's still hardcoded
  content = content.replace(
    /About These Sample Files/g,
    `{t('sample_page.common.about_title')}`
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Fixed ${file}`);
});

console.log('\n✅ All batch 3 components fixed!');

