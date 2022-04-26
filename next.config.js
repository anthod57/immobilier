/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['v.seloger.com', 'firebasestorage.googleapis.com'],
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
