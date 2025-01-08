import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import { InnerWrapper, PageSection } from '@parts/index'
import { H2AndLead, Lead } from '@typography/index'
import Careers_Application_Form from '@careers/Careers_Application_Form'

// get job posts for position titles
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { jobFilePaths, JOBS_PATH } from '@lib/mdxUtils'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'

interface Job {
  title: string
  active: boolean
  internship?: boolean
  commitment?: string
  location?: string
  date?: string | Date // or Date if you handle it as a Date object
}
interface CareersApplicationProps {
  allJobs: {
    content: string
    data: Job
    filePath: string
  }[]
}
function Page_Careers_Application({ allJobs }: CareersApplicationProps) {
  return (
    <>
      <NextSeo
        noindex={true}
        title='Submit an Application | Careers'
        description={
          'Here it is- your big chance. Show us your best self, fill out the job application, and seal it with a kiss. Good luck.'
        }
        canonical={`https://pixelbakery.com/careers/application`}
        openGraph={{
          url: `https://pixelbakery.com/careers/application`,
          title: 'Application | Careers',
          description:
            'Here it is- your big chance. Show us your best self, fill out the job application, and seal it with a kiss. Good luck.',
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-office.jpg`,
              width: 1080,
              height: 810,
              alt: 'Pixel Bakery Design Studio is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-samee-dan-1200x900.png`,
              width: 1080,
              height: 810,
              alt: 'Danny Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Careers',
            item: 'https://pixelbakery.com/careers',
          },
          {
            position: 2,
            name: `Submit an Application | Careers`,
            item: `https://pixelbakery.com/careers/freelancers`,
          },
        ]}
      />
      <PageHeader_VarH header='Application' subheader='get at it' />
      <PageSection id='job-application'>
        <InnerWrapper>
          <H2AndLead
            headerText={"we're always looking for new bakers"}
            leadText={'Come rise with us'}
          />
          <Lead>That was a pun. A large part of your job here will be writing puns.</Lead>
          <p>Okay, let’s get to know you a bit.</p>
        </InnerWrapper>
        <InnerWrapper>
          <Careers_Application_Form allJobs={allJobs} />
        </InnerWrapper>
      </PageSection>
    </>
  )
}

//Set page layout
Page_Careers_Application.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_Careers_Application

export function getStaticProps() {
  const allJobs = jobFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(JOBS_PATH, filePath))
      const { content, data } = matter(source)
      data.date = JSON.parse(JSON.stringify(data.date))
      return {
        content,
        data,
        filePath,
      }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

  return { props: { allJobs } }
}
