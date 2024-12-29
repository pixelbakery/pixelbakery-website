import Work_Services from '@work/Work_Services'
import { caseStudyFilePaths, CASESTUDIES_PATH } from '@lib/mdxUtils'
import fs from 'fs'
import path from 'path'

import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import matter from 'gray-matter'

import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import { Work_SEO, Work_Callout, Work_Portfolio, Work_Clients, Work_Industries } from '@work/index'
const Page_Work = ({ allCaseStudies }: any) => {
  return (
    <>
      <PageHeader_VarH header='What We Make' subheader='knead the dough, baby' />
      <Work_Services />
      <Work_Callout />
      <Work_Portfolio allCaseStudies={allCaseStudies} />
      <Work_Industries header='Industries We Love Working With' />
      <Work_Clients />
      <Work_SEO allCaseStudies={allCaseStudies} />
    </>
  )
}

//Set page layout
Page_Work.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_Work

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
