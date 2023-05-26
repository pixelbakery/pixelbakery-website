import Work_Services from '@work/Work_Services'
import { caseStudyFilePaths, CASESTUDIES_PATH } from '@lib/mdxUtils'
import fs from 'fs'
import path from 'path'

import Main from '@parts/Main'
import matter from 'gray-matter'
import Work_SEO from '@work/Work_SEO'
import Work_Callout from '@work/Work_Callout'
import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import Work_Portfolio from '@work/Work_Portfolio'
import Work_Clients from '@work/Work_Clients'

const Work = ({ allCaseStudies }) => {
  return (
    <Main>
      <PageHeader_VarH header='What We Make' subheader='knead the dough, baby' />
      <Work_Services />
      <Work_Callout />
      <Work_Portfolio allCaseStudies={allCaseStudies} />
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
