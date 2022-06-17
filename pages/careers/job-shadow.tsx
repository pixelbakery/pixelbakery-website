import dynamic from 'next/dynamic'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'))
import InnerWrapper from '@parts/InnerWrapper'
import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import H2AndLead from '@typography/H2AndLead'
import Lead from '@typography/Lead'
import Careers_JobShadow_Form from '@careers/Careers_JobShadow_Form'
import { NextSeo } from 'next-seo'
function JobShadow() {
  return (
    <Main>
      <NextSeo
        title='Job Shadows | Careers | Pixel Bakery'
        description={`Whether you’re considering a career in design or you just want to come in and hang
                out with us (we don’t blame you), there’s definitely an opportunity to come shadow
                at Pixel Bakery. We’ll show you what we’re currently working on, what we’ve done,
                and maybe give you a sneak-peek on what we plan to do! There are just a few
                requirements.`}
        openGraph={{
          url: `https://pixelbakery.com/careers/job-shadow`,
          title: 'Job Shadows | Careers | Pixel Bakery',
          description: `Whether you’re considering a career in design or you just want to come in and hang
                out with us (we don’t blame you), there’s definitely an opportunity to come shadow
                at Pixel Bakery. We’ll show you what we’re currently working on, what we’ve done,
                and maybe give you a sneak-peek on what we plan to do! There are just a few
                requirements.`,
        }}
      />
      <PageHeader_VarH
        header='Job Shadows'
        subheader="Come learn what it's like to work at Pixel Bakery"
      />
      <PageSection>
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
                    out.
                  </p>
                </li>

                <li className='flex gap-8 my-0 py-0'>
                  <div className='self-start flex-grow bg-yellow text-peach flex flex-col  w-20 h-16 rounded-full  justify-center text-center text-4xl font-black'>
                    2
                  </div>
                  <p className='self-start my-0 py-0 flex-shrink w-full'>
                    Shadowing groups <em>must</em> be at least three people per session.
                  </p>
                </li>
                <li className='flex gap-8 my-0 py-0'>
                  <div className='self-start flex-grow bg-pink-light text-pink flex flex-col  w-20 h-16 rounded-full  justify-center text-center text-4xl font-black'>
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
      <PageSection color='blue'>
        <InnerWrapper>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-20'>
            <div>
              <Lead color='blue-dark'>
                If you can work with these requirements, we would love to have you.
              </Lead>
              <p className='text-white text-2xl '>
                Shoot us an email{' '}
                <a
                  className='underline text-white'
                  href='mailto:careers@pixelbakery.com'
                  target={'_blank'}
                >
                  careers@pixelbakery.com
                </a>{' '}
                with any questions. Fill out the form and we can get something scheduled. In the
                meantime, go ahead and follow us on social media (
                <a
                  href='https://instagram.com/pixelbakery'
                  target={'_blank'}
                  className='underline text-white'
                  rel='nofollow'
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
    </Main>
  )
}
export default JobShadow
