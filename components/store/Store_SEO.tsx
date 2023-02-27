import { NextSeo } from 'next-seo'

function Store_SEO() {
  return (
    <NextSeo
      title='Store – Pixel Bakery'
      description={`Freshly baked every morning. Come check out some of the things that you can put on and/or around your body.`}
      canonical={`https://pixelbakery.com/store`}
      openGraph={{
        url: `https://pixelbakery.com/store`,
        title: 'Store',
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
            alt: `Pixel Bakery Design Studio (PBDS) is a multidisciplinary production studio focused on animation, animated explainer videos, motion design, and commercial film production`,
          },
        ],
        description:
          'Pixel Bakery is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
      }}
    />
  )
}

export default Store_SEO
