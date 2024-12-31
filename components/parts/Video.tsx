import Lead from '@typography/Lead'
import dynamic from 'next/dynamic'
import cn from 'classnames'

const ReactPlayer = dynamic(() => import('react-player/lazy'), {
  ssr: false,
  loading: () => (
    <div className='relative flex flex-col justify-center w-full aspect-16/9 bg-wine-100 py-96'>
      <p className='self-center text-4xl font-extrabold text-center text-wine'>Loading...</p>
    </div>
  ),
})

interface VideoProps {
  url: string
  title?: string
  autoPlay?: boolean
  poster?: string
  loop?: boolean
  muted?: boolean
  playsInline?: boolean
  controls?: boolean
  caption?: string
  light?: any
  className?: string
  useCDN?: boolean
  dummy?: boolean
}

function Video({
  url,
  title,
  autoPlay,
  poster,
  loop,
  muted,
  playsInline,
  controls,
  caption,
  light,
  className,
  useCDN,
}: VideoProps) {
  return (
    <div className='w-full h-full'>
      {title && (
        <div className='mt-12'>
          <Lead color='blue-dark' noMargins className='pb-2 mb-2 '>
            {title}
          </Lead>
        </div>
      )}
      <div className={cn(className || 'w-full aspect-w-16 aspect-h-9')}>
        <ReactPlayer
          url={useCDN ? `${process.env.NEXT_PUBLIC_IMG_PREFIX}${url}` : url}
          autoPlay={autoPlay || false}
          playing={autoPlay || false}
          poster={poster ? `${process.env.NEXT_PUBLIC_IMG_PREFIX}${poster}` : ''}
          light={light}
          width='100%'
          height='100%'
          loop={loop || false}
          muted={muted !== undefined ? muted : true}
          playsInline={playsInline !== undefined ? playsInline : true}
          controls={controls !== undefined ? controls : true}
          className='w-full videoWrapper'
          config={{
            vimeo: {
              playerOptions: {
                playsInline: true,
              },
            },
          }}
        />
        {caption && (
          <em className='max-w-md pt-1 mx-auto text-sm font-medium leading-none -mt-7 mb-14 text-blue-dark'>
            {caption}
          </em>
        )}
      </div>
    </div>
  )
}

export default Video
