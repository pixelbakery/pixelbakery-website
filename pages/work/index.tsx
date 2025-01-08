import { caseStudyFilePaths, CASESTUDIES_PATH } from '@lib/mdxUtils'
import fs from 'fs'
import path from 'path'

import type { ReactElement } from 'react'
import { Layout_Default } from '@layouts'
import matter from 'gray-matter'

import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import {
  Work_SEO,
  Work_Callout,
  Work_Portfolio,
  Work_Clients,
  Work_Industries,
  Work_Services,
} from '@work'

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
interface CaseStudyData {
  active?: boolean
  date?: string | null
  sources: { src: string; type: string }[]
}

interface CaseStudy {
  data: CaseStudyData
  filePath: string
}

// Set page layout
Page_Work.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Default>{page}</Layout_Default>
}

export default Page_Work

export function getStaticProps() {
  const basePath = path.join(process.cwd(), 'public', 'img', 'work')

  const allCaseStudies = caseStudyFilePaths
    .map((filePath): CaseStudy | null => {
      try {
        const source = fs.readFileSync(path.join(CASESTUDIES_PATH, filePath), 'utf-8')
        const { data } = matter(source)
        data.date = JSON.parse(JSON.stringify(data.date)) || null

        const sources: { src: string; type: string }[] = [
          fs.existsSync(`${basePath}/${data.vimeoPreview}.webm`) && {
            src: `/img/work/${data.vimeoPreview}.webm`,
            type: 'video/webm',
          },
          fs.existsSync(`${basePath}/${data.vimeoPreview}.mp4`) && {
            src: `/img/work/${data.vimeoPreview}.mp4`,
            type: 'video/mp4',
          },
        ].filter((source): source is { src: string; type: string } => Boolean(source))

        return {
          data: { ...data, sources },
          filePath,
        }
      } catch (error) {
        console.error(`Failed to process case study: ${filePath}`, error)
        return null
      }
    })
    .filter((cs): cs is CaseStudy => !!cs && cs.data.active === true)
    .sort((cs1, cs2) => (cs1.data.date! > cs2.data.date! ? -1 : 1))

  return { props: { allCaseStudies } }
}
