import { NextSeo, BreadcrumbJsonLd } from 'next-seo'

const Services_SEO_CreativeStrategy = () => {
  return (
    <>
      <NextSeo
        title={`Creative Concepting & Strategy | Services`}
        description={`From discovery to delivery, we craft strategies and briefs at Pixel Bakery to align your message and achieve project goals.`}
        canonical={`https://pixelbakery.com/services/creative-strategy`}
        openGraph={{
          url: `https://pixelbakery.com/services/creative-strategy`,
          title: `Creative Concepting & Strategy | Services`,
          description:
            'From discovery to delivery, we craft strategies and briefs at Pixel Bakery to align your message and achieve project goals.',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_creativeStrategy_800x800.jpg`,
              width: 800,
              height: 800,
              alt: `From discovery to delivery, we craft strategies and briefs at Pixel Bakery to align your message and achieve project goals.`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_creativeStrategy_800x600.jpg`,
              width: 800,
              height: 600,
              alt: `From discovery to delivery, we craft strategies and briefs at Pixel Bakery to align your message and achieve project goals.`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services_creativeStrategy_1280x720.jpg`,
              width: 1280,
              height: 720,
              alt: 'From discovery to delivery, we craft strategies and briefs at Pixel Bakery to align your message and achieve project goals.',
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
            name: `Creative Concepting & Strategy`,
            item: `https://pixelbakery.com/services/creative-strategy`,
          },
        ]}
      />
      {/* <ProductJsonLd
        productName='Creative Concepting & Strategy'
        images={[
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_creativeStrategy_800x800.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_creativeStrategy_800x600.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_creativeStrategy_1280x720.jpg`,
        ]}
        description='From discovery to delivery, we craft strategies and briefs at Pixel Bakery to align your message and achieve project goals.'
        offers={[
          {
            price: 'Contact for Pricing',
            // priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: 'https://pixelbakery.com/services/creative-strategy',
            seller: {
              name: 'Pixel Bakery',
            },
          },
        ]}
      /> */}
    </>
  )
}

export default Services_SEO_CreativeStrategy
