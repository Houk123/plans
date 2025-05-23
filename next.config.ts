import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: "./dist",
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "~@styles/variable.scss";`,
  }
};

export default nextConfig;
