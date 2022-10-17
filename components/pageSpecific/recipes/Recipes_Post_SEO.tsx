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
        canonical={`https://pixelbakery.com/recipes/${slug}`}
        openGraph={{
          url: `https://pixelbakery.com/recipes/${slug}`,
          title: `${frontMatter.title}`,
          type: 'article',
          description: `${frontMatter.excerpt}`,
          article: {
            publishedTime: `${datePostedISO}`,
            tags: frontMatter.tags,
            authors: [`https://pixelbakery.com/about/${frontMatter.author.slug}`],
          },
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`,
              alt: `${frontMatter.title} written by ${frontMatter.author.name}`,
            },
          ],
        }}
      />
      <ArticleJsonLd
        url={`https://pixelbakery.com/recipes/${slug}`}
        title={` ${frontMatter.title}`}
        images={[`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}`]}
        datePublished={`${datePostedISO}`}
        authorName={[
          {
            name: `${frontMatter.author.name}`,
            url: `https://pixelbakery.com/about/${frontMatter.author.slug}`,
          },
        ]}
        description={`${frontMatter.excerpt}`}
      />
    </>
  )
}
export default Recipes_Post_SEO
