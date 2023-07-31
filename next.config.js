/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: "standalone",
  images: {
    formats: ['image/avif', 'image/webp']
   },
   env:{
    BACKEND_URL:'https://blognew.dynamicssquare.co.uk'
  }
}
 


module.exports = nextConfig
