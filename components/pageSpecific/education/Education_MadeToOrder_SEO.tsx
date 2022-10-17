import { BreadcrumbJsonLd, NextSeo, ArticleJsonLd, VideoJsonLd } from 'next-seo'

interface SEO {
  frontMatter: any
  datePostedISO: string
  slug: string
}
function Education_MadeToOrder_SEO({ frontMatter, datePostedISO, slug }: SEO) {
  const str = frontMatter.video
  const removeFirst = str
    .replace('https://youtu.be/', '')
    .replace('https://youtube.com/watch?v=', '')

  return (
    <>
      <VideoJsonLd
        name={`${frontMatter.title}`}
        description={frontMatter.excerpt}
        // contentUrl='http://player.vimeo.com/video123.mp4'
        embedUrl={`http://www.youtube.com/${removeFirst}`}
        uploadDate={`${datePostedISO}`}
        thumbnailUrls={[`${process.env.NEXT_PUBLIC_IMG_PREFIX}${frontMatter.coverImage}.jpg`]}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Education',
            item: 'https://pixelbakery.com/education',
          },
          {
            position: 2,
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
