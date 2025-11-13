import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Plugin to serve sitemap files with correct Content-Type
const sitemapPlugin = () => {
  return {
    name: 'sitemap-content-type',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/sitemap.xml' || req.url === '/sitemap.xsl') {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
        }
        next();
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sitemapPlugin()],
  server: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'require-corp',
      'Cross-Origin-Opener-Policy': 'same-origin',
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
    'process.env': JSON.stringify({}),
    'process': JSON.stringify({ env: {} })
  }
});
