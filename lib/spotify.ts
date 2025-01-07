const client_id = process.env.SPOTIFY_CLIENT_ID
const client_secret = process.env.SPOTIFY_CLIENT_SECRET
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

const PLAYLISTS_ENDPOINT = `https://api.spotify.com/v1/playlists/`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

// https://leerob.io/blog/spotify-api-nextjs
const getAccessToken = async () => {
  if (!refresh_token) {
    throw new Error('Spotify refresh token is missing. Please check your environment variables.')
  }
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

export const getPlaylist = async () => {
  const { access_token } = await getAccessToken()
  const SELECTED_PLAYLIST_ENDPOINT = PLAYLISTS_ENDPOINT + `5emLQhY7DYenV7AUbcc2aZ`
  return fetch(SELECTED_PLAYLIST_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
