import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer } from 'http';
import puppeteer from 'puppeteer';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '../dist');
const port = 4173;

// Read sitemap to get all URLs
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const sitemap = fs.readFileSync(sitemapPath, 'utf-8');

// Extract URLs - improved parser with whitespace handling
const urls = [...new Set(
  [...sitemap.matchAll(/<loc>\s*(.*?)\s*<\/loc>/gs)]
    .map(m => m[1].replace('https://formipeek.com', ''))
    .filter(u => u && u.startsWith('/'))
)];

console.log(`Found ${urls.length} URLs to prerender`);

// Save original index.html before prerendering to avoid race condition
const originalIndexPath = path.join(distPath, 'index.original.html');
if (fs.existsSync(path.join(distPath, 'index.html'))) {
  fs.copyFileSync(
    path.join(distPath, 'index.html'),
    originalIndexPath
  );
  console.log('Saved original index.html');
}

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

  const page = await browser.newPage();
  
  // Set viewport
  await page.setViewport({ width: 1920, height: 1080 });

  let successCount = 0;
  let failCount = 0;
  const startTime = Date.now();

  console.log(`Starting prerendering of ${urls.length} URLs...\n`);

  // Prerender each URL
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const fullUrl = `http://localhost:${port}${url}`;
    
    try {
      // Log progress more frequently (every 5 URLs or first/last)
      if ((i + 1) % 5 === 0 || i === 0 || i === urls.length - 1) {
        const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
        const avgTime = elapsed / (i + 1);
        const remaining = Math.ceil((urls.length - i - 1) * avgTime);
        const progress = ((i + 1) / urls.length * 100).toFixed(1);
        console.log(`[${i + 1}/${urls.length}] (${progress}%) Prerendering ${url}... (${elapsed}s elapsed, ~${remaining}s remaining)`);
      }
      
      // Navigate and wait for DOM (not networkidle0 - can hang on analytics/polling)
      await page.goto(fullUrl, {
        waitUntil: 'domcontentloaded',
        timeout: 30000
      });

      // Wait for React Helmet to update meta tags in <head>
      await page.waitForSelector('head > title', { timeout: 10000 });
      await page.waitForTimeout(1000); // Extra time for Helmet to finish

      // Get the rendered HTML
      let html = await page.content();
      
      // Remove all module scripts and preloads to prevent React from rebooting
      // This prevents meta tags from being overwritten and CLS issues
      html = html
        .replace(/<script type="module".*?<\/script>/gs, '')
        .replace(/<link rel="modulepreload".*?>/g, '')
        .replace(/<link rel="preload".*?as="script".*?>/g, '');

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
      successCount++;
      
    } catch (error) {
      console.error(`Failed to prerender ${url}:`, error.message);
      failCount++;
      
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
        console.warn(`Could not use fallback for ${url}`);
      }
    }
  }

  await browser.close();
  
  const totalTime = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n✓ Prerendering complete!`);
  console.log(`  Total time: ${totalTime}s`);
  console.log(`  Success: ${successCount}`);
  console.log(`  Failed: ${failCount}`);
  console.log(`  Average: ${(totalTime / urls.length).toFixed(2)}s per page`);

  // Close server
  server.close();
  
  process.exit(0);
} catch (error) {
  console.error('Prerendering error:', error);
  server.close();
  process.exit(1);
}
