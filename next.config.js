const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: false,
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
}

module.exports = withBundleAnalyzer(nextConfig)