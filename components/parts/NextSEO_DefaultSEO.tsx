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
  )
}

export default NextSEO_DefaultSEO
