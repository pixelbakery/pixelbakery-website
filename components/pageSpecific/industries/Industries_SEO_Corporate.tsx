import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
const Industries_SEO_Corporate = () => {
  return (
    <>
      <NextSeo
        title='Corporate Video Production'
        description={`Our specialty is telling brand stories. Wether that’s through animation or video production, there’s no better way to illuminate your brand than by bringing it to life with video.`}
        canonical={`https://pixelbakery.com/industries/corporate-video-production`}
        openGraph={{
          url: `https://pixelbakery.com/industries/corporate-video-production`,
          title: 'Corporate Video Production',
          description: `Our specialty is telling brand stories. Wether that’s through animation or video production, there’s no better way to illuminate your brand than by bringing it to life with video.`,
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
            name: `Corporate Video Production`,
            item: `https://pixelbakery.com/industries/corporate-video-production`,
          },
        ]}
      />
    </>
  )
}

export default Industries_SEO_Corporate
