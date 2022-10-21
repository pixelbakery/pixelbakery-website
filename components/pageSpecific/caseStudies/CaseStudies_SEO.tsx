import { BreadcrumbJsonLd, NextSeo, VideoJsonLd } from 'next-seo'

function CaseStudies_SEO({ frontMatter, slug }) {
  const datePostedISO = new Date(frontMatter.date).toISOString()

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
        uploadDate={`${datePostedISO}`}
        thumbnailUrls={[
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${frontMatter.vimeoPreview}.jpg`,
        ]}
      />
      <NextSeo
        title={`${frontMatter.title} | Case Study`}
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
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/${frontMatter.vimeoPreview}.jpg`,
              alt: frontMatter.excerpt,
              type: 'image/jpeg',
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
