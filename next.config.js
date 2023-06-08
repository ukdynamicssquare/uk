/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp']
   },
   env:{
    BACKEND_URL:'https://blognew.dynamicssquare.co.uk'
  }
}
 


module.exports = nextConfig
