import { DefaultSeo } from 'next-seo'
import NextSEO_LocalBusiness from '@parts/NextSEO_LocalBusiness'

function NextSEO_DefaultSEO() {
  return (
    <>
      <DefaultSeo
        defaultTitle='Pixel Bakery Design Studio'
        description={
          'Pixel Bakery is a production studio focused on animation, motion design, video production, and product photography in Lincoln, Nebraska.'
        }
        openGraph={{
          type: 'website',
          description:
            'Pixel Bakery is a Nebraska-based multidisciplinary production studio focused on animation, motion design, and video production.',
          locale: 'en_IE',
          url: 'pixelbakery.com',
          siteName: 'Pixel Bakery Design Studio',
        }}
        facebook={{
          appId: '4076929202366682',
        }}
        twitter={{
          handle: '@pixelbakerylnk',
          site: '@pixelbakerylnk',
          cardType: 'summary_large_image',
        }}
      />
      <NextSEO_LocalBusiness />
    </>
  )
}

export default NextSEO_DefaultSEO
