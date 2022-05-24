import H3 from '@typography/H3'
import Lead from '@typography/Lead'
import Vimeo from '@u-wave/react-vimeo'

function Video({ url, ...props }) {
  return (
    <div className='markdown-video aspect-16/9 mt-8 mb-2 xl:my-12 max-w-6xl mx-auto'>
      {props.title != '' ? <Lead color='blue-dark'>{props.title}</Lead> : ''}
      <Vimeo
        video={props.videoID as string}
        autoplay={false}
        showPortrait={true}
        responsive={true}
      />
    </div>
  )
}
export default Video
