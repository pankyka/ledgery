import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // ppr: true,
    // nodeMiddleware: true,
    clientSegmentCache: true,    
    authInterrupts: true,
  },
};

export default nextConfig;
