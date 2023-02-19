/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'gogocdn.net',
        port: '',
        pathname: '/cover/**',
      },
      {
        protocol: 'https',
        hostname: 'gogocdn.net',
        port: '',
        pathname: '/images/anime/**',
      },
      {
        protocol: 'https',
        hostname: 'gogocdn.net',
        port: '',
        pathname: '/images/upload/**',
      },
      {
        protocol: 'https',
        hostname: 'gogocdn.net',
        port: '',
        pathname: '/images/**',
      },
    ],
  },
}

module.exports = nextConfig
