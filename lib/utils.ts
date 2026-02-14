export const getAssetPath = (path: string) => {
    const isGitHubPages = process.env.NEXT_PUBLIC_IS_GH_PAGES === 'true';
    const repo = 'Greenetix-Boy';
    if (isGitHubPages && !path.startsWith('http')) {
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        return `/${repo}${cleanPath}`;
    }
    return path;
};
