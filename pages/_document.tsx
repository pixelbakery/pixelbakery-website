import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
// import Nav from '../components/Navigation'
// import Footer from '../components/footer/Footer'
export const GA_ANALYTICS_MEASUREMENT_ID = 'PC8M8GG'
const isProd = process.env.NODE_ENV === 'production'
import { DefaultSeo } from 'next-seo'
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
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
            url: 'https://pixelbakery.com/',
            site_name: 'Pixel Bakery Design Studio',
          }}
        />
        <Head>
          {isProd && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ANALYTICS_MEASUREMENT_ID}`}
              />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ANALYTICS_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          )}
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
