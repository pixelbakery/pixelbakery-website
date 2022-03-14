import Vimeo from '@u-wave/react-vimeo'
import PropTypes from 'prop-types'

LogoAnimation_PastClients_Card.propTypes = {
  video: PropTypes.string,
  client: PropTypes.string,
}
function LogoAnimation_PastClients_Card({ video, client }) {
  return (
    <article>
      <div className='relative bg-peach w-full aspect-w-1 aspect-h-1 overflow-hidden'>
        <Vimeo
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
        />
      </div>
      <h3 className='text-wine-500 text-lg mt-3 font-medium'>Client: {client}</h3>
    </article>
  )
}
export default LogoAnimation_PastClients_Card
