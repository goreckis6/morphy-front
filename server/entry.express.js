/**
 * Express server for Qwik SSR production
 */
import express from 'express';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import qwikMiddleware from '../server/entry.express.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Create Express app
const app = express();

// Serve static files from dist
app.use(express.static(join(__dirname, '..', 'dist'), {
  maxAge: '1y',
  immutable: true
}));

// Qwik City SSR middleware
app.use(qwikMiddleware);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Qwik SSR server running on http://localhost:${PORT}`);
});
