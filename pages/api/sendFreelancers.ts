/* eslint-disable no-unused-vars */
import mail from '@sendgrid/mail'
import type { NextApiRequest, NextApiResponse } from 'next'

const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY
if (!apiKey) {
  throw new Error('SendGrid API key is not defined')
}

mail.setApiKey(apiKey)

export default async function sendJobApplication(req: NextApiRequest, res: NextApiResponse) {
  let sendTo
  if (process.env.NODE_ENV === 'development') {
    sendTo = 'jordan@pixelbakery.com'
  } else {
    sendTo = 'hello@pixelbakery.com'
  }
  const body = JSON.parse(req.body)

  await mail.send({
    to: `${sendTo}`,
    from: {
      email: 'careers@pixelbakery.com',
      name: 'Pixel Bakery Robot',
    },
    replyTo: {
      email: `${body.email}`,
      name: `${body.name}`,
    },
    subject: `Freelancer Application: ${body.name}`,
    templateId: 'd-6bd8e8e0bc41454f8a28705be9d8cc43',
    dynamicTemplateData: {
      about: `${body.about}`,
      name: `${body.name}`,
      title: `${body.title}`,
      address: `${body.address}`,
      experience: `${body.experience}`,
      bird: `${body.bird}`,
      rate: `${body.rate}`,
      email: `${body.email}`,
      referral: `${body.referral}`,
      phone: `${body.phone}`,
      pronoun: `${body.pronoun}`,
      social: `${body.social}`,
      website: `${body.website}`,
    },
  })
}
