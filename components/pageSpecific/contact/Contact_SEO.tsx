import { NextSeo } from 'next-seo'

function Contact_SEO() {
  return (
    <NextSeo
      title='Contact Us – Let’s Talk About Animation and Video Production'
      description={`Come visit, email, call, stalk, harass, admire, or hang out with us. We love other humans. Fill out the contact form below to get in touch with us directly.`}
      canonical={`https://pixelbakery.com/contact`}
      openGraph={{
        url: `https://pixelbakery.com/contact`,
        title: 'Contact Us – Come Vibe with Us',
        description:
          'Pixel Bakery is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
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
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-samee-dan-1200x900.png`,
            width: 1080,
            height: 810,
            alt: 'Danny Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
          },
        ],
      }}
    />
  )
}

export default Contact_SEO
