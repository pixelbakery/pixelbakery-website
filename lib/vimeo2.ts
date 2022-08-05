// const Token = '579f2cba698c659fa0c13b163ade2325'
// const VIMEO_API_TOKEN = process.env.VIMEO_API_TOKEN
const client_id = process.env.VIMEO_CLIENT_ID
const client_secret = process.env.VIMEO_API_SECRET
const VIMEO_ENDPOINT = `https://api.vimeo.com/videos/`
const TOKEN_ENDPOINT = 'https://api.vimeo.com/oauth/authorize/client'

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/json',
      Accept: 'application/vnd.vimeo.*+json;version=3.4',
    },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      scope: 'public',
    }),
  })
  // console.log(response.json)
  return response.json()
}

// const getAccessToken = async () => {
//   const response = await axios.get(`https://api.vimeo.com/videos/722982678`, {
//     headers: {
//       Authorization: `bearer ${'579f2cba698c659fa0c13b163ade2325'}`,
//       'Content-Type': 'application/json',
//       Accept: 'application/vnd.vimeo.*+json;version=3.4',
//     },
//   })

//   const mofifiedResponse = {
//     resp: response,
//   }

//   return mofifiedResponse
// }

export const getByIdVimeo = async () => {
  const { access_token } = await getAccessToken()
  const SELECTED_VIDEO_ENDPOINT = VIMEO_ENDPOINT + `722982678`
  return fetch(SELECTED_VIDEO_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
