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
      {
        source: '/recipes/black-history-month-a-history-in-black-cinematography',
        destination: '/recipes/2021-black-history-month-cinematography',
        permanent: true,
      },
      {
        source: '/recipes/the-brenna-bode-starter-pack',
        destination: '/recipes/brenna-bode-starter-pack',
        permanent: true,
      },
      {
        source: '/recipes/pixel-bakery-goes-from-idea-to-solution-of-choice-in-motion-marketing',
        destination: '/recipes/pixel-bakery-motion-marketing',
        permanent: true,
      },
      {
        source:
          '/recipes/gmail-how-to-automatically-delete-or-archive-emails-after-a-certain-number-of-days',
        destination: '/recipes/gmail-automatically-delete-or-archive-emails',
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
