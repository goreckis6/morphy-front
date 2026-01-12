/**
 * Minimal Express wrapper to run QwikCity middleware output (server/entry.express.js).
 * The SSR bundle is produced by `vite build --ssr src/entry.express.tsx` into this folder.
 * This file must NOT be overwritten by the build, so keep it named differently from entry.express.js.
 */
import express from 'express';
import { fileURLToPath } from 'node:url';
import { join, resolve } from 'node:path';
import { existsSync } from 'node:fs';
import { readdir } from 'node:fs/promises';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const app = express();

// Serve static assets
app.use(
  express.static(join(__dirname, '..', 'dist'), {
    maxAge: '1d',
    index: false,
  }),
);

let middlewareReady = false;

async function loadMiddleware() {
  const entryPath = resolve(__dirname, 'entry.express.js');
  console.log(`[startup] Loading QwikCity middleware from ${entryPath}`);

  if (!existsSync(entryPath)) {
    throw new Error(`SSR entry not found: ${entryPath}`);
  }

  const mod = await import(entryPath);
  const middleware = mod.default || mod;

  if (typeof middleware !== 'function') {
    throw new Error(`Invalid middleware export type: ${typeof middleware}`);
  }

  middlewareReady = true;
  console.log('[startup] QwikCity middleware loaded');
  return middleware;
}

const middlewarePromise = loadMiddleware().catch((err) => {
  console.error('[startup] Failed to load QwikCity middleware:', err);
  return null;
});

// Health endpoint
app.get('/health', async (_req, res) => {
  const serverPath = __dirname;
  let files = [];
  try {
    files = await readdir(serverPath);
  } catch {
    // ignore
  }
  res.status(200).json({
    ok: middlewareReady,
    middlewareReady,
    serverPath,
    files,
    host: process.env.HOST,
    port: process.env.PORT,
  });
});

// Debug endpoint
app.get('/__debug', async (_req, res) => {
  const serverPath = __dirname;
  const distPath = resolve(__dirname, '..', 'dist');
  const distServerPath = resolve(__dirname, '..', 'dist', 'server');
  let serverFiles = [];
  let distServerFiles = [];
  try {
    serverFiles = await readdir(serverPath);
  } catch {}
  try {
    distServerFiles = await readdir(distServerPath);
  } catch {}

  res.status(200).json({
    node: process.version,
    env: { HOST: process.env.HOST, PORT: process.env.PORT },
    paths: { serverPath, distPath, distServerPath },
    exists: {
      serverPath: existsSync(serverPath),
      distPath: existsSync(distPath),
      distServerPath: existsSync(distServerPath),
    },
    serverFiles,
    distServerFiles,
    middlewareReady,
  });
});

// QwikCity middleware
app.use(async (req, res, next) => {
  try {
    const middleware = await middlewarePromise;
    if (!middleware) {
      console.error(`[${req.method}] ${req.url} - middleware not loaded`);
      return res.status(500).json({ error: 'QwikCity middleware not loaded' });
    }
    return middleware(req, res, next);
  } catch (err) {
    console.error(`[${req.method}] ${req.url} - SSR error:`, err);
    if (!res.headersSent) {
      res.status(500).json({ error: 'SSR error', message: err?.message });
    } else {
      next(err);
    }
  }
});

// Fallback
app.use((req, res) => {
  console.log(`[${req.method}] ${req.url} - 404`);
  res.status(404).json({ error: 'Not found', path: req.url });
});

// Start server after middleware promise settles
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

middlewarePromise
  .finally(() => {
    app.listen(PORT, HOST, () => {
      console.log(
        `✅ Qwik SSR server listening on http://${HOST}:${PORT} (middlewareReady=${middlewareReady})`,
      );
    });
  })
  .catch(() => {
    // should not reach here because .catch above returns null
  });

// Global error handlers
process.on('uncaughtException', (err) => {
  console.error('❌ Uncaught exception:', err);
  process.exit(1);
});
process.on('unhandledRejection', (reason) => {
  console.error('❌ Unhandled rejection:', reason);
  process.exit(1);
});
