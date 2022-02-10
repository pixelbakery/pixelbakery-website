import useSWR from 'swr'

import fetcher from 'lib/fetcher'
import { TopTracks } from 'lib/types'
import Track from '@parts/Spotify_Track'
import H2 from '@typography/H2'
import Image from 'next/image'
export default function Spotify_Playlist({ playlistID }) {
  async function getPlaylist(data) {
    const res = await fetch(data)
    return res.json()
  }
  const { data } = useSWR('/api/playlists', fetcher)

  if (!data) {
    return null
  }

  return (
    <div>
      <H2>{data.name}</H2>
      <div className='w-64 h-64'>
        {' '}
        <Image src={data.temp} layout='responsive' height={300} width={300} />
      </div>
      <ul>
        {data.tracksSelected.map((track, index) => (
          <li>
            <img src={track.albumArt} className='h-16 w-16' />
            {track.title}, {track.artist}, {track.songUrl}
          </li>
        ))}
      </ul>
    </div>
  )
}
// https://accounts.spotify.com/authorize?client_id=e77c8ff36fab48c597e7dffeaa1cf2d1&response_type=code&redirect_uri=http%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing%20user-top-read%20user-read-recently-played%20playlist-read-collaborative

// http://localhost:3000/?code=AQBIOivLoVU3ASqc07QfHia5rXGx0poxx5Hw6a4qIpJH-Tcojev_YYI2X3CTPfG4Jx4E6O_Iby5fn9Nll7ug_nhMGd_jllq331iEBQy-IN0MQOQkFFFfO3HkhPFlWGbmBRyDl5ynqrdX9ZGk-Q0oS9y2J8B1pJKxZbHrAakln8-BCYU2XhQDrk8WXQvBX-eeLxVW5G3rz7unDcRkdiJ7MzxMsUvYwimOBDAXosb6GVlU1j10Yt2MlCwSzMH-5LSTMMLNZrmT-7nKdzCfjHUZVun_n4uPUNdfHmciIjw

// {"access_token":"BQCNU9dmQYsQS7RjFDaYMn8OQutQuEFGcvopwQvUkJp9P1wPYOYjHkGqeYtaEw3qMItCY7jAGBw6GrC5XkPiXkZeeBH0lut7tSn4Oy10msKosrf2r9bWE6FT2UUY2iYavOUTicv-RwCqDxi02ZeMuvo7X8MlR2PnNw","token_type":"Bearer","expires_in":3600,"refresh_token":"AQD_Bh00JjVd8lxydlDlEUHtjQVP3K2YaE0NR4ZawXvxtfx7Gmh0sWaTSjxwMRvKNxaU2KUcP1XhqRvAzNLLdPzFjZOH6wMeuVlq0sQz-57n9M_XpGN-6A_RsU7yhkM0Hx4","scope":"playlist-read-collaborative user-read-currently-playing user-read-recently-played user-top-read"}%
// jordanlambrecht@jordans-mbp ~ %
