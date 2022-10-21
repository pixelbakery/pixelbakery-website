// const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'))

import Work_Services from '@work/Work_Services'

import { caseStudyFilePaths, CASESTUDIES_PATH } from '@lib/mdxUtils'
import fs from 'fs'
import path from 'path'

import Main from '@parts/Main'
import matter from 'gray-matter'
import Work_SEO from '@work/Work_SEO'
import Work_Callout from '@work/Work_Callout'
import dynamic from 'next/dynamic'
import PageHeader_LoadingContent from '@pageHeaders/PageHeader_LoadingContent'

const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'), {
  loading: () => (
    <PageHeader_LoadingContent header='What We Make' subheader='knead the dough, baby' />
  ),
  ssr: false,
})
import Work_Portfolio from '@work/Work_Portfolio'
import Work_Clients from '@work/Work_Clients'
// const Work_Portfolio = dynamic(() => import('@work/Work_Portfolio'), { ssr: false })
// const Work_Clients = dynamic(() => import('@work/Work_Clients'), { ssr: false })

const Work = ({ allCaseStudies }) => {
  return (
    <Main>
      <Work_SEO />
      <PageHeader_VarH header='What We Make' subheader='knead the dough, baby' />
      <Work_Services />
      <Work_Callout />
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
      const { data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))
      return {
        data,
        filePath,
      }
    })
    .filter((cs) => cs.data.active)
    .sort((cs1, cs2) => (cs1.data.date > cs2.data.date ? -1 : 1))

  return { props: { allCaseStudies } }
}
