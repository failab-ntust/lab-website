/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    //basePath: isProd ? '/lab-website' : '',
    trailingSlash: true,
    //env: {
        //NEXT_PUBLIC_BASE_PATH: isProd ? '/lab-website' : '',
    //},
};

export default nextConfig;
