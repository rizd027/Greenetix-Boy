export const getAssetPath = (path: string) => {
    const isProd = process.env.NODE_ENV === 'production' || process.env.NEXT_PUBLIC_GITHUB_ACTIONS === 'true';
    const repo = 'Greenetix-Boy';
    if (isProd && !path.startsWith('http')) {
        const cleanPath = path.startsWith('/') ? path : `/${path}`;
        return `/${repo}${cleanPath}`;
    }
    return path;
};
