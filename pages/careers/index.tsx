import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { jobFilePaths, JOBS_PATH } from '@lib/mdxUtils'
import dynamic from 'next/dynamic'
import Careers_Breadwinners from '@careers/Careers_Breadwinners'
import Careers_OpenPositions from '@careers/Careers_OpenPositions'

// import Careers_Casting from '@careers/Careers_Casting'
// import Careers_Vendors from '@careers/Careers_Vendors'
import Careers_Benefits from '@careers/Careers_Benefits'
// import Careers_Culture from '@careers/Careers_Culture'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'))
import Careers_JobShadow from '@careers/Careers_JobShadow'
import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import { NextSeo } from 'next-seo'

const Careers = ({ allJobs }) => {
  const openPositions = allJobs.filter(
    (job) => job.data.openPositions && job.data.active && !job.data.internship,
  )
  const internships = allJobs.filter((job) => job.data.internship && job.data.active)

  return (
    <Main id='careers-page'>
      <NextSeo
        title='Careers'
        description={` We’re a motion-focused creative shop, meaning while our most frequently requested
              services are in the areas of animation, videography, and web design, we basically do
              it all – from production on animated series in LA, to rebrands for local startups, to
              print design to regional nonprofits. We are producers and we are creatives, and at the
              end of the day we find our happiness and fulfillment from making great creative that
              touches lives.`}
        openGraph={{
          url: `https://pixelbakery.com/careers`,
          title: 'Careers',
          description: ` We’re a motion-focused creative shop, meaning while our most frequently requested
              services are in the areas of animation, videography, and web design, we basically do
              it all – from production on animated series in LA, to rebrands for local startups, to
              print design to regional nonprofits. We are producers and we are creatives, and at the
              end of the day we find our happiness and fulfillment from making great creative that
              touches lives.`,
          images: [
            {
              url: 'https://cdn.pixelbakery.com/img/pixelbakery-thumbnail.jpg',
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://cdn.pixelbakery.com/img/pixel-bakery-office.jpg',
              width: 1080,
              height: 810,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://cdn.pixelbakery.com/img/pixel-bakery-samee-dan-1200x900.png',
              width: 1080,
              height: 810,
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
        }}
      />
      <PageHeader_VarH header='Future Bakers' subheader='Come rise with us' />
      <PageSection className='' color='white'>
        <InnerWrapper className='lg:pb-0 grid grid-cols-1 xl:grid-cols-2'>
          <H2 color='pink'>Think you got what it takes?</H2>
          <div className='max-w-3xl'>
            <p>
              We’re a motion-focused creative shop, meaning while our most frequently requested
              services are in the areas of animation, videography, and web design, we basically do
              it all – from production on animated series in LA, to rebrands for local startups, to
              print design to regional nonprofits. We are producers and we are creatives, and at the
              end of the day we find our happiness and fulfillment from making great creative that
              touches lives.
            </p>

            <p>We hope you come make awesome things with us.</p>
          </div>
        </InnerWrapper>
      </PageSection>
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

      {/* <Careers_Casting /> */}
      {/* <Careers_Vendors /> */}
      <Careers_Benefits />
      <Careers_JobShadow />

      {/* <Careers_Culture /> */}
    </Main>
  )
}

export default Careers

export function getStaticProps() {
  const allJobs = jobFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(JOBS_PATH, filePath))
      const { content, data } = matter(source)

      return {
        content,
        data,
        filePath,
      }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

  return { props: { allJobs } }
}
