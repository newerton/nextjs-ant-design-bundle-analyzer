const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
})

// Create basePath for GitHub pages
const basePath = process.env.NODE_ENV !== 'development' ? '/nextjs-ant-design-bundle-analyzer' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
}

module.exports = withBundleAnalyzer(nextConfig)