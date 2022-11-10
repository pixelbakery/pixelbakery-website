import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Spotify_Playlist from '@parts/Spotify_Playlist'

const About_Spotify = () => {
  return (
    <PageSection color='pink-lighter' className='h-screen' id='spotify'>
      <InnerWrapper className='h-full'>
        <Spotify_Playlist playlistID={'3Ga7aZmRtBi3sLFbJ2Tz4e'} />
      </InnerWrapper>
    </PageSection>
  )
}
export default About_Spotify
