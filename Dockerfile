## Frontend multi-stage production Dockerfile

# 1) Builder: install deps and build static assets
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install only production dependencies
RUN npm ci --omit=dev

# Copy the rest of the source
COPY . .

# Build the Vite app
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
