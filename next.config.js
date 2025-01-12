/** @type {import('next').NextConfig} */

const { redirects } = require('./redirects.config.js')

const { withPlausibleProxy } = require('next-plausible')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  bundlePagesRouterDependencies: true,
  transpilePackages: ['next-mdx-remote'],
  experimental: {
    optimizePackageImports: [
      'react-lottie-player',
      'react-dom',
      'react-select',
      'framer-motion',
      '@sendgrid/mail',
      'sharp',
      'busboy',
      'react-ga4',
      'embla-carousel-react',
      'react-hook-form',
      'yup',
      'dayjs',
      'remark-gfm',
      'react-player',
      'swr',
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ]
  },
  compress: true,
  images: {
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { protocol: 'https', hostname: '**.chec.io' },
      { protocol: 'https', hostname: '**.pixelbakery.com' },
      { protocol: 'https', hostname: 's3.us-east-2.amazonaws.com' },
      {
        protocol: 'https',
        hostname: 's3.us-east-2.amazonaws.com',
        pathname: '/cdn.pixelbakery.com/',
      },
      { protocol: 'https', hostname: 'cdn.pixelbakery.com.s3.us-east-2.amazonaws.com/' },
      { protocol: 'https', hostname: 'placeimg.com' },
      { protocol: 'https', hostname: 'scontent.cdninstagram.com' },
      { protocol: 'https', hostname: 'scontent-ort2-2.cdninstagram.com' },
      { protocol: 'https', hostname: '*.cdninstagram.com' },
      { protocol: 'https', hostname: 'scontent-akl1-1.cdninstagram.com' },
      { protocol: 'https', hostname: 'i.scdn.co' },
      { protocol: 'https', hostname: '*.scdn.co' },
      {
        protocol: 'https',
        hostname: 'cdn.pixelbakery.com',
      },
      { protocol: 'https', hostname: 'scdn.co' },
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
      },
      { protocol: 'https', hostname: 'mosaic.scdn.co' },
      { protocol: 'https', hostname: 'images234-focus-opensocial.googleusercontent.com' },
      { protocol: 'https', hostname: 'scontent.cdninstagram.com' },
      { protocol: 'https', hostname: 'scontent-akl1-1.cdninstagram.com' },
    ],
  },
  trailingSlash: false,
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  redirects,
}

module.exports = withBundleAnalyzer(
  withPlausibleProxy({
    customDomain: 'https://analytics.jordy.world',
  })(nextConfig),
)
