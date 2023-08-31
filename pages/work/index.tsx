import Work_Services from '@work/Work_Services'
import { caseStudyFilePaths, CASESTUDIES_PATH } from '@lib/mdxUtils'
import fs from 'fs'
import path from 'path'

import Main from '@parts/Main'
import matter from 'gray-matter'

import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'

import { Work_SEO, Work_Callout, Work_Portfolio, Work_Clients, Work_Industries } from '@work/index'
const Work = ({ allCaseStudies }) => {
  return (
    <Main>
      <PageHeader_VarH header='What We Make' subheader='knead the dough, baby' />
      <Work_Services />
      <Work_Callout />
      <Work_Portfolio allCaseStudies={allCaseStudies} />
      <Work_Industries header='Industries We Love Working With' />
      <Work_Clients />
      <Work_SEO />
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
