import Script from 'next/script'
import ReactPlayer from 'react-player'

function Video({ url, ...props }) {
  return (
    <>
      <Script src='https://player.vimeo.com/api/player.js' />
      <div className='markdown-video aspect-16/9'>
        <ReactPlayer
          url={url}
          autoPlay={props.autoPlay ? props.autoPlay : false}
          poster={`https://cdn.pixelbakery.com/${props.poster}`}
          width={'100%'}
          height={'100%'}
          loop={props.loop ? props.loop : false}
          muted={props.muted ? props.muted : false}
          playsInline={props.playsInline ? props.playsInline : false}
          controls={props.controls ? props.controls : true}
        />
        {props.caption ? (
          <em className='max-w-md mx-auto -mt-7 pt-1 mb-14 text-sm leading-none text-blue-dark font-medium '>
            {' '}
            {props.caption}
          </em>
        ) : (
          ''
        )}
      </div>
    </>
  )
}
export default Video
