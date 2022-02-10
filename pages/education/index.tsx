import { getAllProjectFiles } from '@lib/api_projectFile'
import Education_Header from '@education/Education_Header'
// import Education_Recent from '@education/Education_Recent'
import Education_MadeToOrder from '@education/Education_MadeToOrder'
import Education_FromScratch from '@education/Education_FromScratch'
import Education_ProjectFiles from '@education/Education_ProjectFiles'
import Education_TutorialRequests from '@education/Education_TutorialRequests'
import ProjectFile from 'types/projectFile'
import Spotify_NowPlaying from '@parts/Spotify_NowPlaying'
import Spotify_TopTracks from '@parts/Spotify_TopTracks'
import Spotify_Playlist from '@parts/Spotify_Playlist'
type Props = {
  allProjectFiles: ProjectFile[]
}
function EducationPage({ allProjectFiles }: Props) {
  return (
    <main className='max-w-screen overflow-x-hidden' id='educationPage'>
      <Education_Header />
      <Education_ProjectFiles projectFiles={allProjectFiles} />
      <Spotify_Playlist playlistID={'3Ga7aZmRtBi3sLFbJ2Tz4e'} />
      {/* <Spotify_NowPlaying /> */}
      {/* <Spotify_TopTracks /> */}
      {/* <Education_Recent /> */}
      <Education_FromScratch />
      <Education_MadeToOrder />
      <Education_TutorialRequests />
    </main>
  )
}
export default EducationPage

export const getStaticProps = async () => {
  const allProjectFiles = getAllProjectFiles([
    'slug',
    'title',
    'active',
    'subtitle',
    'coverImage',
    'category',
  ])

  return {
    props: { allProjectFiles },
  }
}
