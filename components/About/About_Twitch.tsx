import React, { useEffect } from 'react'
import ReactPlayer from 'react-player/twitch'

function About_Twitch() {
  return (
    <section className='relative mt-48 mb-4 h-full'>
      <div className='relative z-10 max-w-8xl'>
        <div
          id='twitch-title'
          className='z-20 absolute bg-pink-light px-20 max-w-3xl place-self-center'
        >
          <h2 className='text-7xl text-peach -mt-12'>Peep on us</h2>
          <p className='pb-10 text-pink leading-relaxed font-semibold text-lg'>
            Working from home? Pretend you&apos;re not and vibe with us. Can&apos;t sleep? Cozy up
            with us in your bed and listen to the ryhtemic sounds of computers clicking.{' '}
            <a className='text-blue underline' href='twitch.tv/pixelbakery' target='_blank'>
              Follow us on twitch
            </a>{' '}
            because we&apos;re superficial and want to get affiliate status.
          </p>
        </div>

        <div className='aspect-w-9 md:aspect-w-16 md:aspect-h-9 '>
          <ReactPlayer
            url='https://www.twitch.tv/pixelbakery'
            controls
            autoPlay={true}
            muted={true}
            width={'100%'}
            height={'100%'}
          />
        </div>
      </div>
    </section>
  )
}
export default About_Twitch
