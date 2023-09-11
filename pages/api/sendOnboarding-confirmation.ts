/* eslint-disable no-unused-vars */
import mail from '@sendgrid/mail'

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

export default async function sendJobApplication(req, res) {
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
