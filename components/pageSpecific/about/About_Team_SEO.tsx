import { NextSeo, BreadcrumbJsonLd, SocialProfileJsonLd } from 'next-seo'
import type { PersonWithFilePath } from '@/types/people'




interface Props {
  frontMatter: PersonWithFilePath
  slug: string
}

const About_Team_SEO = ({ frontMatter, slug }: Props) => {
  const [firstName, lastName] = frontMatter.name.split(' ')

  // Collect social URLs
  const socialUrls = frontMatter.socials?.map((s) => s.url) ?? []

  // Prepare the description
  const description = frontMatter.excerpt

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
            name: frontMatter.name,
            item: `https://pixelbakery.com/about/${slug}`,
          },
        ]}
      />
      <SocialProfileJsonLd
        type='Person'
        name={frontMatter.name}
        url={`https://pixelbakery.com/about/${slug}`}
        sameAs={socialUrls}
      />
      <NextSeo
        title={`${frontMatter.name} – ${frontMatter.title} | Team`}
        description={description}
        canonical={`https://pixelbakery.com/about/${slug}`}
        openGraph={{
          title: `${frontMatter.name} – ${frontMatter.title}`,
          description,
          url: `https://pixelbakery.com/about/${slug}`,
          type: 'profile',
          profile: {
            firstName,
            lastName,
            gender: frontMatter.pronoun,
          },
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.headshotFun}`,
              alt: `Pixel Bakery Design Studio funny headshot for ${frontMatter.name}, ${frontMatter.title}`,
              width: 1280,
              height: 1920,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.headshotSerious}`,
              alt: `Pixel Bakery Design Studio serious headshot for ${frontMatter.name}, ${frontMatter.title}`,
              width: 720,
              height: 980,
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.headshotSmiling}`,
              alt: `Pixel Bakery Design Studio smiling headshot for ${frontMatter.name}, ${frontMatter.title}`,
              width: 720,
              height: 980,
            },
          ],
        }}
      />
    </>
  )
}

export default About_Team_SEO
