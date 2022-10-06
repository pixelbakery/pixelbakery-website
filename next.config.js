/**
 * @type {import('next').NextConfig}
 */

const React = require('react')
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
              key: 'Permissions-Policy',
              value: 'camera=(); battery=(); geolocation=(); microphone=()',
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
    swcMinify: true,
    images: {
      formats: ['image/avif', 'image/webp'],
      dangerouslyAllowSVG: true,
      domains: [
        'cdn.chec.io',
        'pixelbakery.co',
        'media.pixelbakery.com',
        'cdn.pixelbakery.com',
        's3.us-east-2.amazonaws.com',
        's3.us-east-2.amazonaws.com/cdn.pixelbakery.com/',
        'https://cdn.pixelbakery.com.s3.us-east-2.amazonaws.com/',
        'pixelbakery.com',
        'placeimg.com',
        'scontent.cdninstagram.com',
        'scontent-ort2-2.cdninstagram.com',
        '*.cdninstagram.com',
        'scontent-akl1-1.cdninstagram.com',
        'i.scdn.co',
        '*.scdn.co',
        'scdn.co',
        'mosaic.scdn.co',
        'images234-focus-opensocial.googleusercontent.com',
        'scontent.cdninstagram.com',
        'scontent-akl1-1.cdninstagram.com',
      ],
    },
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
