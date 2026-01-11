/*
  Generate converter routes from backup ConversionPages
*/
const fs = require('fs');
const path = require('path');

const backupDir = 'C:/Users/admin_test/Desktop/morphy_copy/src/components/ConversionPages';
const outRoot = 'C:/Users/admin_test/Desktop/front/morphy-front/src/routes/converters';

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function parseFormatsFromFilename(fileName) {
  // Normalize tail: strip Converter/Conventer + .tsx
  const base = fileName.replace(/(?:Conver(?:ter)|Conventer)\.tsx$/,'');
  // Match: CSVToDOCX, HEICtoEPS, etc. (case-insensitive on 'to')
  const m = base.match(/^([A-Za-z0-9]+)(?:to|To)([A-Za-z0-9]+)$/);
  if (!m) return null;
  return { input: m[1].toUpperCase(), output: m[2].toUpperCase() };
}

function buildContent(input, output) {
  const inputLower = input.toLowerCase();
  const outputLower = output.toLowerCase();
  return `import { component$, $ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { BaseConverter } from '../../../components/BaseConverter.qwik';

export default component$(() => {
  const handleConvert = $(async (file: File): Promise<Blob> => {
    const formData = new FormData();
    formData.append('file', file);

    const apiUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';
    const response = await fetch(apiUrl + '/api/convert/${inputLower}/${outputLower}', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      let message = 'Conversion failed';
      try { const err = await response.json(); message = err.detail || message; } catch {}
      throw new Error(message);
    }

    return await response.blob();
  });

  return (
    <BaseConverter
      title="${input} to ${output} Converter"
      description="Convert your ${input} files to ${output} format quickly and securely. 100% free, no registration required."
      inputFormat="${input}"
      outputFormat="${output}"
      inputExtensions={['.${inputLower}']}
      outputExtensions={['.${outputLower}']}
      onConvert={handleConvert}
      features={[
        'Fast ${input} to ${output} conversion',
        'No file size limits',
        'Secure - files deleted after conversion',
        'Works in your browser',
        'No software installation needed',
        'Batch conversion support',
      ]}
      useCases={[
        'Convert ${input} documents to ${output}',
        'Prepare files for sharing',
        'Archive documents in ${output} format',
        'Batch process multiple files',
      ]}
    />
  );
});

export const head: DocumentHead = {
  title: '${input} to ${output} Converter - Free Online Tool | FormiPeek',
  meta: [
    { name: 'description', content: 'Convert ${input} to ${output} online for free. Fast, secure, and easy ${input} to ${output} conversion tool. No registration required.' },
    { property: 'og:title', content: '${input} to ${output} Converter - FormiPeek' },
    { property: 'og:description', content: 'Free online ${input} to ${output} converter. Fast, secure, and easy to use.' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: '${input} to ${output} Converter - FormiPeek' },
    { name: 'twitter:description', content: 'Convert ${input} to ${output} online for free.' },
  ],
};
`;}

function main() {
  if (!fs.existsSync(backupDir)) {
    console.error('Backup dir not found:', backupDir);
    process.exit(1);
  }
  ensureDir(outRoot);
  const files = fs.readdirSync(backupDir).filter(f => f.endsWith('.tsx') && f !== 'BaseConverter.tsx');
  let count = 0;
  for (const file of files) {
    const formats = parseFormatsFromFilename(file);
    if (!formats) {
      console.log('Skipping unrecognized file:', file);
      continue;
    }
    const kebab = `${formats.input.toLowerCase()}-to-${formats.output.toLowerCase()}`;
    const dir = path.join(outRoot, kebab);
    ensureDir(dir);
    const content = buildContent(formats.input, formats.output);
    fs.writeFileSync(path.join(dir, 'index.tsx'), content, 'utf8');
    console.log('✓ Generated', kebab);
    count++;
  }
  console.log(`Done. Generated ${count} routes into ${outRoot}`);
}

main();
