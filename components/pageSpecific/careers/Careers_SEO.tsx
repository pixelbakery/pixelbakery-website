import { NextSeo } from 'next-seo'

const Careers_SEO = () => {
  return (
    <NextSeo
      title='Careers'
      description={`Come join an awesome team of videographers, producers, and creatives. See all available job opportunities today.`}
      canonical={`https://pixelbakery.com/careers`}
      openGraph={{
        url: `https://pixelbakery.com/careers`,
        title: 'Careers',
        description: `Come join an awesome team of videographers, producers, and creatives.`,
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
      }}
    />
  )
}
export default Careers_SEO
