import { NextSeo } from 'next-seo'

function Work_SEO() {
  return (
    <>
      <NextSeo
        title='Our Work - Animation and Video Production Case Studies'
        description={`We do a few things and we do it well. we're like a scalpel; we operate with precision and intent. But, like, keyframes instead of open heart surgery.`}
        canonical={`https://pixelbakery.com/work`}
        openGraph={{
          url: `https://pixelbakery.com/work`,
          title: 'Our Work',
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
            'Pixel Bakery is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
        }}
      />
    </>
  )
}
export default Work_SEO
