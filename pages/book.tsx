import Onboarding_Calendly from '@onboarding/Onboarding_Calendly'
import { NextSeo } from 'next-seo'

function book() {
  return (
    <>
      <NextSeo
        title='Schedule Meeting'
        description={`Schedule either an in-person or virtual meeting with Pixel Bakery's leadership team`}
        canonical={`https://pixelbakery.com/book`}
        openGraph={{
          url: `https://pixelbakery.com`,
          title: 'Pixel Bakery',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is a multidisciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-office.jpg`,
              width: 1080,
              height: 810,
              alt: 'Pixel Bakery Design Studio is a multidisciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-samee-dan-1200x900.png`,
              width: 1080,
              height: 810,
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
          description: `Schedule either an in-person or virtual meeting with Pixel Bakery's leadership team`,
        }}
      />
      <Onboarding_Calendly className='pt-48 lg:pt-56' />
    </>
  )
}

export default book
