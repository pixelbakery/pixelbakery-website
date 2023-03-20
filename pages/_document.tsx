/* eslint-disable @next/next/no-img-element */
import { Html, Head, Main, NextScript } from 'next/document'

import { FB_PIXEL_ID } from '../lib/fpixel'

const MyDocument = () => {
  return (
    <Html lang='en-US'>
      <Head></Head>
      <body className='px-4 bg-egg max-w-screen overflow-x-hidden'>
        <noscript>
          <img
            height='1'
            width='1'
            alt='facebook auth'
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
          />
        </noscript>
        {/* <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-PC8M8GG'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument
