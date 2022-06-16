import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

import NextSEO_LocalBusiness from '@parts/NextSEO_LocalBusiness'
import NextSEO_DefaultSEO from '@parts/NextSEO_DefaultSEO'
import { FB_PIXEL_ID } from '../lib/fpixel'
import { LocalBusinessJsonLd } from 'next-seo'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <LocalBusinessJsonLd
            type='ProfessionalService'
            id='https://pixelbakery.com'
            name='Pixel Bakery Design Studio'
            logo='https://pixelbakery.com/img/logos/initials/png/600x600px_transparent/pb_logo_initials_peach_onTransparent.png'
            description='A multi-disciplinary production studio based out of the midwest with an emphasis on animation, motion design, and commercial video production'
            url='https://pixelbakery.com'
            telephone='402-302-0323'
            address={{
              streetAddress: '2124 Y Street, Suite 122',
              addressLocality: 'Lincoln',
              addressRegion: 'NE',
              postalCode: '68503',
              addressCountry: 'US',
            }}
            geo={{
              latitude: '40.8247413',
              longitude: '-96.6904574',
            }}
            map={'https://g.page/pixelbakery?share'}
            legalName='Pixel Bakery LLC'
            images={[
              'https://pixelbakery.com/img/pixel-bakery-office.jpeg',
              'https://pixelbakery.com/img/pixel-bakery-samee-dan-1200x900.png',
              'https://pixelbakery.com/img/pixelbakery-mug-iloveyou.png',
              'https://pixelbakery.com/img/pixelbakery-thumbnail.jpg',
            ]}
            sameAs={[
              'https://www.linkedin.com/company/pixelbakery',
              'https://vimeo.com/pixelbakery',
              'https://twitch.tv/pixelbakery',
              'https://www.youtube.com/c/pixelbakery',
              'https://instagram.com/pixelbakery',
              'http://facebook.com/pixelbakerylnk',
              'https://www.pinterest.com/pixelbakerylnk/',
              'https://twitter.com/pixelbakerylnk',
              'https://github.com/pixelbakery',
              'https://dribbble.com/PixelBakeryLNK',
              'https://pixelbakery.medium.com',
              'https://www.tiktok.com/@pixelbakery',
              'https://www.behance.net/pixelbakerylnk',
            ]}
            openingHours={[
              {
                opens: '08:00',
                closes: '17:00',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              },
            ]}
          />

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
