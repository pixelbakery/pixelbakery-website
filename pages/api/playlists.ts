import type { NextApiRequest, NextApiResponse } from 'next'
import { getPlaylist } from 'lib/spotify'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await getPlaylist(playlistID)
  const { tracks, name, images } = await response.json()
  const cover = images.map((image) => ({
    url: image.url,
  }))

  cover.forEach((element) => {
    console.log(element.url)
  })
  const test = Object.entries(images)
    .slice(0, 0)
    .map(([key, url]) => {
      url: url
    })
  const test2 = test[0]
  console.log(test2)

  const result = Object.keys(images).map(function (key) {
    // Using Number() to convert key to number type
    // Using obj[key] to retrieve key value
    return images[key].url
  })
  const temp = result[0]

  console.log('asdgf', result[0])
  const tracksSelected = tracks.items.slice(0, 10).map((track) => ({
    artist: track.track.artists.map((_artist) => _artist.name).join(', '),
    albumArt: track.track.album.images[0].url,
    songUrl: track.track.external_urls.spotify,
    title: track.track.album.name,
  }))

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({ tracksSelected, name, images, cover, temp })
}

// https://developer.spotify.com/console/get-playlist/?playlist_id=5emLQhY7DYenV7AUbcc2aZ&market=&fields=&additional_types=

// https://developer.spotify.com/documentation/web-api/reference/#/operations/get-playlist
