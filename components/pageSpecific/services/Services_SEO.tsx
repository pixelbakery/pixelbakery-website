import { NextSeo, BreadcrumbJsonLd } from 'next-seo'
import { CapitalizeWord, SpacesToDashes } from '@lib/helpers'
type Props = {
  serviceName: string
  description: string
  path: string
}
function Services_SEO({ serviceName, path, description }: Props) {
  return (
    <>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Services',
            item: 'https://pixelbakery.com/services',
          },
          {
            position: 2,
            name: `${CapitalizeWord(serviceName)} `,
            item: `https://pixelbakery.com/services/${path}`,
          },
        ]}
      />
      <NextSeo
        title={`${CapitalizeWord(serviceName)} | Services`}
        description={`${description}`}
        canonical={`https://pixelbakery.com/services/${path}`}
        openGraph={{
          url: `https://pixelbakery.com/services/${path}`,
          title: `${CapitalizeWord(serviceName)} | Services`,
          description:
            'We specialize in 2D and 3D animation, motion graphics, stop motion, and 3D modeling',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
              width: 1200,
              height: 900,
              alt: `${description}`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-office.jpg`,
              width: 1080,
              height: 810,
              alt: `${description}`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-samee-dan-1200x900.png`,
              width: 1080,
              height: 810,
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
        }}
      />
    </>
  )
}

export default Services_SEO
