import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
const Industries_SEO_CPG = () => {
  return (
    <>
      <NextSeo
        title='Video Production for CPG Brands'
        description={`We love creating video content for Consumer Packaged Goods (CPG) companies to elevate their product marketing to the next level.`}
        canonical={`https://pixelbakery.com/industries/cpg-video-production`}
        openGraph={{
          url: `https://pixelbakery.com/industries/cpg-video-production`,
          title: 'Video Production for CPG Brands',
          description: `We love creating video content for Consumer Packaged Goods (CPG) companies to elevate their product marketing to the next level.`,
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
            name: `CPG Video Production`,
            item: `https://pixelbakery.com/industries/cpg-video-production`,
          },
        ]}
      />
    </>
  )
}

export default Industries_SEO_CPG
