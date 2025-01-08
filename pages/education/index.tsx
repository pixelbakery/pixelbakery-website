import fs from 'fs'
import type { EducationPageProps } from '@/types/general'

import {
  madeToOrderFilePaths,
  MADETOORDER_PATH,
  projectFilesFilePaths,
  PROJECTFILE_PATH,
} from '@lib/mdxUtils'
import matter from 'gray-matter'
import path from 'path'
import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import {
  Education_Header,
  Education_SEO,
  Education_Why,
  Education_MadeToOrder,
  Education_FromScratch,
  Education_TutorialRequests,
  Education_ProjectFiles,
} from '@education/index'
import { GetStaticProps } from 'next/types'

function Page_Education({ allMadeToOrders, allProjectFiles }: EducationPageProps) {
  return (
    <>
      <Education_SEO />
      <Education_Header />
      <Education_Why />
      <Education_ProjectFiles allProjectFiles={allProjectFiles} />
      <Education_MadeToOrder allMadeToOrders={allMadeToOrders} />
      <Education_FromScratch />
      <Education_TutorialRequests />
    </>
  )
}

//Set page layout
Page_Education.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_Education

export const getStaticProps: GetStaticProps = async () => {
  const allProjectFiles = projectFilesFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(PROJECTFILE_PATH, filePath))
      const { data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))
      return {
        data,
        filePath,
      }
    })
    .sort((mto1, mto2) => (mto1.data.date > mto2.data.date ? -1 : 1))

  const allMadeToOrders = madeToOrderFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(MADETOORDER_PATH, filePath))
      const { data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))
      return {
        data,
        filePath,
      }
    })
    .sort((mto1, mto2) => (mto1.data.date > mto2.data.date ? -1 : 1))

  return { props: { allMadeToOrders, allProjectFiles } }
}
