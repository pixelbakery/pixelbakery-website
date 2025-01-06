import '@styles/globals.css'
import '@styles/fonts'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { SpeedInsights } from '@vercel/speed-insights/next'
import PlausibleProvider from 'next-plausible'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

//future self: leave this as a function and not a const
export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <>
      <PlausibleProvider
        domain='pixelbakery.com'
        trackOutboundLinks
        trackLocalhost={process.env.NODE_ENV !== 'production'}
        selfHosted
        customDomain='https://analytics.jordy.world'
        enabled
      >
        {getLayout(<Component {...pageProps} />)}
        <SpeedInsights />
      </PlausibleProvider>
    </>
  )
}
