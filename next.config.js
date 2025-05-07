/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/lab-website',
    assetPrefix: '/lab-website',
    trailingSlash: true,
};

module.exports = nextConfig;
