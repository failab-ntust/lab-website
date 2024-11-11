/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,  // 用於生成靜態頁面時，在每個 URL 末尾加上斜線（例如：/about/ 而不是 /about）
    images: {
        unoptimized: true,  // 禁用 Next.js 預設的圖片優化，因為 GitHub Pages 不支持
    },
}

module.exports = nextConfig
