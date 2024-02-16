import bundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
};

const withBundleAnalyzer = bundleAnalyzer({
  enabled: true,
})

export default withBundleAnalyzer(nextConfig);
