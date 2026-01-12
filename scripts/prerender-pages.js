/**
 * Prerendering script for SPA
 * 
 * Configuration via environment variables:
 * - PRERENDER_CONCURRENT: Number of pages to prerender in parallel (default: 5)
 *   Example: PRERENDER_CONCURRENT=10 npm run build
 * 
 * - PRERENDER_MAX_PAGES: Limit total pages to prerender (default: 0 = all)
 *   Set to lower number for faster builds in CI/CD
 *   Example: PRERENDER_MAX_PAGES=50 npm run build  (only prerenders 50 most important pages)
 * 
 * - PRERENDER_INCREMENTAL: Enable incremental prerendering (default: true)
 *   Only prerenders new/changed pages, skips existing ones
 *   Set to 'false' to always prerender all pages
 *   Example: PRERENDER_INCREMENTAL=false npm run build
 * 
 * - PRERENDER_FORCE: Force full prerender, ignore cache (default: false)
 *   Example: PRERENDER_FORCE=true npm run build
 * 
 * Performance tips:
 * - For fast builds: PRERENDER_MAX_PAGES=50 (only priority pages)
 * - For full prerendering: PRERENDER_CONCURRENT=10 (faster, but uses more memory)
 * - Incremental mode (default): Only prerenders new/changed pages - much faster on subsequent builds!
 * - Default: 5 concurrent, incremental mode enabled (balanced)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '../dist');
const port = 4173;

// Configuration: how many pages to prerender in parallel
const CONCURRENT_PAGES = parseInt(process.env.PRERENDER_CONCURRENT || '5');
// Configuration: limit total pages to prerender (0 = all, set to lower number for faster builds)
const MAX_PAGES = parseInt(process.env.PRERENDER_MAX_PAGES || '0');
// Configuration: force full prerender (ignore cache)
const FORCE_PRERENDER = process.env.PRERENDER_FORCE === 'true';
// Configuration: enable incremental prerendering (only new/changed pages)
const INCREMENTAL = process.env.PRERENDER_INCREMENTAL !== 'false'; // default: true

// Priority URLs that should always be prerendered (homepage, hubs, popular converters)
const PRIORITY_URLS = [
  '/',
  '/converters',
  '/viewers',
  '/compress',
  '/samples',
  '/convert/csv-to-json',
  '/convert/pdf-to-jpg',
  '/convert/jpg-to-pdf',
  '/convert/docx-to-pdf',
  '/convert/pdf-to-docx',
];

// Read sitemap to get all URLs
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf-8');

// Extract URLs - improved parser with whitespace handling
const urls = [...new Set(
  [...sitemap.matchAll(/<loc>\s*(.*?)\s*<\/loc>/gs)]
    .map(m => m[1].replace('https://formipeek.com', ''))
    .filter(u => u && u.startsWith('/'))
)];

// Separate priority URLs from the rest
const priorityUrls = urls.filter(url => PRIORITY_URLS.includes(url));
const otherUrls = urls.filter(url => !PRIORITY_URLS.includes(url));

// Save original index.html before prerendering to avoid race condition
// This must be done early so we can compare timestamps
const originalIndexPath = path.join(distPath, 'index.original.html');
if (fs.existsSync(path.join(distPath, 'index.html'))) {
  fs.copyFileSync(
    path.join(distPath, 'index.html'),
    originalIndexPath
  );
} else {
  // If index.html doesn't exist yet, create a dummy file for comparison
  fs.writeFileSync(originalIndexPath, '<html></html>');
}

// Function to check if a page needs prerendering
const needsPrerendering = (url) => {
  if (FORCE_PRERENDER) return true;
  if (!INCREMENTAL) return true;
  
  const filePath = url === '/' 
    ? path.join(distPath, 'index.html')
    : path.join(distPath, url, 'index.html');
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return true; // File doesn't exist, needs prerendering
  }
  
  // Check if file is older than the build (index.original.html)
  // If build is newer, we should rerender
  try {
    if (!fs.existsSync(originalIndexPath)) {
      return true; // Can't compare, better prerender
    }
    
    const fileStat = fs.statSync(filePath);
    const buildStat = fs.statSync(originalIndexPath);
    
    // If prerendered file is older than build, needs rerendering
    if (fileStat.mtime < buildStat.mtime) {
      return true;
    }
    
    // Check if file is valid (has content, not just a copy of base HTML)
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const baseContent = fs.readFileSync(originalIndexPath, 'utf-8');
    
    // If prerendered file is identical to base HTML, it's probably a fallback
    // Priority URLs should always be checked more carefully
    if (PRIORITY_URLS.includes(url) && fileContent === baseContent) {
      return true;
    }
    
    return false; // File exists and is up to date
  } catch (e) {
    // If we can't check, better safe than sorry - prerender it
    return true;
  }
};

// Limit total URLs if MAX_PAGES is set
let urlsToRender = [...priorityUrls];
if (MAX_PAGES > 0) {
  const remaining = MAX_PAGES - priorityUrls.length;
  if (remaining > 0) {
    urlsToRender = [...priorityUrls, ...otherUrls.slice(0, remaining)];
  }
} else {
  urlsToRender = urls;
}

// Filter to only pages that need prerendering
if (INCREMENTAL && !FORCE_PRERENDER) {
  const beforeCount = urlsToRender.length;
  urlsToRender = urlsToRender.filter(needsPrerendering);
  const skipped = beforeCount - urlsToRender.length;
  
  if (skipped > 0) {
    console.log(`Found ${urls.length} total URLs in sitemap`);
    console.log(`  Priority URLs: ${priorityUrls.length}`);
    console.log(`  Pages needing prerendering: ${urlsToRender.length} (${skipped} already up-to-date)`);
    console.log(`  Incremental mode: enabled`);
  } else {
    console.log(`Found ${urls.length} total URLs in sitemap`);
    console.log(`  Priority URLs: ${priorityUrls.length}`);
    console.log(`  Will prerender: ${urlsToRender.length}${MAX_PAGES > 0 ? ` (limited to ${MAX_PAGES})` : ''}`);
  }
} else {
  console.log(`Found ${urls.length} total URLs in sitemap`);
  console.log(`  Priority URLs: ${priorityUrls.length}`);
  console.log(`  Will prerender: ${urlsToRender.length}${MAX_PAGES > 0 ? ` (limited to ${MAX_PAGES})` : ''}`);
  if (FORCE_PRERENDER) {
    console.log(`  Force mode: enabled (ignoring cache)`);
  }
}
console.log(`  Concurrent pages: ${CONCURRENT_PAGES}`);

// Simple HTTP server to serve dist folder
const server = createServer((req, res) => {
  let filePath = path.join(distPath, req.url === '/' ? 'index.html' : req.url);
  
  // If it's a directory, try index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }
  
  // If file doesn't exist, serve main index.html (SPA fallback)
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) {
    filePath = path.join(distPath, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentTypes = {
    '.html': 'text/html',
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.xml': 'application/xml'
  };

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    res.writeHead(200, {
      'Content-Type': contentTypes[ext] || 'text/plain'
    });
    res.end(data);
  });
});

// Start server
await new Promise((resolve) => {
  server.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
    resolve();
  });
});

try {
  // Launch browser
  const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH || 
    (process.platform === 'linux' ? '/usr/bin/chromium-browser' : undefined);
  
  const browser = await puppeteer.launch({
    headless: 'new', // Use new headless mode to avoid deprecation warning
    executablePath,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-software-rasterizer'
    ]
  });

  let successCount = 0;
  let failCount = 0;
  const startTime = Date.now();

  if (urlsToRender.length === 0) {
    console.log(`\n✓ All pages are already prerendered and up-to-date!`);
    console.log(`  No prerendering needed.`);
    server.close();
    process.exit(0);
  }

  console.log(`Starting prerendering of ${urlsToRender.length} URLs with ${CONCURRENT_PAGES} concurrent pages...\n`);

  // Function to prerender a single URL
  const prerenderUrl = async (url, page) => {
    const fullUrl = `http://localhost:${port}${url}`;
    
    try {
      // Navigate and wait for DOM (not networkidle0 - can hang on analytics/polling)
      await page.goto(fullUrl, {
        waitUntil: 'domcontentloaded',
        timeout: 30000
      });

      // Wait for React to render and Helmet to update meta tags
      // React Helmet removes data-default attribute when it updates title
      // Wait for React to mount and Helmet to update
      await page.waitForFunction(() => {
        // Check if React has rendered (root element has content)
        const root = document.getElementById('root');
        if (!root || !root.hasChildNodes()) return false;
        
        // Quick check - Header renders first (fast optimization)
        const header = document.querySelector('header, nav');
        if (!header) return false;
        
        // Check if title exists
        const titleEl = document.querySelector('head > title');
        if (!titleEl) return false;
        
        // React Helmet removes data-default attribute when it updates title
        // If data-default is gone, Helmet has updated the title
        const hasDataDefault = titleEl.hasAttribute('data-default');
        
        if (!hasDataDefault) {
          // Title was updated by Helmet, check if it's not default
          const title = titleEl.textContent.trim();
          const defaultTitle = 'FormiPeek - Free Online File Converter | Convert 300+ Formats Instantly';
          return title && title.length > 0 && title !== defaultTitle;
        }
        
        return false;
      }, { timeout: 15000 }).catch(() => {
        // If timeout, continue anyway - maybe title didn't change but page rendered
        console.warn(`Title update timeout for ${url}, continuing...`);
      });
      
      // Extra wait to ensure all meta tags are fully updated by Helmet
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // For converter pages, wait a bit longer for i18n to load translations
      if (url.includes('/convert/')) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      // Get the rendered HTML
      let html = await page.content();
      
      // Remove all module scripts and preloads to prevent React from rebooting
      // This prevents meta tags from being overwritten and CLS issues
      html = html
        .replace(/<script type="module".*?<\/script>/gs, '')
        .replace(/<link rel="modulepreload".*?>/g, '')
        .replace(/<link rel="preload".*?as="script".*?>/g, '');
      
      // Remove data-default attribute from title if still present (fast regex operation)
      html = html.replace(/<title\s+data-default[^>]*>/g, '<title>');

      // Save to file
      const filePath = url === '/' 
        ? path.join(distPath, 'index.html')
        : path.join(distPath, url, 'index.html');

      // Create directory if needed
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.writeFileSync(filePath, html);
      return { success: true, url };
      
    } catch (error) {
      // Still create the directory structure with base HTML
      const filePath = url === '/' 
        ? path.join(distPath, 'index.html')
        : path.join(distPath, url, 'index.html');
      
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // Copy original index.html as fallback (not the potentially corrupted one)
      try {
        const baseHtml = fs.readFileSync(originalIndexPath, 'utf-8');
        fs.writeFileSync(filePath, baseHtml);
      } catch (e) {
        // If original HTML doesn't exist, skip
      }
      
      return { success: false, url, error: error.message };
    }
  };

  // Create multiple pages for parallel processing
  const pages = [];
  for (let i = 0; i < CONCURRENT_PAGES; i++) {
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    pages.push(page);
  }

  // Process URLs in batches
  for (let i = 0; i < urlsToRender.length; i += CONCURRENT_PAGES) {
    const batch = urlsToRender.slice(i, i + CONCURRENT_PAGES);
    
    // Prerender batch in parallel
    const results = await Promise.all(
      batch.map((url, idx) => prerenderUrl(url, pages[idx]))
    );

    // Process results
    results.forEach(result => {
      if (result.success) {
        successCount++;
      } else {
        failCount++;
        console.error(`Failed to prerender ${result.url}: ${result.error}`);
      }
    });

    // Log progress
    const completed = Math.min(i + CONCURRENT_PAGES, urlsToRender.length);
    if (completed % 10 === 0 || completed === urlsToRender.length) {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      const avgTime = elapsed / completed;
      const remaining = Math.ceil((urlsToRender.length - completed) * avgTime / CONCURRENT_PAGES);
      const progress = (completed / urlsToRender.length * 100).toFixed(1);
      console.log(`[${completed}/${urlsToRender.length}] (${progress}%) Prerendered... (${elapsed}s elapsed, ~${remaining}s remaining)`);
    }
  }

  // Close all pages
  await Promise.all(pages.map(page => page.close()));

  await browser.close();
  
  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
  const skippedCount = urls.length - urlsToRender.length;
  
  console.log(`\n✓ Prerendering complete!`);
  console.log(`  Total time: ${totalTime}s`);
  console.log(`  Success: ${successCount}`);
  console.log(`  Failed: ${failCount}`);
  if (urlsToRender.length > 0) {
    console.log(`  Average: ${(totalTime / urlsToRender.length).toFixed(2)}s per page`);
  }
  if (INCREMENTAL && !FORCE_PRERENDER && skippedCount > 0) {
    console.log(`  Skipped (already up-to-date): ${skippedCount}`);
  }
  if (MAX_PAGES > 0 && urlsToRender.length < urls.length) {
    console.log(`  Note: Limited to ${MAX_PAGES} pages (${urls.length - urlsToRender.length} skipped)`);
  }

  // Close server
  server.close();
  
  process.exit(0);
} catch (error) {
  console.error('Prerendering error:', error);
  server.close();
  process.exit(1);
}
