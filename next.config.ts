import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Cloudinary domain
        pathname: '/**', // Allow any path in the Cloudinary domain
      },
    ],
  },
};

export default nextConfig;
