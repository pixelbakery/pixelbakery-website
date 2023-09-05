import { NextSeo, BreadcrumbJsonLd } from 'next-seo'

const Services_SEO_EmergingMedia = () => {
  return (
    <>
      <NextSeo
        title={`Emerging Media | Services`}
        description={`Artificial reality, projection mapping, virtual reality, holograms, Why not? The world is evolving and so should your marketing strategy.`}
        canonical={`https://pixelbakery.com/services/emerging-media`}
        openGraph={{
          url: `https://pixelbakery.com/services/emerging-media`,
          title: `Emerging Media | Services`,
          description:
            'Artificial reality, projection mapping, virtual reality, holograms, Why not? The world is evolving and so should your marketing strategy.',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_emergingMedia_800x800.jpg`,
              width: 800,
              height: 800,
              alt: `Artificial reality, projection mapping, virtual reality, holograms, Why not? The world is evolving and so should your marketing strategy.`,
              type: 'image/jpeg',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_emergingMedia_800x600.jpg`,
              width: 800,
              height: 600,
              alt: `Artificial reality, projection mapping, virtual reality, holograms, Why not? The world is evolving and so should your marketing strategy.`,
              type: 'image/jpeg',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_emergingMedia_1280x720.jpg`,
              width: 1280,
              height: 720,
              alt: 'Artificial reality, projection mapping, virtual reality, holograms, Why not? The world is evolving and so should your marketing strategy.',
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
            name: `Emerging Media`,
            item: `https://pixelbakery.com/services/emerging-media`,
          },
        ]}
      />
      {/* <ProductJsonLd
        productName='Emerging Media'
        images={[
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_emergingMedia_800x800.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_emergingMedia_800x600.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_emergingMedia_1280x720.jpg`,
        ]}
        description='Artificial reality, projection mapping, virtual reality, holograms, Why not? The world is evolving and so should your marketing strategy.'
        offers={[
          {
            price: 'Contact for Pricing',
            // priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: 'https://pixelbakery.com/services/emerging-media',
            seller: {
              name: 'Pixel Bakery',
            },
          },
        ]}
      /> */}
    </>
  )
}

export default Services_SEO_EmergingMedia
