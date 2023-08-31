import { NextSeo } from 'next-seo'

const About_SEO = () => {
  return (
    <NextSeo
      title='About – Who We Are and What We Believe In'
      canonical={`https://pixelbakery.com/about`}
      description={`We're is a ragtag team of scrappy designers, animators, and producers. we create intentional moments for exciting people that share our passions.`}
      openGraph={{
        url: `https://pixelbakery.com/about`,
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
            alt: `Pixel Bakery Design Studio (PBDS) is a multidisciplinary production studio focused on animation, animated explainer videos, motion design, and commercial film production`,
          },
        ],
        title: 'About',
        description:
          'Pixel Bakery is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
      }}
    />
  )
}
export default About_SEO
