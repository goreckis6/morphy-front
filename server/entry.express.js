/**
 * Qwik SSR Express server
 */
import express from 'express';
import { fileURLToPath } from 'node:url';
import { join, resolve } from 'node:path';
import { readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Create Express app
const app = express();

// Serve static files
app.use(express.static(join(__dirname, '..', 'dist'), {
  maxAge: '1d',
  index: false, // Don't auto-serve index.html
}));

// Load QwikCity middleware
let qwikCityMiddleware;
let rendererReady = false;

async function loadQwikCity() {
  try {
    // Try to load the built entry.express.js from dist/server
    const entryPath = resolve(__dirname, '..', 'dist', 'server', 'entry.express.js');
    console.log(`Loading QwikCity middleware from: ${entryPath}`);
    
    if (!existsSync(entryPath)) {
      throw new Error(`Entry file not found: ${entryPath}`);
    }
    
    const mod = await import(entryPath);
    const middleware = mod.default || mod;
    
    if (typeof middleware !== 'function') {
      throw new Error(`Invalid middleware type: ${typeof middleware}`);
    }
    
    console.log('✅ QwikCity middleware loaded successfully');
    rendererReady = true;
    return middleware;
  } catch (e) {
    console.error(`❌ Failed to load QwikCity middleware: ${e?.message || e}`);
    console.error(e.stack);
    throw e;
  }
}

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

// Load middleware at startup
const middlewarePromise = loadQwikCity().then((m) => {
  qwikCityMiddleware = m;
  return m;
}).catch((e) => {
  console.error('❌ Fatal: Could not load QwikCity middleware');
  console.error(e);
  // Don't throw - let health endpoint still work
  return null;
});

// Health endpoint (before QwikCity middleware so it's always available)
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

// Debug endpoint (before QwikCity middleware so it's always available)
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

// Qwik SSR middleware - use QwikCity middleware for all routes (catch-all)
app.use(async (req, res, next) => {
  try {
    const middleware = await middlewarePromise;
    if (!middleware) {
      console.error(`[${req.method}] ${req.url} - QwikCity middleware not loaded`);
      return res.status(500).json({ error: 'QwikCity middleware not loaded' });
    }
    console.log(`[${req.method}] ${req.url} - Routing to QwikCity`);
    await middleware(req, res, next);
  } catch (e) {
    console.error(`[${req.method}] ${req.url} - SSR Error:`, e);
    console.error(e.stack);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Internal server error', message: e.message });
    } else {
      next(e);
    }
  }
});

// Error handler for unhandled routes (should not be reached if QwikCity works correctly)
app.use((req, res) => {
  console.log(`[${req.method}] ${req.url} - No handler found (404)`);
  res.status(404).json({ error: 'Not found', path: req.url });
});

// Start server
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => {
  console.log(`✅ Qwik SSR server running on http://${HOST}:${PORT}`);
});
