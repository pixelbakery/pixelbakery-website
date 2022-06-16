import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

import NextSEO_LocalBusiness from '@parts/NextSEO_LocalBusiness'
import NextSEO_DefaultSEO from '@parts/NextSEO_DefaultSEO'
import { FB_PIXEL_ID } from '../lib/fpixel'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <NextSEO_LocalBusiness />
        <NextSEO_DefaultSEO />
        <Head>
          <noscript>
            <img
              height='1'
              width='1'
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        </Head>
        <body className='px-4 bg-egg max-w-screen overflow-x-hidden'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
