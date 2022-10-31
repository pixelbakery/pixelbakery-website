import Lead from '@typography/Lead'
import ReactPlayer from 'react-player/lazy'
import cn from 'classnames'
import Loading from '@utility/Loading'
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
          { ['w-full  aspect-w-16 aspect-h-9']: props.className === undefined },
          { [`${props.className}`]: props.className },
        )}
      >
        <div className='w-full aspect-w-16 aspect-h-9'>
          <div className='z-0 absolute left-0 top-0  w-full h-[99%] bg-blue text-cream flex flex-col justify-center text-center text-lg'>
            🙃 Loading...
          </div>
        </div>
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
