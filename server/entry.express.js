/**
 * Express server for Qwik SSR production
 */
import express from 'express';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { qwikCity } from '@builder.io/qwik-city/middleware/node';
import render from '../dist/server/entry.ssr.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Create Express app
const app = express();

// Serve static files from dist/client
app.use(express.static(join(__dirname, '..', 'dist', 'client'), {
  maxAge: '1y',
  immutable: true
}));

// Qwik City SSR middleware
app.use(qwikCity(render, {
  base: '/'
}));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Qwik SSR server running on http://localhost:${PORT}`);
});
