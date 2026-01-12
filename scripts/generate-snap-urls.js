import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read sitemap
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf-8');

// Extract all unique URLs
const urlMatches = sitemap.match(/<loc>(.*?)<\/loc>/g);
const urls = [...new Set(urlMatches.map(match => {
  const url = match.replace(/<\/?loc>/g, '');
  return url.replace('https://formipeek.com', '');
}))];

// Update package.json with all URLs
const packageJsonPath = path.join(__dirname, '../package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

packageJson.reactSnap = {
  ...packageJson.reactSnap,
  include: urls
};

fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
console.log(`✓ Updated package.json with ${urls.length} URLs for prerendering`);
