import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  sassOptions: {
    includePaths: ['./src'],
    prependData: `@import "~@styles/variable.scss";`,
  }
};

export default nextConfig;
