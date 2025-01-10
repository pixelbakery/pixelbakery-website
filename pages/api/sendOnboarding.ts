import mail from '@sendgrid/mail'
import type { NextApiRequest } from 'next'

const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY
if (!apiKey) {
  throw new Error('SendGrid API key is not defined')
}

mail.setApiKey(apiKey)

export default async function sendOnboarding(req: NextApiRequest) {
  let sendTo
  if (process.env.NODE_ENV === 'development') sendTo = 'jordan@pixelbakery.com'
  else sendTo = 'hello@pixelbakery.com'

  const body = JSON.parse(req.body)
  const message = `
  <p>A new onboarding form has been submitted. Here are the details:</p>
  <ul>
  <li><strong>name: </strong>${body.name}</li>
  <li><strong>company:</strong> ${body.company}</li>
  <li><strong>email:</strong> ${body.email}</li>
  <li><strong>website:</strong> ${body.website}</li>
  <li><strong>subject: </strong> ${body.subject}</li>
  <li><strong>referral: </strong>${body.referral}</li>
  </ul>
  <p><strong>message:</strong></p>
  <p>${body.message}</p>
  `

  await mail.send({
    to: `${sendTo}`,
    from: {
      email: 'hello@pixelbakery.com',
      name: 'Pixel Bakery Robot',
    },
    replyTo: {
      email: `${body.email}`,
      name: `${body.name}`,
    },

    subject: `Onboarding Form: ${body.name}`,
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  })
}
