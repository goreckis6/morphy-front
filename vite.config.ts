import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import prerender from 'vite-plugin-prerender';
import path from 'path';
import routes from './scripts/generate-routes.js';

// Plugin to serve sitemap files with correct Content-Type
const sitemapPlugin = () => {
  return {
    name: 'sitemap-content-type',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/sitemap.xml') {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
        } else if (req.url === '/sitemap.xsl') {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
        }
        next();
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    sitemapPlugin(),
    prerender({
      routes: routes,
      postProcess(renderedRoute) {
        // Signal that prerendering is complete
        renderedRoute.html = renderedRoute.html.replace(
          /<script/,
          '<script>window.prerenderReady=true;</script><script'
        );
        return renderedRoute;
      },
    }),
  ],
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
