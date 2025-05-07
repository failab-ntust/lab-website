/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true,
    },
    basePath:'/lab-website',
    trailingSlash: true,
  };
  
export default nextConfig;
  