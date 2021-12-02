/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next'

function SubmissionConfirmation() {
  return (
    <main>
      <section id='' className='px-12 my-4 lander pt-20 bg-pink-light'>
        <div className='mx-auto max-w-2xl flex flex-col justify-center h-full'>
          <h1 className='peach text-4xl md:text-6xl text-blue mb-8'>
            Thank you for your application.
          </h1>
          <p className='my-4 pb-2 text-lg font-md text-wine'>
            We received your application for a position with us. We'll be in touch shortly if we
            think you'll be a good fit here. If you have any questions, feel free to give Maddie a
            shout at{' '}
            <a href='mailto:maddie@pixelbakery.com' className='underline text-peach'>
              maddie@pixelbakery.com
            </a>
            .
          </p>

          {/* { TODO: grab favorite band name from application and insert it below } */}

          <p className='my-4 pb-2 text-lg font-md text-wine'>
            If you don't hear back from us, don't be discouraged. We're a super small team and
            bringing people on to our team is something we take very seriously. We still think
            you're amazing and beautiful. You're always welcome to reapply later. Unless we think
            ~~INSERT BAND HERE~~ sucks, then you might be out of luck.{' '}
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
            ;)
          </p>

          <p className='my-4 pb-2 text-lg font-md text-wine'>👩‍🍳 💖 🍩,</p>

          <p className='mt-4 mb-0 pb-0 text-lg text-wine font-bold italic'>– The PB Team</p>
          <ul className='list-none mt-4 '>
            <li className='my-2'>
              {' '}
              <Link href={'/careers'} className='text-blue underline text-md'>
                Back to all job postings →
              </Link>
            </li>
            <li className='my-2'>
              {' '}
              <Link href={'/about'} className='text-blue underline text-md'>
                Daydream about us →
              </Link>
            </li>
            <li className='my-2'>
              {' '}
              <a
                href={'https://youtube.com/playlist?list=PLR7uWMos1NkvOhSzaTR8-0vwc8MDBuylm'}
                className='text-blue underline text-md hover:text-opacity-80'
              >
                Watch a playlist of trippy music videos we've curated →
              </a>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default SubmissionConfirmation
