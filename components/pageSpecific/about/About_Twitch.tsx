import Head from 'next/head'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'
import H2 from '@typography/H2'

import PageSection from '@parts/PageSection'
import Lead from '@typography/Lead'
import InnerWrapper from '@parts/InnerWrapper'
import Script from 'next/script'

const ReactTwitchEmbedVideo = dynamic(() => import('react-twitch-embed-video'), {
  ssr: false,
})
// import ReactPlayer from 'react-player'
// import { ReactTwitchEmbedVideo } from 'react-twitch-embed-video'
// @ts-ignore
//player.twitch.tv/js/embed/v1.js

function About_Twitch() {
  return (
    <section className='px-0 md:pt-48 pb-0 lg:pb-0' id='twitch'>
      <Head>
        <Script src='https://player.twitch.tv/js/embed/v1.js' />
      </Head>

      <InnerWrapper>
        <H2 color='peach' className=' lg:-mt-12'>
          Peep on us
        </H2>
        <Lead color='pink' className='pb-10 leading-tight'>
          Working from home? Pretend you&apos;re not and vibe with us. Can&apos;t sleep? Cozy up
          with us in your bed and listen to the rhythmic sounds of computers clicking.
          <br />
          <br />
          <a className='text-blue underline' href='https://twitch.tv/pixelbakery' target='_blank'>
            Follow us on twitch
          </a>
          &nbsp;because we&apos;re superficial and want to get affiliate status.
        </Lead>
      </InnerWrapper>

      <div className='  z-10 max-w-8xl'>
        <div
          id='twitch-title'
          className='z-20 lg:absolute bg-pink-light px-0 lg:px-20 w-full max-w-3xl place-self-center'
        ></div>
        <div className=''>
          <div className=' w-full aspect-w-16 aspect-h-9 bg-blue'>
            <div className=' '>
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
        </div>
      </div>
    </section>
  )
}
export default About_Twitch
