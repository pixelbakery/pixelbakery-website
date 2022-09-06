import Lead from '@typography/Lead'
import ReactPlayer from 'react-player'

function Video({ url, ...props }) {
  return (
    <div>
      {props.title != '' ? <Lead color='blue-dark'>{props.title}</Lead> : ''}
      <div className='markdown-video aspect-16/9'>
        <ReactPlayer
          url={url}
          autoPlay={props.autoPlay ? props.autoPlay : false}
          poster={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${props.poster}`}
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
    </div>
  )
}
export default Video
