/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-undef
const React = require('react')
const { withPlugins, extend } = require('next-compose-plugins')
const baseConfig = require('./baseConfig.next.config.js')
const { default: next } = require('next')
// const withImageLoader =
//   process.env.NODE_ENV === 'production'
//     ? require('next-image-loader').withImageLoader
//     : (conf) => conf
const withImageLoader = require('next-image-loader').withImageLoader
const nextConfig = {
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
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
      // resolve: {
      //   fallback: {
      //     fs: false,
      //   },
      // },
    }),
      (config.resolve.alias = Object.assign({}, config.resolve.alias, {
        'react-pdf': 'react-pdf/dist/entry.noworker.js',
      }))
    return config
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
}

module.exports = extend(baseConfig).withPlugins(
  [withImageLoader],

  nextConfig,
)
