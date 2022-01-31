function Video({ ...props }) {
  return (
    <video
      autoPlay={props.autoPlay}
      poster={props.poster}
      muted={props.muted}
      playsInline={props.playsInline}
      controls={props.controls}
    >
      <source src={props.src} type='video/mp4' />
    </video>
  )
}
export default Video
