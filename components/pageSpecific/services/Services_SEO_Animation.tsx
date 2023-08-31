import { NextSeo, BreadcrumbJsonLd, ProductJsonLd } from 'next-seo'

const Services_SEO_Animation = () => {
  return (
    <>
      <NextSeo
        title={`Animation & Motion Graphics | Services`}
        description={`We create captivating motion graphics for your brand. Animation is a great marketing tool that can be used to engage and entertain your audience.`}
        canonical={`https://pixelbakery.com/services/animation`}
        openGraph={{
          url: `https://pixelbakery.com/services/animation`,
          title: `Animation & Motion Graphics | Services`,
          description:
            'We create captivating motion graphics for your brand. Animation is a great marketing tool that can be used to engage and entertain your audience.',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_animation_800x800.jpg`,
              width: 800,
              height: 800,
              alt: `We create captivating motion graphics for your brand. Animation is a great marketing tool that can be used to engage and entertain your audience.`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_animation_800x600.jpg`,
              width: 800,
              height: 600,
              alt: `We create captivating motion graphics for your brand. Animation is a great marketing tool that can be used to engage and entertain your audience.`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services_animation_1280x720.jpg`,
              width: 1280,
              height: 720,
              alt: 'We create captivating motion graphics for your brand. Animation is a great marketing tool that can be used to engage and entertain your audience.',
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
            name: `Animation & Motion Graphics`,
            item: `https://pixelbakery.com/services/animation`,
          },
        ]}
      />
      <ProductJsonLd
        productName='Animation & Motion Graphics'
        images={[
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_animation_800x800.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_animation_800x600.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_animation_1280x720.jpg`,
        ]}
        description='We create captivating motion graphics for your brand. Animation is a great marketing tool that can be used to engage and entertain your audience.'
        offers={[
          {
            price: 'Contact for Pricing',
            // priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: 'https://pixelbakery.com/services/animation',
            seller: {
              name: 'Pixel Bakery',
            },
          },
        ]}
      />
    </>
  )
}

export default Services_SEO_Animation
