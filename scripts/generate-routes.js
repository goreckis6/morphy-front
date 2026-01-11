// Generate all routes for prerendering
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const languages = ['en', 'pl', 'de', 'id', 'sv', 'es', 'fr', 'it', 'nl', 'pt', 'vi', 'tr', 'ru', 'ar', 'th', 'ja', 'zh'];

const routes = [];

// Home pages
routes.push('/');
languages.slice(1).forEach(lang => routes.push(`/${lang}`));

// Converters pages
routes.push('/converters');
languages.slice(1).forEach(lang => routes.push(`/${lang}/converters`));

// Viewers pages
routes.push('/viewers');
languages.slice(1).forEach(lang => routes.push(`/${lang}/viewers`));

// Compress pages
routes.push('/compress');
languages.slice(1).forEach(lang => routes.push(`/${lang}/compress`));

// Samples pages
routes.push('/samples');
languages.slice(1).forEach(lang => routes.push(`/${lang}/samples`));

// Converter routes - extract from App.tsx
const appFile = fs.readFileSync(path.join(__dirname, '../src/App.tsx'), 'utf-8');
const converterMatches = appFile.matchAll(/path="\/convert\/([^"]+)"/g);
const converterPaths = new Set();

for (const match of converterMatches) {
  converterPaths.add(`/convert/${match[1]}`);
}

// Add converter routes for all languages
converterPaths.forEach(converterPath => {
  routes.push(converterPath);
  languages.slice(1).forEach(lang => {
    routes.push(`/${lang}${converterPath}`);
  });
});

console.log(`Generated ${routes.length} routes for prerendering`);

export default routes;
