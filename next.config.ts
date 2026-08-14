import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.ham.web.id',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
    ],
  },
};

export default nextConfig;
