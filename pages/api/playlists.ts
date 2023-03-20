import { getPlaylist } from 'lib/spotify'
import { msToTime } from '@lib/helpers'

export default async function handler(req, res) {
  const response = await getPlaylist()
  const { tracks, name, description, images, external_urls, followers } = await response.json()

  const albumCoverImage = Object.keys(images).map(function (key) {
    return images[key].url
  })[0]
  let duration = 0
  tracks.items.map((track) => {
    duration += track.track.duration_ms
  })
  const albumLength = msToTime(duration)

  const tracksSelected = tracks.items.map((track) => ({
    artist: track.track.artists.map((_artist) => _artist.name).join(', '),
    albumArt: track.track.album.images[0].url,
    songUrl: track.track.external_urls.spotify,
    album: track.track.album.name,
    title: track.track.name,
  }))

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({
    tracksSelected,
    tracks,
    name,
    images,
    external_urls,
    description,
    albumCoverImage,
    followers,
    albumLength,
  })
}
