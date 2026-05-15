import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const repo = 'Greenetix-Boy';

const nextConfig: NextConfig = {
    ...(isGitHubPages ? { output: 'export' as const } : {}),
    basePath: isGitHubPages ? `/${repo}` : '',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
