import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import type { AppProps } from 'next/app'


const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={client}>
  <Component {...pageProps} />
  </QueryClientProvider>
}

export default MyApp
