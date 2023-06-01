import Link from 'next/link'
import Navigation from '@nav/Navigation'

import Obfuscate from 'react-obfuscate'
import { NextSeo } from 'next-seo'
function SubmissionConfirmation() {
  return (
    <main className='max-w-screen'>
      <NextSeo noindex={true}  title='Order Confirmed | Shop' />

      <Navigation />

      <section
        id=''
        className='px-12 my-4 min-h-screen pt-20 bg-pink-lighter flex flex-col justify-center'
      >
        <div className='mx-auto max-w-2xl flex flex-col justify-center h-full'>
          <h1 className='peach text-4xl md:text-6xl text-blue mb-1 pb-0'>Order Confirmed.</h1>
          <h2 className='peach text-2xl md:text-4xl text-wine mb-8 pt-0 mt-0'>Thanks a bunch</h2>
          <p className='my-4 pb-2 text-lg font-md text-wine'>
            We received your order and we'll get right to work on it. You should be receiving an
            email confirmation here shortly. If you have any questions, feel free to give Maddie a
            shout at{' '}
            <Obfuscate
              linkText={'mailto:no@nope.com'}
              email={'maddie@pixelbakery.com'}
              className={'underline text-peach'}
            />
            .
          </p>

          <p className='my-4 pb-2 text-lg font-md text-wine'>
            Also, be sure to follow us on{' '}
            <Link
              href='https://www.instagram.com/pixelbakery/'
              rel='noreferrer'
              target='_blank'
              className='underline text-peach'
            >
              Instagram
            </Link>{' '}
            🫶
          </p>

          <p className='my-4 pb-2 text-lg font-md text-wine'>👩‍🍳 💖 🍩,</p>

          <p className='mt-4 mb-0 pb-0 text-lg text-wine font-bold italic'>– The PB Team</p>
          <ul className='list-none mt-4 '>
            <li className='my-2'>
              {' '}
              <Link hrefLang={'en-US'} href={'/store'} className='text-blue underline text-md'>
                ← Back to the company store
              </Link>
            </li>
            <li className='my-2'>
              {' '}
              <Link
                hrefLang={'en-US'}
                href={'https://twitch.tv/pixelbakery'}
                className='text-blue underline text-md'
              >
                Daydream about us →
              </Link>
            </li>
            <li className='my-2'>
              {' '}
              <Link
                href={'https://youtube.com/playlist?list=PLR7uWMos1NkvOhSzaTR8-0vwc8MDBuylm'}
                className='text-blue underline text-md hover:text-opacity-80'
                target='_blank'
              >
                Watch a playlist of trippy music videos we've curated →
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default SubmissionConfirmation
