import Lead from '@typography/Lead'
import Vimeo from '@u-wave/react-vimeo'

function Video({ url, ...props }) {
  return (
    <div className='markdown-video aspect-16/9 mt-8 mb-2 xl:my-12 max-w-6xl mx-auto'>
      {props.title != '' ? <Lead color='blue-dark'>{props.title}</Lead> : ''}
      <Vimeo
        video={props.videoID as string}
        muted={props.muted ? props.muted : false}
        playsInline={props.playsInline ? props.playsInline : true}
        autoplay={props.autoplay ? props.autoplay : false}
        showPortrait={props.showPortrait ? props.showPortrait : true}
        responsive={true}
        controls={props.controls ? props.controls : true}
        loop={props.loop ? props.loop : false}
        background={props.background ? props.background : false}
      />
    </div>
  )
}
export default Video
