const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
  images: {
    unoptimized: true,
  },
  // This is important for serving static files from the public directory
  assetPrefix: '',
  // Enable static file serving for the public directory
  webpack(config) {
    config.module.rules.push({
      test: /\.(pdf|doc|docx|png|jpg|jpeg|gif)$/i,
      type: 'asset/resource'
    });
    return config;
  }
};

module.exports = withMDX(nextConfig); 