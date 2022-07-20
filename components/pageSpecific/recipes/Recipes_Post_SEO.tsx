import { BreadcrumbJsonLd, NextSeo, ArticleJsonLd } from 'next-seo'

function Recipes_Post_SEO({ datePostedISO, frontMatter, slug }) {
  return (
    <>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Recipes',
            item: 'https://pixelbakery.com/recipes',
          },
          {
            position: 2,
            name: `${frontMatter.title}`,
            item: `https://pixelbakery.com/recipes/${slug}`,
          },
        ]}
      />
      <NextSeo
        title={`${frontMatter.title} | Recipes`}
        description={`${frontMatter.excerpt}`}
        openGraph={{
          url: `https://pixelbakery.com/recipes/${slug}`,
          title: `${frontMatter.title}`,
          type: 'article',
          description: `${frontMatter.excerpt}`,
          article: {
            publishedTime: `${datePostedISO}`,
            tags: [`${frontMatter.categories[0]}`],
          },
          images: [
            {
              url: `https://cdn.pixelbakery.com${frontMatter.coverImage}`,
              alt: `${frontMatter.title} written by ${frontMatter.author}`,
            },
            {
              url: 'https://cdn.pixelbakery.com/img/pixelbakery-thumbnail.jpg',
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://cdn.pixelbakery.com/img/pixel-bakery-office.jpg',
              width: 1080,
              height: 810,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://cdn.pixelbakery.com/img/pixel-bakery-samee-dan-1200x900.png',
              width: 1080,
              height: 810,
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
            {
              url: `https://cdn.pixelbakery.com${frontMatter.coverImage}`,
              alt: `${frontMatter.title} written by ${frontMatter.author}`,
            },
          ],
        }}
      />
      <ArticleJsonLd
        url={`https://pixelbakery.com/recipes/${slug}`}
        title={frontMatter.title}
        images={frontMatter.coverImage}
        datePublished={`${datePostedISO}`}
        authorName={[`${frontMatter.author.name}`]}
        description={`${frontMatter.excerpt}`}
      />
    </>
  )
}
export default Recipes_Post_SEO
