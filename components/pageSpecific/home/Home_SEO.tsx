import { NextSeo } from 'next-seo'

function Home_SEO() {
  return (
    <NextSeo
      title='Pixel Bakery - Animation, Video, and Animated Explainers'
      description={
        'Pixel Bakery is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, and video production.'
      }
      canonical={`https://pixelbakery.com`}
      openGraph={{
        url: `https://pixelbakery.com`,
        title: 'Pixel Bakery, an Animation and Video Production Studio',

        images: [
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
            width: 1200,
            height: 900,
            alt: 'Pixel Bakery Design Studio is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
          },
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-office.jpg`,
            width: 1080,
            height: 810,
            alt: 'Pixel Bakery Design Studio is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
          },
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-samee-dan-1200x900.png`,
            width: 1080,
            height: 810,
            alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
          },
        ],
        description:
          'Pixel Bakery is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, and video production.',
      }}
    />
  )
}

export default Home_SEO
