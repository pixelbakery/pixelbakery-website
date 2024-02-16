import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { jobFilePaths, JOBS_PATH } from '@lib/mdxUtils'
import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import Careers_JobShadow from '@careers/Careers_JobShadow'

import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import {
  Careers_Intro,
  Careers_Benefits,
  Careers_SEO,
  Careers_OpenPositions,
  Careers_Breadwinners,
  Careers_PastCareers,
  Careers_Freelancers,
} from '@careers/index'

const Page_Careers = ({ allJobs }) => {
  const openPositions = allJobs.filter((job) => job.data.active && !job.data.internship)
  const internships = allJobs.filter((job) => job.data.internship && job.data.active)
  const closedPositions = allJobs.filter((job) => !job.data.active)
  return (
    <>
      <Careers_SEO />
      <PageHeader_VarH header='Future Bakers' subheader='Come rise with us' />
      <Careers_Intro />
      <Careers_Freelancers />
      <Careers_OpenPositions
        jobs={openPositions}
        header={'Open Positions'}
        subheader={'Get ready for the ride of your life.'}
      />
      <Careers_OpenPositions
        jobs={internships}
        header={'internships'}
        subheader={
          'For those that are still in school or eager to learn, we offer internships to show you the ropes.'
        }
      />
      <Careers_PastCareers jobs={closedPositions} />
      <Careers_Breadwinners />
      <Careers_Benefits />
      <Careers_JobShadow />
    </>
  )
}
//Set page layout
Page_Careers.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_Careers

export function getStaticProps() {
  const allJobs = jobFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(JOBS_PATH, filePath))
      const { data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))
      return {
        data,
        filePath,
      }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

  return { props: { allJobs } }
}
