import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    // ppr: true,
    clientSegmentCache: true,
    // nodeMiddleware: true
  },
};

export default nextConfig;
