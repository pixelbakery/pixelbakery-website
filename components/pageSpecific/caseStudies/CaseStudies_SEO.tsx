import { BreadcrumbJsonLd, NextSeo } from 'next-seo'

function CaseStudies_SEO({ frontMatter, slug }) {
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
      <NextSeo
        title={`${frontMatter.title} | Case Study`}
        description={frontMatter.excerpt}
        openGraph={{
          url: `https://pixelbakery.com/work/case-studies/${slug}`,
          title: `${frontMatter.title}`,
          description: frontMatter.excerpt,
          images: [
            {
              url: `https://cdn.pixelbakery.com/img/${frontMatter.vimeoPreview}.jpg`,
              alt: frontMatter.excerpt,
              type: 'image/jpeg',
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
              width: 1200,
              height: 900,
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
            {
              url: `https://cdn.pixelbakery.com/img/${frontMatter.vimeoPreview}.jpg`,
              alt: frontMatter.excerpt,
              type: 'image/jpeg',
            },
          ],
          site_name: 'Pixel Bakery Design Studio',
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
