/* eslint-disable react/no-unescaped-entities */
import { InnerWrapper, PageSection } from '@parts/index'
import { H1 } from '@typography/index'
import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

function Page_Careers_SubmissionConfirmation() {
  return (
    <>
      <NextSeo noindex={true} title='Application Submitted | Careers' />
      <PageSection color='pink-lighter' id='application-submitted'>
        <InnerWrapper className='pt-24'>
          <H1 className='peach text-4xl md:text-6xl text-blue mb-8'>
            Thank you for your application.
          </H1>
          <p className='my-4 pb-2 text-lg font-md text-wine'>
            We received your application for a position with us. We'll be in touch shortly if we
            think you'll be a good fit here. If you have any questions, feel free to give Maddie a
            shout at <Link href={'mailto:careers@pixelbakery.com'}> careers@pixelbakery.com</Link>.
          </p>

          <p className='my-4 pb-2 text-lg font-md text-wine'>
            Also, be sure to follow us on{' '}
            <a
              href='https://www.instagram.com/pixelbakery/'
              target='_blank'
              className='underline text-peach'
              rel='noreferrer'
            >
              Instagram
            </a>{' '}
          </p>

          <p className='my-4 pb-2 text-lg font-md text-wine'>👩‍🍳 💖 🍩,</p>

          <p className='mt-4 mb-0 pb-0 text-lg text-wine font-bold italic'>– The PB Team</p>
          <ul className='list-none mt-4 '>
            <li className='my-2'>
              {' '}
              <Link hrefLang={'en-US'} href={'/careers'} className='text-blue underline text-md'>
                Back to all job postings →
              </Link>
            </li>
            <li className='my-2'>
              <Link
                hrefLang={'en-US'}
                href={'/about#twitch'}
                className='text-blue underline text-md'
              >
                Daydream about us →
              </Link>
            </li>
            <li className='my-2'>
              <Link
                href={'https://youtube.com/playlist?list=PLR7uWMos1NkvOhSzaTR8-0vwc8MDBuylm'}
                className='text-blue underline text-md hover:text-opacity-80'
              >
                Watch a playlist of trippy music videos we've curated →
              </Link>
            </li>
          </ul>
        </InnerWrapper>
      </PageSection>
    </>
  )
}
//Set page layout
Page_Careers_SubmissionConfirmation.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_Careers_SubmissionConfirmation
