import { BreadcrumbJsonLd, NextSeo, ArticleJsonLd } from 'next-seo'

interface SEO {
  frontMatter: any
  datePostedISO: string
  slug: string
}
function Education_MadeToOrder_SEO({ frontMatter, datePostedISO, slug }: SEO) {
  return (
    <>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Education',
            item: 'https://pixelbakery.com/education',
          },
          {
            position: 2,
            name: 'Tutorials',
            item: 'https://pixelbakery.com/education#madeToOrder',
          },
          {
            position: 3,
            name: `${frontMatter.title}`,
            item: `https://pixelbakery.com/education/tutorials/${slug}`,
          },
        ]}
      />
      <NextSeo
        title={`${frontMatter.title}`}
        description={`${frontMatter.excerpt}`}
        canonical={`https://pixelbakery.com/education/tutorials/${slug}`}
        openGraph={{
          url: `https://pixelbakery.com/education/tutorials/${slug}`,
          title: `${frontMatter.title}`,
          type: 'article',
          description: `${frontMatter.excerpt}`,
          article: {
            publishedTime: `${datePostedISO}`,
            tags: [`${frontMatter.category}`],
          },
          images: [
            {
              url: `${frontMatter.coverImage}`,
              alt: `${frontMatter.title} written by ${frontMatter.author.name}`,
            },
          ],
        }}
      />
      <ArticleJsonLd
        url={`https://pixelbakery.com/education/tutorials/${slug}`}
        title={`${frontMatter.title}`}
        images={[`${frontMatter.coverImage}`]}
        datePublished={`${datePostedISO}`}
        authorName={[
          {
            name: `${frontMatter.author.name}`,
            url: `${frontMatter.author.url}`,
          },
        ]}
        description={`${frontMatter.excerpt}`}
        publisherName={'Pixel Bakery'}
      />
    </>
  )
}

export default Education_MadeToOrder_SEO
