import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // <–– this lets Vercel succeed the build even if ESLint fails
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
