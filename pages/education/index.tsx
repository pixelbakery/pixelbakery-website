import Main from '@parts/Main'
import fs from 'fs'
import {
  madeToOrderFilePaths,
  MADETOORDER_PATH,
  // projectFilesFilePaths,
  // PROJECTFILE_PATH,
} from '@lib/mdxUtils'
import matter from 'gray-matter'
import path from 'path'
import Education_SEO from '@education/Education_SEO'
import Education_Why from '@education/Education_Why'
import Education_Header from '@education/Education_Header'
import Education_MadeToOrder from '@education/Education_MadeToOrder'
import Education_FromScratch from '@education/Education_FromScratch'
// import Education_ProjectFiles from '@education/Education_ProjectFiles'
import Education_TutorialRequests from '@education/Education_TutorialRequests'
import { JsonStringify } from '@lib/helpers'

function EducationPage({ allMadeToOrders }) {
  return (
    <Main className='max-w-screen overflow-x-hidden' id='educationPage'>
      <Education_SEO />
      <Education_Header />
      <Education_Why />
      {/* <Store_Maintenance /> */}
      {/* <Education_ProjectFiles allProjectFiles={allProjectFiles} /> */}
      {/* <Education_Recent /> */}
      <Education_FromScratch />
      <Education_MadeToOrder allMadeToOrders={allMadeToOrders} />
      <Education_TutorialRequests />
    </Main>
  )
}
export default EducationPage

export const getStaticProps = async () => {
  // Made to Order (new system)
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

  // Project Files
  // const allProjectFiles = projectFilesFilePaths
  //   .map((filePath) => {
  //     const source = fs.readFileSync(path.join(PROJECTFILE_PATH, filePath))
  //     const { content, data } = matter(source)

  //     return {
  //       content,
  //       data,
  //       filePath,
  //     }
  //   })
  //   .sort((pf1, pf2) => (pf1.data.date > pf2.data.date ? -1 : 1))

  return {
    props: { allMadeToOrders },
  }
}
