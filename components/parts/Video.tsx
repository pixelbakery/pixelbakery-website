import Lead from '@typography/Lead'
import ReactPlayer from 'react-player/lazy'
import cn from 'classnames'
interface video {
  url: string
  title?: string
  autoPlay?: boolean
  poster?: string
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
  controls?: boolean
  caption?: string
  className?: string
}
function Video({ url, ...props }: video) {
  return (
    <div className='h-full w-full'>
      {props.title != undefined ? (
        <div className='mt-12'>
          {' '}
          <Lead color='blue-dark mb-2 pb-2' noMargins={true}>
            {props.title}
          </Lead>
        </div>
      ) : (
        ''
      )}
      <div
        className={cn(
          { ['w-full markdown-video aspect-16/9']: props.className === undefined },
          { [`${props.className}`]: props.className },
        )}
      >
        <ReactPlayer
          url={url}
          autoPlay={props.autoPlay ? props.autoPlay : false}
          playing={props.autoPlay ? props.autoPlay : false}
          poster={props.poster ? `${process.env.NEXT_PUBLIC_IMG_PREFIX}${props.poster}` : ''}
          width={'100%'}
          height={'100%'}
          loop={props.loop ? props.loop : false}
          muted={props.muted ? props.muted : false}
          playsinline={props.playsInline ? props.playsInline : false}
          controls={props.controls ? props.controls : true}
          className={'w-full videoWrapper'}
          config={{
            vimeo: {
              playerOptions: {
                playsinline: true,
              },
            },
          }}
        />

        {props.caption != undefined ? (
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
