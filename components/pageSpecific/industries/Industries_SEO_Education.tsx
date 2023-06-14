import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
const Industries_SEO_Education = () => {
  return (
    <>
      <NextSeo
        title='Video Production for Education'
        description={`Animation plays a crucial role in the educational sector by bringing learning to life in a visually captivating and engaging way.`}
        canonical={`https://pixelbakery.com/industries/education-video-production`}
        openGraph={{
          url: `https://pixelbakery.com/industries/education-video-production`,
          title: 'Video Production for Education',
          description: `Animation plays a crucial role in the educational sector by bringing learning to life in a visually captivating and engaging way.`,
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
          ],
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Industries',
            item: 'https://pixelbakery.com/industries',
          },
          {
            position: 2,
            name: `Educational Video Production`,
            item: `https://pixelbakery.com/industries/education-video-production`,
          },
        ]}
      />
    </>
  )
}

export default Industries_SEO_Education
