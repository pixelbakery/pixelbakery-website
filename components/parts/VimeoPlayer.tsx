import Vimeo from '@u-wave/react-vimeo'

function Video({ url, ...props }) {
  return (
    <div className='markdown-video aspect-16/9 my-4 xl:my-8 max-w-6xl mx-auto'>
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
