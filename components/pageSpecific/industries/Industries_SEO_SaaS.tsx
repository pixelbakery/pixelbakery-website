import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
const Industries_SEO_SaaS = () => {
  return (
    <>
      <NextSeo
        title='Video Production for SaaS Companies'
        description={`Elevate SaaS companies with animation and video, enhancing communication, brand recognition, user experience, and growth.`}
        canonical={`https://pixelbakery.com/industries/saas-video-production`}
        openGraph={{
          url: `https://pixelbakery.com/industries/saas-video-production`,
          title: 'Video Production for SaaS Companies',
          description: `Elevate SaaS companies with animation and video, enhancing communication, brand recognition, user experience, and growth.`,
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
            name: `SaaS & Startup Video Production`,
            item: `https://pixelbakery.com/industries/saas-video-production`,
          },
        ]}
      />
    </>
  )
}

export default Industries_SEO_SaaS
