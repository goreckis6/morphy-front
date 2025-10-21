# Frontend Dockerfile
FROM node:22-alpine

WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies (include dev for build)
RUN npm ci --no-audit --no-fund --include=dev

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Remove dev dependencies before copying to runtime image
RUN npm prune --production

# Use nginx to serve static files (much faster)
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
