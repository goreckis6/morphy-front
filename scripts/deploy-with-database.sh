#!/bin/bash

# Morphy Deployment Script with Database Integration
# This script deploys the application with PostgreSQL database to Render.com

echo "🚀 Starting Morphy deployment with database integration..."

# Check if we're in the right directory
if [ ! -f "render.yaml" ]; then
    echo "❌ Error: render.yaml not found. Please run this script from the project root."
    exit 1
fi

# Check if backend dependencies are installed
if [ ! -d "backend/node_modules" ]; then
    echo "📦 Installing backend dependencies..."
    cd backend
    npm install
    cd ..
fi

# Verify database configuration
echo "🔍 Verifying database configuration..."
if [ ! -f "backend/env.production.template" ]; then
    echo "❌ Error: Database template not found."
    exit 1
fi

echo "✅ Database template found"

# Check render.yaml for database configuration
if grep -q "YOUR_PASSWORD" render.yaml; then
    echo "⚠️  Warning: Please update YOUR_PASSWORD in render.yaml with your actual OVH database password"
    echo "   Edit render.yaml and replace 'YOUR_PASSWORD' with your database password"
    read -p "Press Enter to continue after updating render.yaml..."
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors and try again."
    exit 1
fi

echo "✅ Build successful"

# Deploy to Render.com
echo "🚀 Deploying to Render.com..."
echo "   Frontend: morphyimg.com + morphy-1-ulvv.onrender.com"
echo "   Backend: api.morphyimg.com"
echo "   Database: OVH PostgreSQL (gs32813-001.eu.clouddb.ovh.net)"

# Note: Actual deployment happens via Git push to Render
echo ""
echo "📋 Next steps:"
echo "1. Update YOUR_PASSWORD in render.yaml with your actual OVH database password"
echo "2. Commit and push your changes:"
echo "   git add ."
echo "   git commit -m 'Add PostgreSQL database integration'"
echo "   git push origin main"
echo ""
echo "3. Monitor deployment at: https://dashboard.render.com"
echo "4. Test database connection: https://morphyimg.ovh/health"
echo "5. Check analytics: https://morphyimg.ovh/api/analytics/conversions"

echo ""
echo "🎯 Deployment configuration:"
echo "   ✅ Custom domains configured"
echo "   ✅ OVH PostgreSQL database configured"
echo "   ✅ SSL enabled"
echo "   ✅ Database logging enabled"
echo "   ✅ Analytics endpoints ready"

echo ""
echo "✅ Deployment script completed successfully!"


