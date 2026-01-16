import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  reactCompiler: true,
  experimental: {
    optimizePackageImports: ['antd'],
  },
};

export default nextConfig;
