import dynamic from 'next/dynamic'

import { CamelCaseToSentence } from '@lib'
import { InnerWrapper, PageSection } from '@parts'
import { H3 } from '@typography'
import { Loading } from '@utility'
import { Person} from '@/types/people'
// Dynamic import for Spotify playlist
const About_Team_SpotifyPlaylist = dynamic(() => import('@about/About_Team_SpotifyPlaylist'), {
  ssr: false,
  loading: () => (
    <div className={'relative h-100 w-100'}>
      <Loading />
    </div>
  ),
})

// Refactor props to use `Pick` for relevant fields
interface About_Team_Details_Props {
  frontMatter: Pick<
    Person,
    'name' | 'title' | 'headshotFun' | 'email' | 'phone' | 'socials' | 'details' | 'spotifyPlaylist' | 'signs'
  >
}


const About_Team_Details =({ frontMatter }: About_Team_Details_Props) => {
  const { details, signs, spotifyPlaylist } = frontMatter

  return (
    <PageSection id={'bio-details'}>
      <InnerWrapper>
        <div className='grid grid-cols-2 gap-12 mx-auto md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-y-6 gap-x-12 xl:gap-x-8 w-fit'>
          {details?.map((detail, index) => {
            const key = Object.keys(detail)[0]
            const value = detail[key]
            return (
              <div className='col-span-1 w-full ' key={index}>
                <H3 className='mb-1 lg:mb-1 lg:pb-0 text-xl xs:text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-x2l 2xl:text-2xl' color='peach' overrideSizes>
                  {CamelCaseToSentence(key)}
                </H3>
                <p className='mt-0 pt-0 text-md text-wine'>{value}</p>
              </div>
            )
          })}
          {signs && (
            <div className='col-span-1 w-fit'>
              <H3 className='mb-1 lg:mb-1 lg:pb-0 text-xl xs:text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-x2l 2xl:text-2xl' color='peach' overrideSizes>
                Signs
              </H3>
              <ul className='mt-0 flex flex-col gap-x-4 text-lg text-wine'>
                <li>☉ {signs.sun}</li>
                <li>↑ {signs.rising}</li>
                <li>☽ {signs.moon}</li>
              </ul>
            </div>
          )}
        </div>
        <div>{spotifyPlaylist && <About_Team_SpotifyPlaylist playlistID={spotifyPlaylist} />}</div>
      </InnerWrapper>
    </PageSection>
  )
}

export default About_Team_Details
