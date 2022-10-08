import { NextSeo } from 'next-seo'

const Careers_SEO = () => {
  return (
    <NextSeo
      title='Careers'
      description={` We’re a motion-focused creative shop, meaning while our most frequently requested
              services are in the areas of animation, videography, and web design, we basically do
              it all – from production on animated series in LA, to rebrands for local startups, to
              print design to regional nonprofits. We are producers and we are creatives, and at the
              end of the day we find our happiness and fulfillment from making great creative that
              touches lives.`}
      canonical={`https://pixelbakery.com/careers`}
      openGraph={{
        url: `https://pixelbakery.com/careers`,
        title: 'Careers',
        description: ` We’re a motion-focused creative shop, meaning while our most frequently requested
              services are in the areas of animation, videography, and web design, we basically do
              it all – from production on animated series in LA, to rebrands for local startups, to
              print design to regional nonprofits. We are producers and we are creatives, and at the
              end of the day we find our happiness and fulfillment from making great creative that
              touches lives.`,
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
            width: 1200,
            height: 900,
            alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
          },
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-office.jpg`,
            width: 1080,
            height: 810,
            alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
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
  )
}
export default Careers_SEO
