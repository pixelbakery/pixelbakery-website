import H2 from '@typography/H2'
import Image from 'next/image'

import { useState } from 'react'

export default function Spotify_Playlist({ playlistID }) {
  const fetchData = async (playlistID) => {
    await fetch('/api/playlists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: playlistID }),
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res)
      })
  }
  const [data, setData] = useState<any>(fetchData(playlistID))

  return (
    <div>
      <div className='flex flex-row gap-24'>
        <div className='w-48 h-48'>
          {/* <Image src={data.albumCoverImage} layout='responsive' height={300} width={300} /> */}
          <h1> {data.albumcoverImage}</h1>
        </div>
        <div className='flex flex-col justify-end'>
          <H2 className='mb-0 2xl:mb-0'>{data.name}</H2>
          <p>{data.total} songs</p>
        </div>
      </div>
      <div>
        {/* <ul>
          {data.tracksSelected.map((track) => (
            <li>
              <a href={track.songUrl} target={'_blank'}>
                <div className='flex'>
                  <img src={track.albumArt} className='h-16 w-16' />
                  {track.title}, {track.artist},
                </div>
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  )
}
