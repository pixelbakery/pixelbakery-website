// 👇️ ts-nocheck ignores all ts errors in the file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import Image from 'next/image'
import useSWR from 'swr'
import { Playlist } from '@types'
import fetcher from '@lib/fetcher'
import { pluralize } from '@lib/helpers'
import H3 from '@typography/H3'

export default function Spotify_Playlist() {
  const { data } = useSWR<Playlist>('/api/playlists', fetcher)

  if (!data) {
    return null
  }
  return (
    <div className='flex flex-col h-full px-4 py-4 bg-white'>
      <div className='flex flex-col gap-12 xl:flex-row xl:my-4 xl:py-4'>
        <a
          href={data.external_urls.spotify}
          className={'hidden xl:block cursor-pointer'}
          target='_blank'
          rel='noreferrer'
        >
          <div className='absolute w-32 h-32 overflow-hidden xl:relative'>
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
            <H3 color='peach' className='pt-0 mt-0 mb-1 md:mb-0 2xl:mb-0'>
              {data.name}
            </H3>
            <p className='pt-0 pb-0 mt-0 mb-0 text-lg italic font-medium text-wine-400 xl:mb-0'>
              {' '}
              {data.description ? data.description : ''}
            </p>
            <a
              className='inline-block px-8 py-1 my-1 font-semibold transition-all duration-300 ease-in-out bg-peach text-cream rounded-xl drop-shadow-sm hover:drop-shadow-xs hover:scale-98'
              href={data.external_urls.spotify}
              target='_blank'
              rel='noopener noreferrer'
            >
              Play <span className='my-auto ml-3 '>▶</span>
            </a>
          </div>
          <p className='py-0 my-1 text-xs  md:text-sm xl:text-md text-wine'>
            {pluralize(data.followers.total, 'follower')}, {pluralize(data.tracks.total, 'song')},{' '}
            {data.albumLength}
          </p>
        </div>
      </div>
      <div className='h-full py-3 overflow-auto bg-cream'>
        <div className='h-full px-1 overflow-y-scroll changeScrollbar bg-cream xl:px-4 '>
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
                    <div className='relative w-12 h-12 overflow-hidden'>
                      <Image
                        src={track.albumArt}
                        width={12}
                        height={12}
                        unoptimized={true}
                        quality={25}
                        className='object-cover w-12 h-12'
                        alt={`${track.artist} – ${track.album}`}
                      />
                    </div>

                    <div className='flex flex-col justify-center'>
                      <p className='py-0 mt-0 mb-1 text-sm leading-none line-clamp-2 text-wine xl:text-md'>
                        {track.title}
                      </p>
                      <span className='py-0 my-0 text-xs leading-none text-opacity-75 line-clamp-1 text-wine'>
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
        <div className='h-full overflow-y-scroll bg-blue'>
     
        </div>
      </div> */}
    </div>
  )
}
