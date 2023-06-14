import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
const Industries_SEO_Agency = () => {
  return (
    <>
      <NextSeo
        title='Video Production for Agencies'
        description={`We work with advertising agencies, other production studios, marketing companies, and more to help bring their clients' vision to life.`}
        canonical={`https://pixelbakery.com/industries/agency-video-production`}
        openGraph={{
          url: `https://pixelbakery.com/industries/agency-video-production`,
          title: 'Video Production for Agencies',
          description: `We work with advertising agencies, other production studios, marketing companies, and more to help bring their clients' vision to life.`,
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
            name: `Agencies`,
            item: `https://pixelbakery.com/industries/agency-video-production`,
          },
        ]}
      />
    </>
  )
}

export default Industries_SEO_Agency
