// 👇️ ts-nocheck ignores all ts errors in the file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Image from 'next/image'
import useSWR from 'swr'
import { Playlist } from '@lib/types'
import fetcher from '@lib/fetcher'
import { pluralize } from '@lib/helpers'
import H3 from '@typography/H3'

export default function Spotify_Playlist() {
  const { data } = useSWR<Playlist>('/api/playlists', fetcher)

  if (!data) {
    return null
  }
  return (
    <div className='bg-white h-full py-4 flex flex-col px-4'>
      <div className='flex flex-col xl:flex-row gap-12 xl:my-4 xl:py-4'>
        <a
          href={data.external_urls.spotify}
          className={'hidden xl:block cursor-pointer'}
          target='_blank'
          rel='noreferrer'
        >
          <div className='absolute xl:relative w-32 h-32 overflow-hidden'>
            <Image
              src={data.albumCoverImage}
              alt='Pixel Bakery Spotify Playlist'
              fill={true}
              className='absolute object-cover object-center w-full h-full'
              placeholder='blur'
              blurDataURL={data.albumCoverImage}
              quality={25}
              unoptimized={true}
            />
          </div>
        </a>

        <div className='flex flex-col justify-end '>
          <div
            // href={data.external_urls.spotify}
            className={'cursor-pointer'}
            // target='_blank'
            // rel='noopener'
          >
            <H3 color='peach' className='mb-1 md:mb-0 2xl:mb-0 mt-0 pt-0'>
              {data.name}
            </H3>
            <p className='italic text-wine-400 xl:mb-0 text-lg font-medium mt-0 pt-0 mb-0 pb-0'>
              {' '}
              {data.description ? data.description : ''}
            </p>
            <a
              className='bg-peach  text-cream px-8 py-1 my-1 rounded-xl font-semibold drop-shadow-sm inline-block duration-300 transition-all ease-in-out hover:drop-shadow-xs hover:scale-98'
              href={data.external_urls.spotify}
              target='_blank'
              rel='noopener noreferrer'
            >
              Play <span className=' my-auto ml-3'>▶</span>
            </a>
          </div>
          <p className=' my-1 py-0 text-xs md:text-sm xl:text-md text-wine '>
            {pluralize(data.followers.total, 'follower')}, {pluralize(data.tracks.total, 'song')},{' '}
            {data.albumLength}
          </p>
        </div>
      </div>
      <div className='bg-cream py-3 h-full overflow-auto'>
        <div className='changeScrollbar h-full overflow-y-scroll bg-cream px-1 xl:px-4 '>
          <ul className='grid gap-1 xl:gap-2'>
            {data.tracksSelected.map((track, index) => (
              <li className='my-0' key={index}>
                <a
                  hrefLang={'en-US'}
                  href={track.songUrl}
                  target={'_blank'}
                  rel='noopener noreferrer'
                >
                  <div className='flex gap-1 xl:gap-x-4'>
                    <div className='relative h-12 w-12 overflow-hidden'>
                      <Image
                        src={track.albumArt}
                        width={12}
                        height={12}
                        unoptimized={true}
                        quality={25}
                        className='h-12 w-12 object-cover'
                        alt={`${track.artist} – ${track.album}`}
                      />
                    </div>

                    <div className='flex flex-col justify-center'>
                      <p className='line-clamp-2 text-wine mt-0 mb-1 py-0 leading-none text-sm xl:text-md'>
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
