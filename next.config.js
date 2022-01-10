/** @type {import('next').NextConfig} */
// eslint-disable-next-line no-undef
module.exports = {
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
        source: '/education/project-files',
        destination: '/education#project-files',
        permanent: true,
      },
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
        source: '/recipes/dan-the-man',
        destination: '/recipes/dan-the-man',
        permanent: true,
      },
      {
        source: '/recipes/list-of-video-image-formats-in-2021-supporting-alpha-channels',
        destination: 'recipes/video-image-formats-in-2021',
        permanent: true,
      },
      {
        source: '/recipes/black-history-month-a-history-in-black-animation',
        destination: '/recipes/black-history-month-animation',
        permanent: true,
      },
      {
        source:
          '/recipes/audrey-farnham-batter-late-than-never-a-non-traditional-pilgrimage-to-find-meaning-grit-and-satisfaction',
        destination: '/recipes/audrey-farnham-batter-late-than-never',
        permanent: true,
      },
      {
        source: '/recipes/black-history-month-a-history-in-black-photography',
        destination: '/recipes/black-history-month-photography',
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
