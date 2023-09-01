import { NextSeo, BreadcrumbJsonLd } from 'next-seo'

const Services_SEO_VideoProduction = () => {
  return (
    <>
      <NextSeo
        title={`Video Production | Services`}
        description={`We use video production to create genuine storytelling. TV commercials, YouTube ads, company highlight videos, social media content - you name it.`}
        canonical={`https://pixelbakery.com/services/video-production`}
        openGraph={{
          url: `https://pixelbakery.com/services/video-production`,
          title: `Video Production | Services`,
          description:
            'We use video production to create genuine storytelling. TV commercials, YouTube ads, company highlight videos, social media content - you name it.',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_videoProduction_800x800.jpg`,
              width: 800,
              height: 800,
              alt: `Pixel Bakery: Video production can include TV commercials, YouTube pre-roll ads, company highlight videos, social media videos, and way more.`,
              type: 'image/jpeg',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_videoProduction_800x600.jpg`,
              width: 800,
              height: 600,
              alt: `Pixel Bakery: Video production can include TV commercials, YouTube pre-roll ads, company highlight videos, social media videos, and way more.`,
              type: 'image/jpeg',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services_videoProduction_1280x720.jpg`,
              width: 1280,
              height: 720,
              alt: 'Pixel Bakery: Video production can include TV commercials, YouTube pre-roll ads, company highlight videos, social media videos, and way more.',
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Services',
            item: 'https://pixelbakery.com/services',
          },
          {
            position: 2,
            name: `Video Production`,
            item: `https://pixelbakery.com/services/video-production`,
          },
        ]}
      />
      {/* <ProductJsonLd
        productName='Video Production'
        images={[
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_videoProduction_800x800.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_videoProduction_800x600.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_videoProduction_1280x720.jpg`,
        ]}
        description='Video production can include TV commercials, YouTube pre-roll ads, company highlight videos, social media videos, and way more.'
        offers={[
          {
            price: 'Contact for Pricing',
            // priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: 'https://pixelbakery.com/services/video-production',
            seller: {
              name: 'Pixel Bakery',
            },
          },
        ]}
      /> */}
    </>
  )
}

export default Services_SEO_VideoProduction
