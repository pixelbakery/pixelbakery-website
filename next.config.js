/**
 * @type {import('next').NextConfig}
 */

const React = require('react')
// const { withPlugins, extend } = require('next-compose-plugins')

const { redirects } = require('./redirects.config.js')
// const { default: next } = require('next')
// const withImageLoader =
//   process.env.NODE_ENV === 'production'
//     ? require('next-image-loader').withImageLoader
//     : (conf) => conf
const withImageLoader = require('next-image-loader').withImageLoader
module.exports = () => {
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  })
  const config = {
    swcMinify: true,
    // assetPrefix: isProd ? 'https://cdn.pixelbakery.com' : '',
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
    productionBrowserSourceMaps: true,
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

  const plugins = [withImageLoader, withBundleAnalyzer]
  return plugins.reduce((acc, next) => next(acc), config)
}
