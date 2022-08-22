/* eslint-disable react/no-unescaped-entities */

import next from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Navigation from '@nav/Navigation'
import NoIndex from '@parts/NoIndex'

function SubmissionConfirmation() {
  return (
    <main className='max-w-screen'>
      <NoIndex />
      <Head>
        <title>Order Confirmed</title>
      </Head>
      <Navigation />

      <section
        id=''
        className='px-12 my-4 min-h-screen pt-20 bg-pink-light flex flex-col justify-center'
      >
        <div className='mx-auto max-w-2xl flex flex-col justify-center h-full'>
          <h1 className='peach text-4xl md:text-6xl text-blue mb-1 pb-0'>Order Confirmed.</h1>
          <h2 className='peach text-2xl md:text-4xl text-wine mb-8 pt-0 mt-0'>Thanks a bunch</h2>
          <p className='my-4 pb-2 text-lg font-md text-wine'>
            We received your order and we'll get right to work on it. You should be receiving an
            email confirmation here shortly. If you have any questions, feel free to give Maddie a
            shout at{' '}
            <a href='mailto:maddie@pixelbakery.com' className='underline text-peach'>
              maddie@pixelbakery.com
            </a>
            .
          </p>

          {/* { TODO: grab favorite band name from application and insert it below } */}

          <p className='my-4 pb-2 text-lg font-md text-wine'>
            We redistribute all of our store proceeds directly back to our employees, which means
            you're directly impacting someone cool's life when you purchase our merch. Except for
            right now. Which, as you know because we've said it like 20 times, we're donating the
            proceeds to the Child Advocacy Center.
          </p>

          <p className='my-4 pb-2 text-lg font-md text-wine'>
            Also, be sure to follow us on{' '}
            <a
              href='https://www.instagram.com/pixelbakery/'
              rel='noreferrer'
              target='_blank'
              className='underline text-peach'
            >
              Instagram
            </a>
            ;)
          </p>

          <p className='my-4 pb-2 text-lg font-md text-wine'>👩‍🍳 💖 🍩,</p>

          <p className='mt-4 mb-0 pb-0 text-lg text-wine font-bold italic'>– The PB Team</p>
          <ul className='list-none mt-4 '>
            <li className='my-2'>
              {' '}
              <Link href={'/store'} passHref>
                <a className='text-blue underline text-md'>← Back to the company store</a>
              </Link>
            </li>
            <li className='my-2'>
              {' '}
              <Link href={'https://twitch.tv/pixelbakery'} passHref>
                <a className='text-blue underline text-md' target='_blank' rel='noreferrer'>
                  {' '}
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
                <a
                  className='text-blue underline text-md hover:text-opacity-80'
                  target='_blank'
                  rel='noreferrer'
                >
                  Watch a playlist of trippy music videos we've curated →
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default SubmissionConfirmation
