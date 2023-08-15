import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
const Industries_SEO_Nonprofits = () => {
  return (
    <>
      <NextSeo
        title='Video Production for Nonprofits'
        description={`Animation and video production offer nonprofits an opportunity to tell their stories in a compelling and visually captivating way.`}
        canonical={`https://pixelbakery.com/industries/nonprofit-video`}
        openGraph={{
          url: `https://pixelbakery.com/industries/nonprofit-video`,
          title: 'Video Production for Nonprofits',
          description: `Animation and video production offer nonprofits an opportunity to tell their stories in a compelling and visually captivating way.`,
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
            name: `Nonprofit Video Production`,
            item: `https://pixelbakery.com/industries/nonprofit-video`,
          },
        ]}
      />
    </>
  )
}

export default Industries_SEO_Nonprofits
