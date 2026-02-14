import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
const repo = 'Greenetix-Boy';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: isProd ? `/${repo}` : '',
    assetPrefix: isProd ? `/${repo}/` : '',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
