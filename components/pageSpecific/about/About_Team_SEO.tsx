import { NextSeo, BreadcrumbJsonLd } from 'next-seo'

import PropTypes from 'prop-types'

About_Team_SEO.propTypes = {
  video: PropTypes.string,
  client: PropTypes.string,
}

function About_Team_SEO({ firstName, lastName, frontMatter, slug }) {
  const objectArray = Object.entries(frontMatter.details)
  let details = [] as any
  objectArray.forEach(([key, value]) => {
    details[Object.keys(value).toString()] = Object.values(value).toString()
  })

  let desc = `The one and only, fantastically amazing ${frontMatter.name}. ${firstName} is Pixel Bakery's`
  if (details.personalAesthetic != undefined) {
    desc = `${desc} ${details.personalAesthetic}`
  }
  desc = `${desc} ${frontMatter.title}`

  if (details.leastFavoriteThing != undefined)
    desc += `, and they really hate ${details.leastFavoriteThing}`
  desc += '.'
  console.log(desc)
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
      <NextSeo
        title={`${frontMatter.name} – ${frontMatter.title} | Team`}
        description={desc}
        openGraph={{
          title: `${frontMatter.name} – ${frontMatter.title}`,
          description: `${desc}`,
          url: `https://pixelbakery.com/about/${frontMatter.slug}`,
          type: 'profile',
          profile: {
            firstName: firstName,
            lastName: lastName,
            gender: `${frontMatter.pronoun}`,
          },
          images: [
            {
              url: `https://cdn.pixelbakery.com/${frontMatter.headshotFun}`,
              alt: `Pixel Bakery Design Studio funny headshot for ${frontMatter.name}, ${frontMatter.title}`,
            },
            {
              url: `https://cdn.pixelbakery.com/${frontMatter.headshotSerious}`,
              alt: `Pixel Bakery Design Studio serious headshot for ${frontMatter.name}, ${frontMatter.title}`,
            },
            {
              url: `https://pixelbakery.com/${frontMatter.headshotSmiling}`,
              alt: `Pixel Bakery Design Studio smiling headshot for ${frontMatter.name}, ${frontMatter.title}`,
            },
          ],
        }}
      />
    </>
  )
}
export default About_Team_SEO
