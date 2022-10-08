import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { jobFilePaths, JOBS_PATH } from '@lib/mdxUtils'
import dynamic from 'next/dynamic'
import Careers_Breadwinners from '@careers/Careers_Breadwinners'
import Careers_OpenPositions from '@careers/Careers_OpenPositions'
import Careers_SEO from '@careers/Careers_SEO'
import Careers_Benefits from '@careers/Careers_Benefits'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'), {
  loading: () => (
    <PageHeader_LoadingContent header={'Future Bakers'} subheader={'Come Rise With Us'} />
  ),
  ssr: false,
})

import Careers_JobShadow from '@careers/Careers_JobShadow'
import Main from '@parts/Main'
import PageHeader_LoadingContent from '@pageHeaders/PageHeader_LoadingContent'
import Careers_Intro from '@careers/Careers_Intro'

const Careers = ({ allJobs }) => {
  const openPositions = allJobs.filter(
    (job) => job.data.openPositions && job.data.active && !job.data.internship,
  )
  const internships = allJobs.filter((job) => job.data.internship && job.data.active)

  return (
    <Main id='careers-page'>
      <Careers_SEO />
      <PageHeader_VarH header='Future Bakers' subheader='Come rise with us' />
      <Careers_Intro />
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
      <Careers_Breadwinners />
      <Careers_Benefits />
      <Careers_JobShadow />
    </Main>
  )
}

export default Careers

export function getStaticProps() {
  const allJobs = jobFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(JOBS_PATH, filePath))
      const { data } = matter(source)

      return {
        data,
        filePath,
      }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

  return { props: { allJobs } }
}
