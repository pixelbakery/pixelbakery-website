import { getPlaylist } from 'lib/spotify'

export default async function handler(req, res) {
  const { id } = req.body

  const response = await getPlaylist(id)
  const { tracks, name, images } = await response.json()

  const total = tracks.total

  const albumCoverImage = Object.keys(images).map(function (key) {
    return images[key].url
  })[0]

  const tracksSelected = tracks.items.map((track) => ({
    artist: track.track.artists.map((_artist) => _artist.name).join(', '),
    albumArt: track.track.album.images[0].url,
    songUrl: track.track.external_urls.spotify,
    title: track.track.album.name,
  }))

  // res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({ id, total, tracksSelected, tracks, name, images, albumCoverImage })
}

// https://developer.spotify.com/console/get-playlist/?playlist_id=5emLQhY7DYenV7AUbcc2aZ&market=&fields=&additional_types=

// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist
