import 'bootstrap-icons/font/bootstrap-icons.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import { QueryClient, QueryClientProvider } from 'react-query'
import * as ga from '../lib/ga'
import '../styles/globals.css'
import '../styles/typography.css'

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url as any)
    }
    TagManager.initialize({ gtmId: 'GTM-PC8M8GG' })
    return () => {}
  }, [])

  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
