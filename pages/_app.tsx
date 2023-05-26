import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Layout__HasNav, Layout__NavMobile, Layout__NoNav } from '../components/parts/Layout'
import '@styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import '@styles/typography.css'
import NextSEO_DefaultSEO from '@parts/NextSEO_DefaultSEO'
import ReactGA from 'react-ga4'

function App({ Component, pageProps }: AppProps) {
  const LayoutWithNav = () => {
    return (
      <Layout__HasNav>
        <Component {...pageProps} />
      </Layout__HasNav>
    )
  }
  const LayoutWithoutNav = () => {
    const { QueryClientProvider, QueryClient } = require('react-query')

    const client = new QueryClient()
    return (
      <QueryClientProvider client={client}>
        <Layout__NoNav>
          <Component {...pageProps} />
        </Layout__NoNav>
      </QueryClientProvider>
    )
  }

  const LayoutHambOnly = () => {
    return (
      <Layout__NavMobile>
        <Component {...pageProps} />
      </Layout__NavMobile>
    )
  }

  // Define which pages get which specific layout
  const getLayout = (path) => {
    switch (true) {
      case path === '/':
        return LayoutHambOnly()
      case path.startsWith('/store'):
        return LayoutWithoutNav()
      default:
        return LayoutWithNav()
    }
  }

  // Figure out which layout to use and build the page
  const router = useRouter()
  const path = router.pathname
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID)

  return (
    <>
      <NextSEO_DefaultSEO />
      {getLayout(path)}
      <Analytics />
    </>
  )
}

export default App
