import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // OPSI INI AKAN MEMAKSA BUILD TETAP JALAN MESKIPUN ADA ERROR
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;