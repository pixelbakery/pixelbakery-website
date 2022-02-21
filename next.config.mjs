/**
 * @type {import('next').NextConfig}
 */
// const React = require('react')
import React from 'react'
// import CamelCaseToSentence from './data/work-client-list.js'

// const CamelCaseToSentence = require('@lib/helpers')
// const { redirects } = import('./lib/helpers')

// import micromatch from 'micromatch'
// eslint-disable-next-line no-undef
const nextConfig = {
  // webpack(config) {

  //   config.module.rules.push({
  //     test: /\.svg$/i,
  //     issuer: /\.[jt]sx?$/,
  //     use: ['@svgr/webpack'],
  //     // resolve: {
  //     //   fallback: {
  //     //     fs: false,
  //     //   },
  //     // },
  //   })

  //   return config
  // },
  productionBrowserSourceMaps: true,

  async redirects() {
    return [
      // {
      //   source: '/',
      //   destination: '/store',
      //   permanent: false,
      // },
      {
        source: '/futurebakers/',
        destination: '/careers/',
        permanent: true,
      },
      {
        source: '/futurebakers/apply',
        destination: '/careers/application',
        permanent: true,
      },
      {
        source: '/services/logo-animation',
        destination: '/logo-animation',
        permanent: true,
      },
      {
        source: '/logoanimation',
        destination: '/logo-animation',
        permanent: true,
      },
      {
        source: '/services/motion-mixer',
        destination: '/logo-animation',
        permanent: true,
      },

      {
        source: '/motion-mixer',
        destination: '/logo-animation',
        permanent: true,
      },
      {
        source: '/motionmixer',
        destination: '/logo-animation',
        permanent: true,
      },
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
}
export default nextConfig
