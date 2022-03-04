import H2 from '@typography/H2'
import Image from 'next/image'
import useSWR, { mutate } from 'swr'
import { Playlist } from '@lib/types'
import fetcher from '@lib/fetcher'
import { pluralize } from '@lib/helpers'
import Lead from '@typography/Lead'

export default function Spotify_Playlist({ playlistID }) {
  const { data } = useSWR<Playlist>('/api/playlists', fetcher)

  if (!data) {
    return null
  }
  return (
    <div className='bg-white h-full py-4 flex flex-col px-4'>
      <div className='flex flex-col md:flex-row gap-12 md:my-4 md:py-4'>
        <a
          href={data.external_urls.spotify}
          className={'hidden md:block cursor-pointer'}
          target='_blank'
          rel='noopener'
        >
          <div className='absolute md:relative w-64 h-64'>
            <Image
              src={data.albumCoverImage}
              layout='fill'
              objectFit='cover'
              blurDataURL={data.albumCoverImage}
              quality={25}
              className='w-full h-full absolute'
            />
          </div>
        </a>

        <div className='flex flex-col justify-end '>
          <a
            href={data.external_urls.spotify}
            className={'cursor-pointer'}
            target='_blank'
            rel='noopener'
          >
            <H2 color='peach' className='mb-1 md:mb-0 2xl:mb-0'>
              {data.name}
            </H2>
            <Lead className='mb-0 lg:mb-0'> {data.description ? data.description : ''}</Lead>
            <a
              className='bg-peach  text-cream px-8 py-1 my-1 rounded-xl font-semibold drop-shadow-sm inline-block duration-300 transition-all ease-in-out hover:drop-shadow-xs hover:scale-98'
              href={data.external_urls.spotify}
              target='_blank'
              rel='noopener'
            >
              Play <span className=' my-auto ml-3'>▶</span>
            </a>
          </a>
          <p className='text-xs md:text-md text-wine '>
            {pluralize(data.followers.total, 'follower')}, {pluralize(data.tracks.total, 'song')},{' '}
            {data.albumLength}
          </p>
        </div>
      </div>
      <div className='bg-cream py-3 h-full overflow-auto'>
        <div className='changeScrollbar h-full overflow-y-scroll bg-cream px-1 md:px-4 '>
          <ul className='grid gap-1 md:gap-2'>
            {data.tracksSelected.map((track) => (
              <li className='my-0'>
                <a href={track.songUrl} target={'_blank'} rel='noopener'>
                  <div className='flex gap-1 md:gap-x-4'>
                    <img src={track.albumArt} className='h-12 w-12' />

                    <div className='flex flex-col justify-center'>
                      <p className='line-clamp-2 text-wine mt-0 mb-1 py-0 leading-none text-sm md:text-md'>
                        {track.title}
                      </p>
                      <span className='line-clamp-1 my-0 py-0 leading-none text-wine text-opacity-75 text-xs'>
                        {track.artist} – {track.album}
                      </span>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* <div className='h-3/4'>
        <div className='h-full   bg-blue overflow-y-scroll'>
     
        </div>
      </div> */}
    </div>
  )
}
