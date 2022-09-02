import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'

type spotifyPlaylist = {
  playlistID: string
}
function About_Team_SpotifyPlaylist({ playlistID }: spotifyPlaylist) {
  return (
    <InnerWrapper className='mt-12'>
      <iframe
        className='rounded-xl'
        src={`https://open.spotify.com/embed/playlist/${playlistID}`}
        width='100%'
        height='485'
        frameBorder='0'
        allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
      />
    </InnerWrapper>
  )
}

export default About_Team_SpotifyPlaylist
