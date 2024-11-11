/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    exportPathMap: async function () {
        return {
            '/': { page: '/' },
            '/professor': { page: '/professor' },
            '/research': { page: '/research' },
            '/research_result': { page: '/research_result' },
            '/members': { page: '/members' },
            '/graduate_members': { page: '/graduate_members' },
        };
    },
    assetPrefix: 'https://tiffany0313.github.io/lab-website/',
};

module.exports = nextConfig;
