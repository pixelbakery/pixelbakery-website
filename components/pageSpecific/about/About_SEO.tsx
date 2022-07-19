import { NextSeo } from 'next-seo'

function About_SEO() {
  return (
    <NextSeo
      title='About'
      description={
        'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.'
      }
      openGraph={{
        url: `https://pixelbakery.com/about`,
        images: [
          {
            url: `https://cdn.pixelbakery.com/img/pixelbakery-thumbnail.jpg`,
            alt: `Pixel Bakery Design Studio (PBDS) is a multi-disciplinary production studio focused on animation, motion design, and commercial film production`,
          },
        ],
        title: 'About',
        description:
          'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
      }}
    />
  )
}
export default About_SEO
