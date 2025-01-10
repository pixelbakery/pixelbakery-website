import mail from '@sendgrid/mail'
import type { NextApiRequest } from 'next'

const apiKey = process.env.NEXT_PUBLIC_SENDGRID_API_KEY
if (!apiKey) {
  throw new Error('SendGrid API key is not defined')
}

mail.setApiKey(apiKey)

export default async function sendJobApplication(req: NextApiRequest) {
  const body = JSON.parse(req.body)

  await mail.send({
    to: `${body.email}`,
    from: {
      email: 'careers@pixelbakery.com',
      name: 'Pixel Bakery Robot',
    },

    subject: `Freelancer Application: ${body.name}`,
    templateId: 'd-2f3df831fdd04ac0b9a1baf71c141603',
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
