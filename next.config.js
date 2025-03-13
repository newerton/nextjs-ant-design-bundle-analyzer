const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: true,
  openAnalyzer: false,  
});

// Create basePath for GitHub pages
const basePath = process.env.NODE_ENV !== 'development' ? '/nextjs-ant-design-bundle-analyzer' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath,
  experimental: {
    reactCompiler: true,
  },
}

module.exports = withBundleAnalyzer(nextConfig)