import Onboarding_Calendly from '@onboarding/Onboarding_Calendly'
import { NextSeo } from 'next-seo'

const Book = () => {
  return (
    <>
      <Onboarding_Calendly className='pt-48 lg:pt-56' h1={true} />
      <NextSeo
        title={`Schedule A Meeting. Let's Get That Video Project Going`}
        description={`Let's talk about you and your project. Schedule either an in-person or virtual meeting with our leadership team.`}
        canonical={`https://pixelbakery.com/book`}
        openGraph={{
          url: `https://pixelbakery.com/book`,
          title: `Schedule A Meeting. Let's Get That Video Project Going`,
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
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
          description: `Let's talk about you and your project. Schedule either an in-person or virtual meeting with our leadership team.`,
        }}
      />
    </>
  )
}

export default Book
