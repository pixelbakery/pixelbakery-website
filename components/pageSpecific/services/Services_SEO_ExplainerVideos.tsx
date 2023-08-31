import { NextSeo, BreadcrumbJsonLd, ProductJsonLd } from 'next-seo'

const Services_SEO_ExplainerVideos = () => {
  return (
    <>
      <NextSeo
        title={`Animated Explainer Videos | Services`}
        description={`We build custom, high-quality bespoke animated explainer videos to help brands showcase who they are. Quality visuals that resonate with your audiance.`}
        canonical={`https://pixelbakery.com/services/animated-explainer-videos`}
        openGraph={{
          url: `https://pixelbakery.com/services/animated-explainer-videos`,
          title: `Animated Explainer Videos | Services`,
          description:
            'We build custom, high-quality bespoke animated explainer videos to help brands showcase who they are. Quality visuals that resonate with your audiance.',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_animatedExplainers_800x800.jpg`,
              width: 800,
              height: 800,
              alt: `We build custom, high-quality bespoke animated explainer videos to help brands showcase who they are. Quality visuals that resonate with your audiance.`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_animatedExplainers_800x600.jpg`,
              width: 800,
              height: 600,
              alt: `We build custom, high-quality bespoke animated explainer videos to help brands showcase who they are. Quality visuals that resonate with your audiance.`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services_animatedExplainers_1280x720.jpg`,
              width: 1280,
              height: 720,
              alt: 'We build custom, high-quality bespoke animated explainer videos to help brands showcase who they are. Quality visuals that resonate with your audiance.',
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
            name: `Animated Explainer Videos`,
            item: `https://pixelbakery.com/services/animated-explainer-videos`,
          },
        ]}
      />
      <ProductJsonLd
        productName='Animated Explainer Videos'
        images={[
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_animatedExplainers_800x800.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_animatedExplainers_800x600.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_animatedExplainers_1280x720.jpg`,
        ]}
        description='We build custom, high-quality bespoke animated explainer videos to help brands showcase who they are. Quality visuals that resonate with your audiance.'
        offers={[
          {
            price: 'Contact for Pricing',
            // priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: 'https://pixelbakery.com/services/animated-explainer-videos',
            seller: {
              name: 'Pixel Bakery',
            },
          },
        ]}
      />
    </>
  )
}

export default Services_SEO_ExplainerVideos
