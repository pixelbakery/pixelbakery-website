import { getByIdVimeo } from 'lib/vimeo2'
let Vimeo = require('vimeo').Vimeo
let client = new Vimeo('{client_id}', '{client_secret}', '{access_token}')

export default async function handler(req, res) {
  client.request(
    {
      method: 'GET',
      // path: uri,
      query: {
        privacy: {
          view: 'password',
        },
        password: 'helloworld',
      },
    },
    function (error, body, status_code, headers) {
      // console.log(uri + ' will now require a password to be viewed on Vimeo.')
    },
  )

  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200')

  return res.status(200).json({})
}
