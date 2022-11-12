import { NextSeo } from 'next-seo'

const About_SEO = () => {
  return (
    <NextSeo
      title='About'
      canonical={`https://pixelbakery.com/about`}
      description={`We're is a ragtag team of scrappy designers, animators, and producers. we create intentional moments for exciting people that share our passions.`}
      openGraph={{
        url: `https://pixelbakery.com/about`,
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
            alt: `Pixel Bakery Design Studio (PBDS) is a multidisciplinary production studio focused on animation, motion design, and commercial film production`,
          },
        ],
        title: 'About',
        description:
          'Pixel Bakery is a multidisciplinary production studio focused on animation, motion design, and commercial film production.',
      }}
    />
  )
}
export default About_SEO
