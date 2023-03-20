import { NextSeo, BreadcrumbJsonLd, SocialProfileJsonLd } from 'next-seo'

const About_Team_SEO = ({ frontMatter, slug }) => {
  const [firstName, lastName] = frontMatter.name.split(' ')
  let list = []
  if (frontMatter.socials != undefined) {
    frontMatter.socials.forEach((s) => {
      // return console.log(Object.values(s).toString())
      list.push(Object.values(s).toString())
    })
  }

  const objectArray = Object.entries(frontMatter.details)
  let details = [] as any
  // eslint-disable-next-line no-unused-vars
  objectArray.forEach(([key, value]) => {
    details[Object.keys(value).toString()] = Object.values(value).toString()
  })

  let desc = `The amazing ${frontMatter.name}. ${firstName} is Pixel Bakery's`
  if (details.personalAesthetic != undefined) {
    desc = `${desc} ${details.personalAesthetic}`
  }
  desc = `${desc} ${frontMatter.title}`
  if (details.leastFavoriteThing != undefined)
    desc += `, and they really hate ${details.leastFavoriteThing.toLowerCase()}`
  else desc += `, and they're one of our favorite people ever`
  desc += '.'
  return (
    <>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'About',
            item: 'https://pixelbakery.com/about',
          },
          {
            position: 2,
            name: `${frontMatter.name}`,
            item: `https://pixelbakery.com/about/${slug}`,
          },
        ]}
      />
      <SocialProfileJsonLd
        type='Person'
        name={`${frontMatter.name}`}
        url={`https://pixelbakery.com/about/${slug}`}
        sameAs={list}
      />
      <NextSeo
        title={`${frontMatter.name} – ${frontMatter.title} | Team`}
        description={desc}
        canonical={`https://pixelbakery.com/about/${slug}`}
        openGraph={{
          title: `${frontMatter.name} – ${frontMatter.title}`,
          description: `${desc}`,
          url: `https://pixelbakery.com/about/${slug}`,
          type: 'profile',
          profile: {
            firstName: firstName,
            lastName: lastName,
            gender: `${frontMatter.pronoun}`,
          },
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.headshotFun}`,
              alt: `Pixel Bakery Design Studio funny headshot for ${frontMatter.name}, ${frontMatter.title}`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.headshotSerious}`,
              alt: `Pixel Bakery Design Studio serious headshot for ${frontMatter.name}, ${frontMatter.title}`,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.headshotSmiling}`,
              alt: `Pixel Bakery Design Studio smiling headshot for ${frontMatter.name}, ${frontMatter.title}`,
            },
          ],
        }}
      />
    </>
  )
}
export default About_Team_SEO
