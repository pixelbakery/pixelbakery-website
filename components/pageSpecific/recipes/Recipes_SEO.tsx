import { NextSeo } from 'next-seo'

const Recipes_SEO = () => {
  return (
    <NextSeo
      title="Mom's Recipes"
      description={
        'Sometimes we say smart things, and sometimes we have things we want to say. You can find all those things here.'
      }
      canonical='https://pixelbakery.com/recipes'
      openGraph={{
        url: `https://pixelbakery.com/recipes`,
        title: "Pixel Bakery – Mom's Recipes",
        description:
          'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
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
export default Recipes_SEO
