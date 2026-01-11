/**
 * Qwik SSR Express server
 */
import express from 'express';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

// Resolve SSR renderer with fallbacks for different build outputs
async function loadRenderer() {
  const candidates = [
    '../dist/server/entry.ssr.js',
    '../dist/server/entry.node.js',
    '../dist/server/entry.preview.js',
  ];
  for (const p of candidates) {
    try {
      const mod = await import(p);
      console.log(`✅ Loaded SSR entry: ${p}`);
      return mod.default || mod.render || mod;
    } catch (e) {
      // continue to next candidate
    }
  }
  throw new Error('❌ No SSR entry found in dist/server (tried entry.ssr.js, entry.node.js, entry.preview.js)');
}

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Create Express app
const app = express();

// Serve static files
app.use(express.static(join(__dirname, '..', 'dist'), {
  maxAge: '1d',
  index: false, // Don't auto-serve index.html
}));

// Load renderer once at startup, then serve requests
let rendererPromise = loadRenderer();

// Qwik SSR middleware
app.get('*', async (req, res, next) => {
  try {
    const render = await rendererPromise;
    const result = await render({
      url: req.url,
      base: '/',
    });

    res.set(result.headers);
    res.status(result.status);
    res.send(result.html);
  } catch (e) {
    console.error('SSR Error:', e);
    next(e);
  }
});

// Start server
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`✅ Qwik SSR server running on http://${HOST}:${PORT}`);
});
