/**
 * @type {import('next').NextConfig}
 */

// const React = require('react')
// const { withPlugins, extend } = require('next-compose-plugins')

const { redirects } = require('./redirects.config.js')
module.exports = () => {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })

  const config = {
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
    swcMinify: true,
    experimental: {
      webpackBuildWorker: true,
    },
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
        { protocol: 'https', hostname: 'scdn.co' },
        { protocol: 'https', hostname: 'mosaic.scdn.co' },
        { protocol: 'https', hostname: 'images234-focus-opensocial.googleusercontent.com' },
        { protocol: 'https', hostname: 'scontent.cdninstagram.com' },
        { protocol: 'https', hostname: 'scontent-akl1-1.cdninstagram.com' },
      ],
    },
    trailingSlash: false,
    // productionBrowserSourceMaps: true,
    reactStrictMode: false,
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    typescript: {
      ignoreBuildErrors: true,
    },
    redirects,
  }
  const plugins = [withBundleAnalyzer]
  return plugins.reduce((acc, next) => next(acc), config)
}
