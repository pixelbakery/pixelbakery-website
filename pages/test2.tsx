import InnerWrapper from '@parts/InnerWrapper'
import NoIndex from '@parts/NoIndex'
import PageSection from '@parts/PageSection'
import React, { useState, useRef } from 'react'
// import Vimeo from 'react-player/vimeo'
import ReactPlayer from 'react-player/vimeo'
// import { VimeoAPI } from '@lib/vimeo'
const videos = [
  {
    title: 'video 1',
    src: '723166738',
  },
  {
    title: 'video 2',
    src: '722982678',
  },
  {
    title: 'video 3',
    src: '722708366',
  },
]

function Test() {
  const [videoID, setVideoID] = useState(videos[0].src)

  function handleVideoID(src) {
    setVideoID(src)
  }
  // VimeoAPI
  // const Video = ({ ...title }) => {
  //   return (
  //     <div className='bg-blue'>
  //       <ReactPlayer
  //         // ref={videoRef}
  //         url={`https://vimeo.com/${videoID as string}`}
  //         autoplay={false}
  //         showPortrait={true}
  //         responsive={true}
  //         controls={true}
  //       />
  //     </div>
  //   )
  // }

  return (
    <InnerWrapper>
      <NoIndex />
      <PageSection>
        <div className=''>
          {/* <Video videoID={videoID} /> */}
          <div> {videoID}</div>
          <div className='flex gap-x-6 mt-4'>
            <button onClick={() => handleVideoID(videos[0].src)}>Video 01</button>
            <button onClick={() => handleVideoID(videos[1].src)}>Video 02</button>
            <button onClick={() => handleVideoID(videos[2].src)}>Video 03</button>
          </div>
        </div>
      </PageSection>
    </InnerWrapper>
  )
}

export default Test
