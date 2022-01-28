import Head from 'next/head'
import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'

const ReactTwitchEmbedVideo = dynamic(() => import('react-twitch-embed-video'), {
  ssr: false,
})
// import ReactPlayer from 'react-player'
// import { ReactTwitchEmbedVideo } from 'react-twitch-embed-video'
// @ts-ignore
//player.twitch.tv/js/embed/v1.js

function About_Twitch() {
  return (
    <section className='relative mt-48 mb-4 h-full' id='twitch'>
      <Head>
        <script src='https://player.twitch.tv/js/embed/v1.js' />
      </Head>
      <div className='relative z-10 max-w-8xl'>
        <div
          id='twitch-title'
          className='z-20 absolute bg-pink-light px-20 max-w-3xl place-self-center'
        >
          <h2 className='text-7xl text-peach -mt-12'>Peep on us</h2>
          <p className='pb-10 text-pink leading-relaxed font-semibold text-lg'>
            Working from home? Pretend you&apos;re not and vibe with us. Can&apos;t sleep? Cozy up
            with us in your bed and listen to the ryhtemic sounds of computers clicking.{' '}
            <a className='text-blue underline' href='https://twitch.tv/pixelbakery' target='_blank'>
              Follow us on twitch
            </a>
            &nbsp;because we&apos;re superficial and want to get affiliate status.
          </p>
        </div>

        <div className='aspect-w-9 md:aspect-w-16 md:aspect-h-9 '>
          <ReactTwitchEmbedVideo
            allowfullscreen={true}
            autoplay
            channel='pixelbakery'
            layout='video'
            muted
            width={'100%'}
            height={'100%'}
            onPlay={function noRefCheck() {}}
            onReady={function noRefCheck() {}}
          />
        </div>
      </div>
    </section>
  )
}
export default About_Twitch
