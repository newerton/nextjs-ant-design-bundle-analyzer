import { NextConfig } from "next";
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

// Create basePath for GitHub pages
const basePath = process.env.NODE_ENV !== 'development' ? '/nextjs-ant-design-bundle-analyzer' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath,
  experimental: {
    reactCompiler: true,
  },
}

export default withBundleAnalyzer(nextConfig)