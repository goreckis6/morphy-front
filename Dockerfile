## Frontend multi-stage production Dockerfile

# 1) Builder: install deps and build static assets
FROM node:18-alpine AS builder

WORKDIR /app

# Install Chromium and dependencies for Puppeteer
RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    freetype-dev \
    harfbuzz \
    ca-certificates \
    ttf-freefont

# Set Puppeteer to use installed Chromium
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Copy package files first for better layer caching
COPY package*.json ./

# Install all dependencies (includes dev deps for Vite build and Puppeteer)
RUN npm ci

# Copy the rest of the source
COPY . .

# Build the Vite app (this will also run prerendering via postbuild script)
RUN npm run build

# 2) Runtime: serve with nginx
FROM nginx:alpine AS runtime

# Copy built assets to nginx web root
COPY --from=builder /app/dist /usr/share/nginx/html

# Supply nginx config if present (optional)
COPY docker/nginx.conf /etc/nginx/nginx.conf
COPY docker/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
