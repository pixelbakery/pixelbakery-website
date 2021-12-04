import 'bootstrap-icons/font/bootstrap-icons.css'
import '../styles/typography.css'
import '../styles/globals.css'
import TagManager from 'react-gtm-module'
import { CommerceContext } from '@chec/react-commercejs-hooks'

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
    TagManager.initialize({ gtmId: 'GTM-PC8M8GG' })
    return () => {}
  }, [])

  return (
    <CommerceContext debug publicKey={process.env.NEXT_PUBLIC_CHEC_PUBLIC_KEY}>
      <QueryClientProvider client={client}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </CommerceContext>
  )
}

export default MyApp
