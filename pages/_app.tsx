import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import '@fonts/fonts'
import '@styles/globals.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import ReactGA from 'react-ga4'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

//future self: leave this as a function and not a const
export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID as string)
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <>
      {getLayout(<Component {...pageProps} />)}
      <SpeedInsights />
    </>
  )
}
