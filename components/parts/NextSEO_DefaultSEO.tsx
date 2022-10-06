import { DefaultSeo } from 'next-seo'

function NextSEO_DefaultSEO() {
  return (
    <DefaultSeo
      defaultTitle='Pixel Bakery Design Studio'
      description={
        'A multi-disciplinary production studio focused on animation, motion design, emerging media, and commercial film production.'
      }
      openGraph={{
        type: 'website',
        description:
          'A multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
        locale: 'en_IE',
        url: 'pixelbakery.com',
        site_name: 'Pixel Bakery Design Studio',
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
  )
}

export default NextSEO_DefaultSEO
