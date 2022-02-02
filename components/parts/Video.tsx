import ReactPlayer from 'react-player'

function Video({ url, ...props }) {
  return (
    <div className='aspect-16/9'>
      <ReactPlayer
        url={url}
        autoPlay={props.autoPlay ? props.autoPlay : false}
        poster={props.poster}
        width={'100%'}
        height={'100%'}
        loop={props.loop ? props.loop : false}
        muted={props.muted ? props.muted : false}
        playsInline={props.playsInline ? props.playsInline : false}
        controls={props.controls ? props.controls : true}
      />
    </div>
  )
}
export default Video
