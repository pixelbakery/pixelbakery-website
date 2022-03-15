import Work_Services from '@work/Work_Services'
import Work_Portfolio from '@work/Work_Portfolio'
import Work_Clients from '@work/Work_Clients'
import { caseStudyFilePaths, CASESTUDIES_PATH } from '@lib/mdxUtils'
import fs from 'fs'
import path from 'path'
import PageHeader_VariableHeight from '@pageHeaders/PageHeader_VarH'

import Main from '@parts/Main'
import matter from 'gray-matter'
import Link from 'next/link'

const Work = ({ allCaseStudies }) => {
  return (
    <Main className='max-w-screen overflow-hidden'>
      <PageHeader_VariableHeight header='What We Make' subheader='knead the dough, baby' />
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
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

  return { props: { allCaseStudies } }
}
