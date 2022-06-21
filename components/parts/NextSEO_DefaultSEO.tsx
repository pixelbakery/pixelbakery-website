import { DefaultSeo } from 'next-seo'

function NextSEO_DefaultSEO() {
  return (
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
      }}
    />
  )
}

export default NextSEO_DefaultSEO
