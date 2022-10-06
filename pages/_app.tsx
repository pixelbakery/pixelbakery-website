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
import * as fbq from '../lib/fpixel'
import { useEffect } from 'react'
import Script from 'next/script'
const client = new QueryClient()
import * as gtag from '../lib/gtag'
import NextSEO_LocalBusiness from '@parts/NextSEO_LocalBusiness'
import NextSEO_DefaultSEO from '@parts/NextSEO_DefaultSEO'
import { gtmVirtualPageView } from '@lib/gtag'

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

      case path === '/email-generator-results*':
        return LayoutBlank()

      case path.startsWith('/store'):
        return LayoutWithoutNav()

      default:
        return LayoutWithNav()
    }
  }

  // Figure out which layout to use and build the page
  const router = useRouter()
  const path = router.pathname
  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: (pageProps as any).page || null,
      url: router.pathname,
    }

    gtmVirtualPageView(mainDataLayer)
  }, [pageProps])

  useEffect(() => {
    // This pageview only triggers the first time (it's important for Pixel to have real information)
    fbq.pageview()

    const handleRouteChange = (url) => {
      fbq.pageview()
      gtag.pageview(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <NextSEO_LocalBusiness />
      <NextSEO_DefaultSEO />
      <Script id='google-tag-manager' strategy='afterInteractive'>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PC8M8GG');`}
      </Script>
      {/* Global Site Code Pixel - Facebook Pixel */}
      <Script
        id='fb-pixel'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', ${fbq.FB_PIXEL_ID});
          `,
        }}
      />
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy='afterInteractive'
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id='gtag-init'
        strategy='afterInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <QueryClientProvider client={client}>{getLayout(path)}</QueryClientProvider>
    </>
  )
}

export default MyApp
