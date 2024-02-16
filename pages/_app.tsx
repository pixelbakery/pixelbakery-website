import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '@styles/globals.css'
import '@styles/typography.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import ReactGA from 'react-ga4'

import localFont from 'next/font/local'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

// eslint-disable-next-line no-unused-vars
const Rachel = localFont({
  src: [
    {
      path: '../public/fonts/RachelDempsey/Dempsey-Regular.woff2',
      weight: '400', // font-semibold
      style: 'normal',
    },
  ],
  variable: '--font-rachel',
})

//future self: leave this as a function and not a const
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Figure out which layout to use and build the page

  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string)
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <SpeedInsights />
    </>
  )
}
