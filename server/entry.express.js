/**
 * Qwik SSR Express server
 */
import express from 'express';
import { fileURLToPath } from 'node:url';
import { join, resolve } from 'node:path';
import { readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

// Resolve SSR renderer with fallbacks for different build outputs
async function loadRenderer() {
  const candidates = [
    '../dist/server/entry.ssr.js',
    '../dist/server/entry.node.js',
    '../dist/server/entry.preview.js',
  ];
  for (const p of candidates) {
    try {
      console.log(`Trying SSR entry: ${p}`);
      const mod = await import(p);
      console.log(`✅ Loaded SSR entry: ${p}`);
      return mod.default || mod.render || mod;
    } catch (e) {
      console.error(`Failed loading ${p}: ${e?.message || e}`);
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

// Startup diagnostics
async function logStartup() {
  try {
    console.log(`Node version: ${process.version}`);
    console.log(`Env HOST=${process.env.HOST} PORT=${process.env.PORT}`);
    const distPath = resolve(__dirname, '..', 'dist');
    const serverPath = resolve(__dirname, '..', 'dist', 'server');
    console.log(`Resolved dist path: ${distPath}`);
    console.log(`Resolved server path: ${serverPath}`);
    const distExists = existsSync(distPath);
    const serverExists = existsSync(serverPath);
    console.log(`dist exists: ${distExists}`);
    console.log(`dist/server exists: ${serverExists}`);
    if (serverExists) {
      const files = await readdir(serverPath);
      console.log(`dist/server files: ${files.join(', ')}`);
    }
  } catch (e) {
    console.error(`Startup diagnostics error: ${e?.message || e}`);
  }
}
logStartup();

// Load renderer once at startup, then serve requests
let rendererReady = false;
let rendererPromise = loadRenderer().then((r) => {
  rendererReady = true;
  return r;
});

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

// Health endpoint
app.get('/health', async (_req, res) => {
  try {
    const distPath = resolve(__dirname, '..', 'dist');
    const serverPath = resolve(__dirname, '..', 'dist', 'server');
    const serverExists = existsSync(serverPath);
    let files = [];
    if (serverExists) {
      files = await readdir(serverPath);
    }
    res.status(200).json({
      ok: true,
      rendererReady,
      serverExists,
      files,
      host: process.env.HOST,
      port: process.env.PORT,
    });
  } catch {
    res.status(500).json({ ok: false });
  }
});

// Debug endpoint
app.get('/__debug', async (_req, res) => {
  const distPath = resolve(__dirname, '..', 'dist');
  const serverPath = resolve(__dirname, '..', 'dist', 'server');
  const distExists = existsSync(distPath);
  const serverExists = existsSync(serverPath);
  let files = [];
  try {
    if (serverExists) {
      files = await readdir(serverPath);
    }
  } catch {}
  res.status(200).json({
    node: process.version,
    env: { HOST: process.env.HOST, PORT: process.env.PORT },
    paths: { distPath, serverPath },
    exists: { distExists, serverExists },
    files,
    rendererReady,
  });
});

// Start server
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`✅ Qwik SSR server running on http://${HOST}:${PORT}`);
});
