/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp']
   }
}
 


module.exports = nextConfig
