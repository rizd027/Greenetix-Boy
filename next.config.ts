import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repo = 'Greenetix-Boy';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: isGitHubPages ? `/${repo}` : '',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
