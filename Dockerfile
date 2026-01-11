# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build Qwik application (creates dist/ with server and client)
RUN npm run build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built application from builder
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/server ./server
COPY --from=builder /app/package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Expose Qwik SSR port
EXPOSE 3000

# Start Qwik SSR server
CMD ["npm", "run", "serve"]
