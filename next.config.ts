import type { NextConfig } from "next";

const repo = "wheels-harbison";

const nextConfig: NextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    basePath: `/${repo}`,
    assetPrefix: `/${repo}`,
};

export default nextConfig;
