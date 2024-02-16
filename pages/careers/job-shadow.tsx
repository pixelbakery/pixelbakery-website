import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import { InnerWrapper, PageSection } from '@parts/index'
import { H2AndLead, Lead } from '@typography/index'
import { Careers_JobShadow_Form } from '@careers/index'
import { NextSeo } from 'next-seo'
import Obfuscate from 'react-obfuscate'
import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
function Page_Careers_JobShadow() {
  return (
    <>
      <NextSeo
        title='Job Shadows | Careers'
        description={`Discover design careers with Pixel Bakery! Shadow our team, see our projects, and learn about the creative process. Join us for an inspiring experience.`}
        canonical={`https://pixelbakery.com/careers/job-shadow`}
        openGraph={{
          url: `https://pixelbakery.com/careers/job-shadow`,
          title: 'Job Shadows | Careers',
          description: `Discover design careers with Pixel Bakery! Shadow our team, see our projects, and learn about the creative process. Join us for an inspiring experience.`,
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
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
        }}
      />
      <PageHeader_VarH
        header='Job Shadows'
        subheader="Come learn what it's like to work at Pixel Bakery"
      />
      <PageSection id='job-shadow-info'>
        <InnerWrapper>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-24'>
            <div>
              <H2AndLead headerText={'Want to do a job shadow?'} leadText={"Neat. We're honored."}>
                {' '}
              </H2AndLead>
              <p className='max-w-lg mt-12'>
                Whether you’re considering a career in design or you just want to come in and hang
                out with us (we don’t blame you), there’s definitely an opportunity to come shadow
                at Pixel Bakery. We’ll show you what we’re currently working on, what we’ve done,
                and maybe give you a sneak-peek on what we plan to do! There are just a few
                requirements.
              </p>
            </div>
            <div>
              <ul className='grid grid-cols-1 gap-8'>
                <li className='flex gap-8 my-0 py-0'>
                  <div className='self-start flex-grow bg-blue text-blue-dark flex flex-col  w-20 h-16 rounded-full  justify-center text-center text-4xl font-black'>
                    1
                  </div>
                  <p className='self-start mt-0 pt-0 flex-shrink w-full'>
                    If you’re under 18, we’ll send you a permission form for your parents to fill
                    out
                  </p>
                </li>

                <li className='flex gap-8 my-0 py-0'>
                  <div className='self-start flex-grow bg-yellow text-peach flex flex-col  w-20 h-16 rounded-full  justify-center text-center text-4xl font-black'>
                    2
                  </div>
                  <p className='self-start my-0 py-0 flex-shrink w-full'>
                    Shadowing groups <em>must</em> be at least three people per session
                  </p>
                </li>
                <li className='flex gap-8 my-0 py-0'>
                  <div className='self-start flex-grow bg-pink-lighter text-pink flex flex-col  w-20 h-16 rounded-full  justify-center text-center text-4xl font-black'>
                    3
                  </div>
                  <p className='self-start my-0 y-0 flex-shrink w-full'>
                    Sessions must be on a Friday, preferably afternoon
                  </p>
                </li>
                <li className='flex gap-8 my-0 py-0'>
                  <div className='self-start flex-grow bg-peach text-cream flex flex-col  w-20 h-16 rounded-full  justify-center text-center text-4xl font-black'>
                    4
                  </div>
                  <p className='self-start my-0 py-0 flex-shrink w-full'>
                    <strong>YOU</strong> have to organize the job shadow, your parents and teachers
                    are not allowed to schedule a job shadow with us on your behalf
                  </p>
                </li>
                <li className='flex gap-8 my-0 py-0'>
                  <div className='self-start flex-grow bg-blue-dark text-blue flex flex-col  w-20 h-16 rounded-full  justify-center text-center text-4xl font-black'>
                    5
                  </div>
                  <p className='self-start my-0 py-0 flex-shrink w-full'>2-hour session max</p>
                </li>
              </ul>
            </div>
          </div>
        </InnerWrapper>
      </PageSection>
      <PageSection color='blue' id='job-shadow-contact'>
        <InnerWrapper>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20'>
            <div>
              <Lead color='blue-dark'>
                If you can work with these requirements, we would love to have you.
              </Lead>
              <p className='text-white text-2xl '>
                Shoot us an email{' '}
                <Obfuscate
                  linkText={'mailto:no@nope.com'}
                  email={'careers@pixelbakery.com'}
                  className={'underline text-white'}
                />{' '}
                with any questions. Fill out the form and we can get something scheduled. In the
                meantime, go ahead and follow us on social media (
                <a
                  href='https://instagram.com/pixelbakery'
                  target={'_blank'}
                  className='underline text-white'
                  rel='noreferrer'
                >
                  @pixelbakerylnk
                </a>
                ) to see more about life at PB.
              </p>
            </div>
            <div>
              <Careers_JobShadow_Form />
            </div>
          </div>
        </InnerWrapper>
      </PageSection>
    </>
  )
}
//Set page layout
Page_Careers_JobShadow.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_Careers_JobShadow
