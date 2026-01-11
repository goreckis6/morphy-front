/**
 * Qwik SSR Express server
 */
import express from 'express';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import render from './entry.ssr.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

// Create Express app
const app = express();

// Serve static files
app.use(express.static(join(__dirname, '..', 'dist'), {
  maxAge: '1d',
  index: false, // Don't auto-serve index.html
}));

// Qwik SSR middleware
app.get('*', async (req, res, next) => {
  try {
    // Render using Qwik SSR
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
app.listen(PORT, () => {
  console.log(`✅ Qwik SSR server running on http://localhost:${PORT}`);
});
