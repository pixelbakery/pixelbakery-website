import { NextSeo } from 'next-seo'

function Home_SEO() {
  return (
    <NextSeo
      title='Home'
      description={
        'Pixel Bakery is a multidisciplinary production studio focused on animation, motion design, and commercial film production.'
      }
      canonical={`https://pixelbakery.com`}
      openGraph={{
        url: `https://pixelbakery.com`,
        title: 'Pixel Bakery',

        images: [
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
            width: 1200,
            height: 900,
            alt: 'Pixel Bakery Design Studio is a multidisciplinary production studio focused on animation, motion design, and commercial film production.',
          },
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-office.jpg`,
            width: 1080,
            height: 810,
            alt: 'Pixel Bakery Design Studio is a multidisciplinary production studio focused on animation, motion design, and commercial film production.',
          },
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-samee-dan-1200x900.png`,
            width: 1080,
            height: 810,
            alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
          },
        ],
        description:
          'Pixel Bakery is a multidisciplinary production studio focused on animation, motion design, and commercial film production.',
      }}
    />
  )
}

export default Home_SEO
