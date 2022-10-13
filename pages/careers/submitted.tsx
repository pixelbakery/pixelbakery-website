/* eslint-disable react/no-unescaped-entities */

import InnerWrapper from '@parts/InnerWrapper'
import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import H1 from '@typography/H1'
import { NextSeo } from 'next-seo'
import Link from 'next/link'
import Obfuscate from 'react-obfuscate'
function SubmissionConfirmation() {
  return (
    <Main>
      <NextSeo noindex={true} nofollow={true} title='Application Submitted | Careers' />
      <PageSection color='pink-light' id='application-submitted'>
        <InnerWrapper className='pt-24'>
          <H1 className='peach text-4xl md:text-6xl text-blue mb-8'>
            Thank you for your application.
          </H1>
          <p className='my-4 pb-2 text-lg font-md text-wine'>
            We received your application for a position with us. We'll be in touch shortly if we
            think you'll be a good fit here. If you have any questions, feel free to give Maddie a
            shout at{' '}
            <Obfuscate
              linkText={'mailto:no@nope.com'}
              email={'careers@pixelbakery.com'}
              className={'underline text-peach'}
            />
            .
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
              <Link hrefLang={'en-US'} href={'/careers'} passHref>
                <a hrefLang={'en-US'} className='text-blue underline text-md'>
                  {' '}
                  Back to all job postings →
                </a>
              </Link>
            </li>
            <li className='my-2'>
              {' '}
              <Link hrefLang={'en-US'} href={'/about#twitch'}>
                <a hrefLang={'en-US'} className='text-blue underline text-md'>
                  Daydream about us →
                </a>
              </Link>
            </li>
            <li className='my-2'>
              {' '}
              <Link
                href={'https://youtube.com/playlist?list=PLR7uWMos1NkvOhSzaTR8-0vwc8MDBuylm'}
                passHref
              >
                <a hrefLang={'en-US'} className='text-blue underline text-md hover:text-opacity-80'>
                  Watch a playlist of trippy music videos we've curated →
                </a>
              </Link>
            </li>
          </ul>
        </InnerWrapper>
      </PageSection>
    </Main>
  )
}

export default SubmissionConfirmation
