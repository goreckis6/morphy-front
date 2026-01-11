#!/usr/bin/env bash
set -euo pipefail

# Configurable variables
DOMAIN=${DOMAIN:-formipeek.com}
NETWORK=${NETWORK:-traefik}
IMAGE=${IMAGE:-ambro66/morphy-frontend:latest}
APP_DIR=${APP_DIR:-/srv/morphy-front}

echo "Deploying $IMAGE for $DOMAIN on network $NETWORK"

mkdir -p "$APP_DIR"

# Ensure network exists
docker network create "$NETWORK" || true

# Pull latest image
docker pull "$IMAGE"

cd "$APP_DIR"

# Expect docker-compose.yml to be present in $APP_DIR
docker compose pull || true
docker compose up -d

echo "Deployment complete. Check with: docker logs -f morphy-frontend"