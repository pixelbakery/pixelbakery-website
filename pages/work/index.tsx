import Work_Services from '@work/Work_Services'
import Work_Portfolio from '@work/Work_Portfolio'
import Work_Clients from '@work/Work_Clients'
import { caseStudyFilePaths, CASESTUDIES_PATH } from '@lib/mdxUtils'
import fs from 'fs'
import path from 'path'
import dynamic from 'next/dynamic'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'))

import Main from '@parts/Main'
import matter from 'gray-matter'
import { NextSeo } from 'next-seo'

const Work = ({ allCaseStudies }) => {
  return (
    <Main>
      <NextSeo
        title='Our Work'
        description={`We do a few things and we do it well. we're like a scalpel; we operate with precision and intent. But, like, keyframes instead of open heart surgery.`}
        openGraph={{
          url: `https://pixelbakery.com/work`,
          title: 'Our Work',
          images: [
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
          ],
          description:
            'Pixel Bakery is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
        }}
      />
      <PageHeader_VarH header='What We Make' subheader='knead the dough, baby' />
      <Work_Services />
      <Work_Portfolio allCaseStudies={allCaseStudies} />

      <Work_Clients />
    </Main>
  )
}
export default Work

export function getStaticProps() {
  const allCaseStudies = caseStudyFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(CASESTUDIES_PATH, filePath))
      const { content, data } = matter(source)

      return {
        content,
        data,
        filePath,
      }
    })
    .filter((cs) => cs.data.active)
    .sort((cs1, cs2) => (cs1.data.date > cs2.data.date ? -1 : 1))

  return { props: { allCaseStudies } }
}
