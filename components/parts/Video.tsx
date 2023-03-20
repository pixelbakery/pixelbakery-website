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
          { ['w-full  aspect-w-16 aspect-h-9']: props.className === undefined },
          { [`${props.className}`]: props.className != undefined },
        )}
      >
        {/* <div className='w-full aspect-w-16 aspect-h-9'>
          <div className='z-0 absolute left-0 top-0  w-full h-[99%] bg-blue text-cream flex flex-col justify-center text-center text-lg'>
            🙃 Loading...
          </div>
        </div> */}
        <ReactPlayer
          url={url}
          autoPlay={props.autoPlay != undefined ? props.autoPlay : false}
          playing={props.autoPlay != undefined ? props.autoPlay : false}
          poster={
            props.poster != undefined ? `${process.env.NEXT_PUBLIC_IMG_PREFIX}${props.poster}` : ''
          }
          width={'100%'}
          height={'100%'}
          loop={props.loop != undefined ? props.loop : false}
          muted={props.muted != undefined ? props.muted : true}
          playsinline={props.playsInline != undefined ? props.playsInline : true}
          controls={props.controls != undefined ? props.controls : true}
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
