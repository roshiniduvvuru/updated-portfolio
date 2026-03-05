#!/bin/bash

# Render Build Script for Roshini Portfolio
# This script is executed during the build process on Render

set -e

echo "Installing dependencies..."
npm install

echo "Building production bundle..."
npm run build

echo "Build completed successfully!"
echo "Output directory: dist/"
