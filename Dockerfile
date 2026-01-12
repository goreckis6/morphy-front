# -------- BUILD --------
FROM node:20-alpine AS builder
WORKDIR /app

ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=$VITE_API_BASE_URL

COPY package*.json ./
RUN npm ci

# Copy everything except server/ first
COPY . .

# Save server/index.js before build (build may overwrite server/)
RUN if [ -f server/index.js ]; then mkdir -p /tmp/runtime && cp server/index.js /tmp/runtime/index.js; fi

RUN npm run build

# Restore server/index.js after build
RUN if [ -f /tmp/runtime/index.js ]; then cp /tmp/runtime/index.js server/index.js; fi

# -------- RUNTIME --------
FROM node:20-alpine
WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

# Install only production dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built frontend
COPY --from=builder /app/dist ./dist

# Copy built SSR bundle
COPY --from=builder /app/server/entry.express.js ./server/entry.express.js

# Copy runtime entry point from builder (restored after build)
COPY --from=builder /app/server/index.js ./server/index.js

EXPOSE 3000

# Health check with error handling
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "const http=require('http');const req=http.get('http://localhost:3000/health',r=>process.exit(r.statusCode===200?0:1));req.on('error',()=>process.exit(1));"

CMD ["node", "server/index.js"]
