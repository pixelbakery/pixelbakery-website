import { NextSeo } from 'next-seo'

function Onboarding_SEO() {
  return (
    <NextSeo
      title='Become a Client'
      description={`We know that trust is something that is earned over time. Our initial projects with our clients usually start small. This is a relationship after all, and it's important to us that both parties are happy and healthy.`}
      canonical={`https://pixelbakery.com/onboarding`}
      openGraph={{
        url: `https://pixelbakery.com/onboarding`,
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
        title: 'Become a Client',
        description: `We know that trust is something that is earned over time. Our initial projects with our clients usually start small. This is a relationship after all, and it's important to us that both parties are happy and healthy.`,
      }}
    />
  )
}

export default Onboarding_SEO
