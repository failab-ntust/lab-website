/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
    basePath: '/lab-website',
    assetPrefix: 'https://failab-ntust.github.io/lab-website/',
    trailingSlash: true,
};

module.exports = nextConfig;
