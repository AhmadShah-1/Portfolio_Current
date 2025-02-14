#!/bin/bash

# Create necessary directories
mkdir -p components
mkdir -p pages
mkdir -p public
mkdir -p styles
mkdir -p public/Assets

# Copy assets
cp -r Assets/* public/Assets/

# Install dependencies
npm install

# Create a development script
echo "To start the development server, run: npm run dev" 