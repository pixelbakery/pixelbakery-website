import ReactPlayer from 'react-player/lazy'
import Loading from '@utility/Loading'

interface Card {
  video: string
  client: string
}
function LogoAnimation_PastClients_Card({ video, client }: Card) {
  return (
    <article>
      <div className='relative  w-full aspect-h-1 aspect-w-1 overflow-hidden'>
        <ReactPlayer
          url={`${video}`}
          autoPlay={true}
          loop={true}
          volume={0}
          playing={true}
          muted={true}
          playsInline={true}
          width='100%'
          height='100%'
          controls={false}
          className='absolute block top-0 left-0 right-0 bottom-0 scale-101'
        />
        <Loading />
        {/* <Vimeo
          video={video}
          autoplay={true}
          loop
          muted
          showPortrait
          background
          dnt
          controls={false}
          responsive={true}
          className=' object-cover w-full h-full'
        /> */}
      </div>
      <h3 className='text-wine text-lg mt-3 font-normal italic'>{client}</h3>
    </article>
  )
}
export default LogoAnimation_PastClients_Card
