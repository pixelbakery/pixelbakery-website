import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
// import Nav from '../components/Navigation'
// import Footer from '../components/footer/Footer'

import { DefaultSeo } from 'next-seo'

import { FB_PIXEL_ID } from '../lib/fpixel'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <DefaultSeo
          defaultTitle='Pixel Bakery'
          description={
            'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.'
          }
          openGraph={{
            type: 'website',
            description:
              'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            locale: 'en_IE',
            url: 'pixelbakery.com',
            site_name: 'Pixel Bakery Design Studio',
            images: [
              {
                url: 'https://pixelbakery.com/img/pixelbakery-thumbnail.jpg',
                width: 1200,
                height: 900,
                alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
              },
              {
                url: 'https://pixelbakery.com/img/pixel-bakery-office.jpeg',
                width: 1080,
                height: 810,
                alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
              },
              {
                url: 'https://pixelbakery.com/img/pixel-bakery-samee-dan-1200x900.png',
                width: 1080,
                height: 810,
                alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
              },
            ],
          }}
        />
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
