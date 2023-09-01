import { NextSeo, BreadcrumbJsonLd } from 'next-seo'

const Services_SEO_ProductPhotography = () => {
  return (
    <>
      <NextSeo
        title={`Product Photography | Services`}
        description={
          "Showcase your brand's essence with Nebraska's premier product photography. Capturing every detail to reflect your dedication."
        }
        canonical={`https://pixelbakery.com/services/product-photography`}
        openGraph={{
          url: `https://pixelbakery.com/services/product-photography`,
          title: `Product Photography | Services`,
          description:
            "Showcase your brand's essence with Nebraska's premier product photography. Capturing every detail to reflect your dedication.",
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_productPhotography_800x800.jpg`,
              width: 800,
              height: 800,
              alt: "Pixel Bakery: Showcase your brand's essence with Nebraska's premier product photography. Capturing every detail to reflect your dedication.",
              type: 'image/jpeg',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_productPhotography_800x600.jpg`,
              width: 800,
              height: 600,
              alt: "Pixel Bakery: Showcase your brand's essence with Nebraska's premier product photography. Capturing every detail to reflect your dedication.",
              type: 'image/jpeg',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services_productPhotography_1280x720.jpg`,
              width: 1280,
              height: 720,
              alt: "Pixel Bakery: Showcase your brand's essence with Nebraska's premier product photography. Capturing every detail to reflect your dedication.",
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
            name: `Product Photography`,
            item: `https://pixelbakery.com/services/product-photography`,
          },
        ]}
      />
      {/* <ProductJsonLd
        productName='Product Photography'
        images={[
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_productPhotography_800x800.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_productPhotography_800x600.jpg`,
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/services_productPhotography_1280x720.jpg`,
        ]}
        description="Showcase your brand's essence with Nebraska's premier product photography. Capturing every detail to reflect your dedication."
        offers={[
          {
            price: 'Contact for Pricing',
            // priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
            url: 'https://pixelbakery.com/services/product-photography',
            seller: {
              name: 'Pixel Bakery',
            },
          },
        ]}
      /> */}
    </>
  )
}

export default Services_SEO_ProductPhotography
