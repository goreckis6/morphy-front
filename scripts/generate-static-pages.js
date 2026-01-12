import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read the main index.html
const distPath = path.join(__dirname, '../dist');
const indexHtml = fs.readFileSync(path.join(distPath, 'index.html'), 'utf-8');

// Read sitemap to get all URLs
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf-8');

// Extract URLs
const urlMatches = sitemap.match(/<loc>(.*?)<\/loc>/g);
const urls = [...new Set(urlMatches.map(match => {
  const url = match.replace(/<\/?loc>/g, '');
  return url.replace('https://formipeek.com', '');
}))];

console.log(`Generating static HTML for ${urls.length} URLs...`);

let count = 0;
urls.forEach(url => {
  if (url === '' || url === '/') return; // Skip homepage
  
  const dir = path.join(distPath, url);
  
  // Create directory
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  // Copy index.html to each directory
  fs.writeFileSync(path.join(dir, 'index.html'), indexHtml);
  count++;
});

console.log(`✓ Generated ${count} static HTML files`);
console.log(`Note: Meta tags will be dynamically updated by React Helmet on page load`);
