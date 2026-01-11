import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { JSDOM } from 'jsdom';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read sitemap to get all URLs
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf-8');

// Extract all unique URLs from sitemap
const urlMatches = sitemap.match(/<loc>(.*?)<\/loc>/g);
const urls = [...new Set(urlMatches.map(match => {
  const url = match.replace(/<\/?loc>/g, '');
  return url.replace('https://formipeek.com', '');
}))];

console.log(`Found ${urls.length} URLs to prerender`);

// This is a placeholder - actual prerendering will be done during build
// We'll use a simpler approach with react-snap
console.log('URLs extracted successfully');
console.log('Sample URLs:', urls.slice(0, 5));
