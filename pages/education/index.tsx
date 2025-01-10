import fs from 'fs'
import type { Tutorial } from '@/types/tutorials'
import type { ProjectFile } from '@/types/projectFiles'

import {
  madeToOrderFilePaths,
  MADETOORDER_PATH,
  projectFilesFilePaths,
  PROJECTFILE_PATH,
} from '@lib/mdxUtils'
import matter from 'gray-matter'
import path from 'path'
import type { ReactElement } from 'react'
import { Layout_Default } from '@layouts'
import {
  Education_Header,
  Education_SEO,
  Education_Why,
  Education_MadeToOrder,
  Education_TutorialRequests,
  Education_ProjectFiles,
} from '@education'
import { GetStaticProps } from 'next/types'

interface EducationPageProps {
  allMadeToOrders: Tutorial[]
  allProjectFiles: ProjectFile[] // Temporarily using any until project files types are finalized
}

function Page_Education({ allMadeToOrders, allProjectFiles }: EducationPageProps) {
  return (
    <>
      <Education_SEO />
      <Education_Header />
      <Education_Why />
      <Education_ProjectFiles allProjectFiles={allProjectFiles} />
      <Education_MadeToOrder allMadeToOrders={allMadeToOrders} />
      <Education_TutorialRequests />
    </>
  )
}

// Set page layout
Page_Education.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Default>{page}</Layout_Default>
}
export default Page_Education

export const getStaticProps: GetStaticProps = async () => {
  // Parse project files
  const allProjectFiles: ProjectFile[] = projectFilesFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(PROJECTFILE_PATH, filePath), 'utf-8')
    const { data } = matter(source)
    const normalizedDate = data.date ? new Date(data.date).toISOString() : null

    return {
      filePath,
      frontMatter: {
        ...data,
        date: normalizedDate, // Use normalized date or null if invalid
      },
    } as ProjectFile
  })

  const allMadeToOrders: Tutorial[] = madeToOrderFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(MADETOORDER_PATH, filePath))
      const { data } = matter(source)
      const normalizedDate = data.date ? new Date(data.date).toISOString() : null
      return {
        filePath,
        frontMatter: {
          ...data,
          date: normalizedDate, // Use normalized date or null if invalid
        },
      } as Tutorial
    })
    .sort(
      (mto1, mto2) =>
        mto1.frontMatter.date && mto2.frontMatter.date
          ? new Date(mto1.frontMatter.date).getTime() > new Date(mto2.frontMatter.date).getTime()
            ? -1
            : 1
          : 0, // Handle cases where dates are null
    )

  return { props: { allMadeToOrders, allProjectFiles } }
}
