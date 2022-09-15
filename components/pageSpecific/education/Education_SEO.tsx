import { NextSeo } from 'next-seo'
function Education_SEO() {
  return (
    <NextSeo
      noindex={false}
      title='Education'
      description={`Our success is a direct result of the people that we meet, whether that be our employees, our clients, or community members. As such, we believe in giving back to our community through education.`}
      openGraph={{
        url: `https://pixelbakery.com/education`,
        title: 'Pixel Bakery Design Studio',
        description: `Our success is a direct result of the people that we meet, whether that be our employees, our clients, or community members. As such, we believe in giving back to our community through education.`,
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

export default Education_SEO
