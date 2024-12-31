/* eslint-disable no-unused-vars */
import mail from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'
const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY
if (!apiKey) {
  throw new Error('SendGrid API key is not defined')
}

mail.setApiKey(apiKey)

export default async function sendJobApplication(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body)
  let sendTo
  if (process.env.NODE_ENV === 'development') {
    sendTo = 'jordan@pixelbakery.com'
  } else {
    sendTo = `${body.email}`
  }
  await mail.send({
    to: `${sendTo}`,
    from: {
      email: 'hello@pixelbakery.com',
      name: 'Pixel Bakery Robot',
    },

    templateId: 'd-4bafcb35e265482f816a7503cd04e7bb',
  })
}
