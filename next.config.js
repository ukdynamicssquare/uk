/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp']
   }
}

module.exports = nextConfig


module.exports = {
  async redirects() {
    return [
      {
        source: '/products/crm/',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
