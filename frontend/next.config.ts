import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Transpile MUI packages for SSR compatibility
  transpilePackages: ['@mui/material', '@mui/icons-material', '@emotion/styled', '@emotion/react'],
  webpack(config) {
    // Treat SVG files as React components via @svgr/webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

export default nextConfig;
