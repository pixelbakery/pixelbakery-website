import { BreadcrumbJsonLd, NextSeo, VideoJsonLd } from 'next-seo'

function CaseStudies_SEO({ frontMatter, slug }) {
  const datePostedISO = new Date(frontMatter.date).toISOString()
  const tag1 = frontMatter.tags[0]
  const tag2 = frontMatter.tags[1]

  let projTitle = `${frontMatter.client}: ${frontMatter.title}`
  let metaTitle = `${frontMatter.client}: ${frontMatter.title}`

  if (projTitle.length + 3 + tag1.length <= 60) {
    metaTitle = `${projTitle} - ${tag1}`
  }
  if (projTitle.length + 3 + tag1.length + 3 + tag2.length <= 60) {
    metaTitle = `${projTitle} - ${tag1} & ${tag2}`
  }
  return (
    <>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Work',
            item: 'https://pixelbakery.com/work',
          },
          {
            position: 2,
            name: `${frontMatter.title}`,
            item: `https://pixelbakery.com/work/case-studies/${slug}`,
          },
        ]}
      />
      <VideoJsonLd
        name={`${frontMatter.client}: ${frontMatter.title}`}
        description={frontMatter.excerpt}
        // contentUrl='http://player.vimeo.com/video123.mp4'
        embedUrl={`http://player.vimeo.com/video/${frontMatter.vimeoID}`}
        uploadDate={`${datePostedISO}−06:00`}
        thumbnailUrls={[
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${frontMatter.vimeoPreview}.jpg`,
        ]}
      />
      <NextSeo
        title={`${metaTitle}`}
        description={frontMatter.excerpt}
        canonical={`https://pixelbakery.com/work/case-studies/${slug}`}
        openGraph={{
          url: `https://pixelbakery.com/work/case-studies/${slug}`,
          title: `${frontMatter.client} – ${frontMatter.title}`,
          description: `${frontMatter.excerpt} created for ${frontMatter.client}`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${frontMatter.vimeoPreview}.jpg`,
              alt: frontMatter.excerpt,
              type: 'image/jpeg',
              width: 854,
              height: 480,
            },
          ],
          siteName: 'Pixel Bakery Design Studio',
        }}
        twitter={{
          handle: '@pixelbakerylnk',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
    </>
  )
}
export default CaseStudies_SEO
