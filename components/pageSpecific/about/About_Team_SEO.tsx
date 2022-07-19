import { NextSeo, BreadcrumbJsonLd } from 'next-seo'

function About_Team_SEO({ firstName, lastName, frontMatter, slug }) {
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
        description={`${frontMatter.content}`}
        openGraph={{
          title: `${frontMatter.name} – ${frontMatter.title}`,
          description: `${frontMatter.content}`,
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
