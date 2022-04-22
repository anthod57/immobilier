/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['v.seloger.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
