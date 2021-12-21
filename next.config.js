/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-undef
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  productionBrowserSourceMaps: true,
  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/store',
      //   permanent: false,
      // },
      {
        source: '/store/product',
        destination: '/store',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/work',
        permanent: true,
      },
      {
        source: '/work/case-studies',
        destination: '/work#projects',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'cdn.chec.io',
      'pixelbakery.co',
      'media.pixelbakery.com',
      'pixelbakery.com',
      'placeimg.com',
    ],
  },
}
