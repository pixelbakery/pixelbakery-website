import { NextSeo, BreadcrumbJsonLd, ProductJsonLd } from 'next-seo'

const Services_SEO_SocialMedia = () => {
  return (
    <>
      <NextSeo
        title={`Social Media Video Content | Services`}
        description={`Engage with your audience on their favorite platforms. We add animation, motion graphics, and videos to your social media channels.`}
        canonical={`https://pixelbakery.com/services/social-media`}
        openGraph={{
          url: `https://pixelbakery.com/services/social-media`,
          title: `Social Media Video Content | Services`,
          description:
            'Engage with your audience on their favorite platforms. We add animation, motion graphics, and videos to your social media channels.',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_socialMedia_800x800.jpg`,
              width: 800,
              height: 800,
              alt: `Engage with your audience on their favorite platforms. We add animation, motion graphics, and videos to your social media channels.`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_socialMedia_800x600.jpg`,
              width: 800,
              height: 600,
              alt: `Engage with your audience on their favorite platforms. We add animation, motion graphics, and videos to your social media channels.`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services_socialMedia_1280x720.jpg`,
              width: 1280,
              height: 720,
              alt: 'Engage with your audience on their favorite platforms. We add animation, motion graphics, and videos to your social media channels.',
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
            name: `Social Media Video Content`,
            item: `https://pixelbakery.com/services/social-media`,
          },
        ]}
      />
      <ProductJsonLd
        productName='Social Media Video Content'
        images={[
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_socialMedia_800x800.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_socialMedia_800x600.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_socialMedia_1280x720.jpg`,
        ]}
        description='Engage with your audience on their favorite platforms. We add animation, motion graphics, and videos to your social media channels.'
        offers={[
          {
            price: 'Contact for Pricing',
            // priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: 'https://pixelbakery.com/services/social-media',
            seller: {
              name: 'Pixel Bakery',
            },
          },
        ]}
      />
    </>
  )
}

export default Services_SEO_SocialMedia
