import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/typography.css'
import '../styles/globals.css'

import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as ga from '../lib/ga'
import { QueryClient, QueryClientProvider } from 'react-query'
import type { AppProps } from 'next/app'

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url as any)
    }
    return () => {}
  }, [])

  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  )
}

export default MyApp
