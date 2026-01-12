/**
 * Script to verify that prerendered pages have proper SEO meta tags
 * 
 * Usage:
 *   node scripts/verify-prerender-seo.js                    # Check all pages
 *   node scripts/verify-prerender-seo.js --summary          # Summary only
 *   node scripts/verify-prerender-seo.js --missing-only     # Show only missing
 *   node scripts/verify-prerender-seo.js /convert/csv-to-json  # Check specific URL
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '../dist');
const args = process.argv.slice(2);

const summaryOnly = args.includes('--summary');
const missingOnly = args.includes('--missing-only');
const specificUrl = args.find(arg => !arg.startsWith('--'));

// Read sitemap to get all URLs
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf-8');

// Extract URLs
const allUrls = [...new Set(
  [...sitemap.matchAll(/<loc>\s*(.*?)\s*<\/loc>/gs)]
    .map(m => m[1].replace('https://formipeek.com', ''))
    .filter(u => u && u.startsWith('/'))
)];

// Filter to specific URL if provided
const urlsToCheck = specificUrl ? [specificUrl] : allUrls;

console.log(`Checking ${urlsToCheck.length} prerendered pages for SEO meta tags...\n`);

const results = {
  total: urlsToCheck.length,
  hasTitle: 0,
  hasDescription: 0,
  hasUniqueTitle: 0,
  hasUniqueDescription: 0,
  missing: [],
  duplicateTitles: {},
  duplicateDescriptions: {}
};

// Check each URL
urlsToCheck.forEach(url => {
  const filePath = url === '/' 
    ? path.join(distPath, 'index.html')
    : path.join(distPath, url, 'index.html');
  
  if (!fs.existsSync(filePath)) {
    results.missing.push({ url, reason: 'File not found' });
    return;
  }
  
  const html = fs.readFileSync(filePath, 'utf-8');
  
  // Simple regex-based extraction (no need for full DOM parser)
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/is);
  const title = titleMatch ? titleMatch[1].trim() : null;
  
  const descMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  const description = descMatch ? descMatch[1].trim() : null;
  
  // Check title
  if (title) {
    results.hasTitle++;
    
    // Track duplicates
    if (!results.duplicateTitles[title]) {
      results.duplicateTitles[title] = [];
    }
    results.duplicateTitles[title].push(url);
    
    // Check if unique (not default)
    if (title !== 'FormiPeek - Free Online File Converter | Convert 300+ Formats Instantly') {
      results.hasUniqueTitle++;
    }
  } else {
    results.missing.push({ url, reason: 'Missing title' });
  }
  
  // Check description
  if (description) {
    results.hasDescription++;
    
    // Track duplicates
    if (!results.duplicateDescriptions[description]) {
      results.duplicateDescriptions[description] = [];
    }
    results.duplicateDescriptions[description].push(url);
    
    // Check if unique (not default)
    const defaultDesc = 'Convert files between 300+ formats instantly with FormiPeek...';
    if (!description.startsWith(defaultDesc)) {
      results.hasUniqueDescription++;
    }
  } else {
    if (!results.missing.find(m => m.url === url)) {
      results.missing.push({ url, reason: 'Missing description' });
    } else {
      results.missing.find(m => m.url === url).reason += ', missing description';
    }
  }
});

// Filter duplicates (only show titles/descriptions used by multiple pages)
const duplicateTitles = Object.entries(results.duplicateTitles)
  .filter(([title, urls]) => urls.length > 1 && title !== 'FormiPeek - Free Online File Converter | Convert 300+ Formats Instantly')
  .sort((a, b) => b[1].length - a[1].length);

const duplicateDescriptions = Object.entries(results.duplicateDescriptions)
  .filter(([desc, urls]) => urls.length > 1)
  .sort((a, b) => b[1].length - a[1].length);

// Print results
if (!summaryOnly && !missingOnly) {
  console.log('=== SEO Verification Results ===\n');
}

if (!missingOnly) {
  console.log('Summary:');
  console.log(`  Total pages checked: ${results.total}`);
  console.log(`  Pages with title: ${results.hasTitle} (${(results.hasTitle/results.total*100).toFixed(1)}%)`);
  console.log(`  Pages with unique title: ${results.hasUniqueTitle} (${(results.hasUniqueTitle/results.total*100).toFixed(1)}%)`);
  console.log(`  Pages with description: ${results.hasDescription} (${(results.hasDescription/results.total*100).toFixed(1)}%)`);
  console.log(`  Pages with unique description: ${results.hasUniqueDescription} (${(results.hasUniqueDescription/results.total*100).toFixed(1)}%)`);
  console.log(`  Missing meta tags: ${results.missing.length}`);
  
  if (duplicateTitles.length > 0) {
    console.log(`\n  Duplicate titles found: ${duplicateTitles.length}`);
  }
  if (duplicateDescriptions.length > 0) {
    console.log(`  Duplicate descriptions found: ${duplicateDescriptions.length}`);
  }
}

if (results.missing.length > 0) {
  console.log(`\n❌ Pages with missing meta tags (${results.missing.length}):`);
  if (!summaryOnly) {
    results.missing.slice(0, 20).forEach(({ url, reason }) => {
      console.log(`  - ${url}: ${reason}`);
    });
    if (results.missing.length > 20) {
      console.log(`  ... and ${results.missing.length - 20} more`);
    }
  }
}

if (duplicateTitles.length > 0 && !summaryOnly && !missingOnly) {
  console.log(`\n⚠️  Duplicate titles (showing top 10):`);
  duplicateTitles.slice(0, 10).forEach(([title, urls]) => {
    console.log(`  "${title.substring(0, 60)}..." used by ${urls.length} pages:`);
    urls.slice(0, 3).forEach(url => console.log(`    - ${url}`));
    if (urls.length > 3) console.log(`    ... and ${urls.length - 3} more`);
  });
}

if (duplicateDescriptions.length > 0 && !summaryOnly && !missingOnly) {
  console.log(`\n⚠️  Duplicate descriptions (showing top 5):`);
  duplicateDescriptions.slice(0, 5).forEach(([desc, urls]) => {
    console.log(`  "${desc.substring(0, 60)}..." used by ${urls.length} pages`);
  });
}

if (results.missing.length === 0 && duplicateTitles.length === 0 && duplicateDescriptions.length === 0) {
  console.log('\n✅ All pages have proper SEO meta tags!');
  process.exit(0);
} else {
  console.log('\n⚠️  Some issues found. Review the output above.');
  process.exit(1);
}
