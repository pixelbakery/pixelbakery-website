import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import {
  Layout__HasNav,
  Layout__NavMobile,
  Layout__NoNav,
  Layout__Blank,
} from '../components/parts/Layout'
import { QueryClient, QueryClientProvider } from 'react-query'
import '@styles/globals.css'
import '@styles/typography.css'
import ReactGA from 'react-ga4'

ReactGA.initialize('your GA measurement id')
ReactGA.send('pageview')

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const LayoutWithNav = () => {
    return (
      <Layout__HasNav>
        <Component {...pageProps} />
      </Layout__HasNav>
    )
  }
  const LayoutWithoutNav = () => {
    return (
      <Layout__NoNav>
        <Component {...pageProps} />
      </Layout__NoNav>
    )
  }

  const LayoutHambOnly = () => {
    return (
      <Layout__NavMobile>
        <Component {...pageProps} />
      </Layout__NavMobile>
    )
  }
  const LayoutBlank = () => {
    return (
      <Layout__Blank>
        <Component {...pageProps} />
      </Layout__Blank>
    )
  }

  // Define which pages get which specific layout
  const getLayout = (path) => {
    switch (true) {
      case path === '/':
        return LayoutHambOnly()
        break
      case path === '/email-generator-results*':
        return LayoutBlank()
        break
      case path.startsWith('/store'):
        return LayoutWithoutNav()
        break
      default:
        return LayoutWithNav()
        break
    }
  }

  // Figure out which layout to use and build the page
  const router = useRouter()
  const path = router.pathname
  return <QueryClientProvider client={client}>{getLayout(path)}</QueryClientProvider>
}

export default MyApp
