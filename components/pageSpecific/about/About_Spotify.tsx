import { InnerWrapper, PageSection, Spotify_Playlist } from '@parts'

const About_Spotify = () => {
  return (
    <PageSection
      color='pink-lighter'
      className='h-screen my-4 lg:py-32'
      id='spotify'
      disableSpacing={true}
    >
      <InnerWrapper className='h-full py-3' disableSpacing={true}>
        <Spotify_Playlist />
      </InnerWrapper>
    </PageSection>
  )
}
export default About_Spotify
