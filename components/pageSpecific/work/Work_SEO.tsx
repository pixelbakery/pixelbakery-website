import { NextSeo, CollectionPageJsonLd } from 'next-seo'
import { CreativeWork } from 'next-seo/lib/types'

interface Props {
  allCaseStudies: any
}
function Work_SEO({ allCaseStudies }: Props) {
  let arr: CreativeWork[] = []
  allCaseStudies.forEach(
    (x: {
      data: { tags: any[]; client: any; title: any; excerpt: any; date: any; vimeoPreview: any }
      filePath: string
    }) => {
      let keywords = ''
      x.data.tags.map((tag) => {
        keywords += `${tag}, `
      })
      keywords = keywords.substring(0, keywords.length - 2)
      let temp = {
        name: `${x.data.client}: ${x.data.title}`,
        about: x.data.excerpt,
        datePublished: x.data.date,
        author: `Pixel Bakery Design Studio`,
        keywords: keywords,
        url: `https://pixelbakery.com/work/case-studies/${x.filePath.replace(/\.mdx?$/, '')}`,
        image: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${x.data.vimeoPreview}.jpg`,
        thumbnailUrl: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${x.data.vimeoPreview}.jpg`,
      }
      arr.push(temp)
    },
  )
  return (
    <>
      <CollectionPageJsonLd name='Pixel Bakery Case Studies' hasPart={arr} />
      <NextSeo
        title='Our Work - Animation and Video Production Case Studies'
        description={`We do a few things and we do it well. we're like a scalpel; we operate with precision and intent. But, like, keyframes instead of open heart surgery.`}
        canonical={`https://pixelbakery.com/work`}
        openGraph={{
          url: `https://pixelbakery.com/work`,
          title: 'Our Work',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-office.jpg`,
              width: 1080,
              height: 810,
              alt: 'Pixel Bakery Design Studio is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-samee-dan-1200x900.png`,
              width: 1080,
              height: 810,
              alt: 'Danny Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
          description:
            'Pixel Bakery is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
        }}
      />
    </>
  )
}
export default Work_SEO
