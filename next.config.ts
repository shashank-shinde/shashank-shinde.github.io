import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Parent directories may contain other lockfiles; pin tracing to this app.
  outputFileTracingRoot: path.join(__dirname),
  // Keep monorepo-friendly resolution consistent with the previous Vite setup.
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./src"),
    };
    return config;
  },
};

export default nextConfig;
