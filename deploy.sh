#!/bin/bash

# Production deployment script
set -euo pipefail

echo "🚀 Starting deployment..."

# Create letsencrypt directory if it doesn't exist
mkdir -p letsencrypt

# Set environment variable
export VITE_API_BASE_URL=https://api.formipeek.com

# Stop old containers
echo "🛑 Stopping old containers..."
docker compose -f docker-compose.prod.yml down 2>/dev/null || true

# Pull latest image
echo "📥 Pulling latest image..."
docker pull ghcr.io/goreckis6/morphy-frontend:latest

# Start services with Docker Compose
echo "🚀 Starting services..."
docker compose -f docker-compose.prod.yml up -d

# Verify deployment
echo "✅ Verifying deployment..."
sleep 10
docker compose -f docker-compose.prod.yml ps

echo "🎉 Deployment complete!"
echo "Your site should be available at: https://formipeek.com"
