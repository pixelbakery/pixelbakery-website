import Main from '@parts/Main'
import fs from 'fs'
import { madeToOrderFilePaths, MADETOORDER_PATH } from '@lib/mdxUtils'
import dynamic from 'next/dynamic'
import matter from 'gray-matter'
import path from 'path'
const Education_Header = dynamic(() => import('@education/Education_Header'))
import Education_SEO from '@education/Education_SEO'
import Education_Why from '@education/Education_Why'
const Education_MadeToOrder = dynamic(() => import('@education/Education_MadeToOrder'))
import Education_FromScratch from '@education/Education_FromScratch'
import Education_TutorialRequests from '@education/Education_TutorialRequests'
import BackToTop from '@utility/BackToTop'

function EducationPage({ allMadeToOrders }) {
  return (
    <Main className='max-w-screen overflow-x-hidden' id='educationPage'>
      <Education_SEO />
      <Education_Header />
      <Education_Why />
      <Education_FromScratch />
      <Education_MadeToOrder allMadeToOrders={allMadeToOrders} />
      <Education_TutorialRequests />
      <BackToTop />
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

  return {
    props: { allMadeToOrders },
  }
}
