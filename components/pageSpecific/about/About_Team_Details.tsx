import dynamic from 'next/dynamic'

import { CamelCaseToSentence } from '@lib'
import { InnerWrapper, PageSection } from '@parts'
import { H3, Lead } from '@typography'
import { Loading } from '@utility'

// Dynamic import for Spotify playlist
const About_Team_SpotifyPlaylist = dynamic(() => import('@about/About_Team_SpotifyPlaylist'), {
  ssr: false,
  loading: () => (
    <div className={'relative h-100 w-100'}>
      <Loading />
    </div>
  ),
})

// Define the structure for the frontMatter prop
interface TeamDetails {
  [key: string]: string
}

interface Signs {
  sun: string
  rising: string
  moon: string
}

interface FrontMatter {
  details: TeamDetails[]
  signs?: Signs
  spotifyPlaylist?: string
}

interface Props {
  frontMatter: FrontMatter
}

const About_Team_Details =({ frontMatter }: Props) => {
  const { details, signs, spotifyPlaylist } = frontMatter

  return (
    <PageSection id={'bio-details'}>
      <InnerWrapper>
        <div className='grid grid-cols-2 gap-12 mx-auto 2xl:grid-cols-4 gap-y-6 lg:gap-x-8 w-fit'>
          {details.map((detail, index) => {
            const key = Object.keys(detail)[0]
            const value = detail[key]
            return (
              <div className='col-span-1 w-fit' key={index}>
                <H3 className='mb-1 lg:mb-1 lg:pb-0 text-xl xs:text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-x2l 2xl:text-3xl' color='peach'>
                  {CamelCaseToSentence(key)}
                </H3>
                <p className='mt-0 pt-0 text-md text-wine'>{value}</p>
              </div>
            )
          })}
          {signs && (
            <div className='col-span-1 w-fit'>
              <H3 className='mb-1 lg:mb-1 lg:pb-0 text-xl xs:text-xl sm:text-xl md:text-xl lg:text-2xl xl:text-x2l 2xl:text-3xl' color='peach'>
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
