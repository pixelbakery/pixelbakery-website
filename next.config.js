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
  const withSentryConfig = require('@next/bundle-analyzer')(
    {
      // For all available options, see:
      // https://github.com/getsentry/sentry-webpack-plugin#options

      // Suppresses source map uploading logs during build
      silent: true,
      org: 'pixel-bakery',
      project: 'pixel-bakery-website',
    },
    {
      // For all available options, see:
      // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

      // Upload a larger set of source maps for prettier stack traces (increases build time)
      widenClientFileUpload: true,

      // Transpiles SDK to be compatible with IE11 (increases bundle size)
      transpileClientSDK: true,

      // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
      tunnelRoute: '/monitoring',

      // Hides source maps from generated client bundles
      hideSourceMaps: true,

      // Automatically tree-shake Sentry logger statements to reduce bundle size
      disableLogger: true,

      // Enables automatic instrumentation of Vercel Cron Monitors.
      // See the following for more information:
      // https://docs.sentry.io/product/crons/
      // https://vercel.com/docs/cron-jobs
      automaticVercelMonitors: true,
    },
  )

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
    // experimental: {
    //   webpackBuildWorker: true,
    // },
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
  const plugins = [withBundleAnalyzer, withSentryConfig]
  return plugins.reduce((acc, next) => next(acc), config)
}

// Injected content via Sentry wizard below

const { withSentryConfig } = require('@sentry/nextjs')

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,
    org: 'pixel-bakery',
    project: 'pixel-bakery-website',
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: '/monitoring',

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors.
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  },
)
