import mail from '@sendgrid/mail'
import fs from 'fs'
import { join } from 'path'
mail.setApiKey(process.env.SENDGRID_API_KEY)
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '15mb',
    },
  },
}
const peopleDirectory = join(process.cwd(), '/public/')

export default async function sendOnboarding(req, res) {
  const body = JSON.parse(req.body)

  const fs = require('fs')
  const pathToAttachment = join(peopleDirectory, 'attachment.pdf')
  const attachment = fs.readFileSync(pathToAttachment).toString('base64')
  console.log(body.base64File)
  await mail.send({
    to: `jordan@pixelbakery.com`,
    from: {
      email: 'careers@pixelbakery.com',
      name: 'Pixel Bakery Robot',
    },
    subject: `Job Application: ${body.first_name} ${body.last_name} – ${body.position}`,
    templateId: 'd-9c9d902a4d9f49da8d65e2176f582f23',
    dynamicTemplateData: {
      about_personal: `${body.about_personal}`,
      about_professional: `${body.about_professional}`,
      address_line_1: `${body.address_line_1}`,
      address_line_2: `${body.address_line_2}`,
      authorized: `${body.authorized}`,
      band: `${body.band}`,
      commitment: `${body.commitment}`,
      education: `${body.education}`,
      email: `${body.email}`,
      first_name: `${body.first_name}`,
      hear: `${body.hear}`,
      hours: `${body.hours}`,
      last_name: `${body.last_name}`,
      middle_name: `${body.middle_name}`,
      pay: `${body.pay}`,
      phone_number: `${body.phone_number}`,
      position: `${body.position}`,
      pronoun: `${body.pronoun}`,
      social: `${body.social}`,
      website: `${body.website}`,
      why: `${body.why}`,
      zodiac: `${body.zodiac}`,
    },
    attachments: [
      {
        content: `${body.base64File}`,
        filename: 'attachment.pdf',
        type: 'application/pdf',
        disposition: 'attachment',
      },
    ],
  })

  console.log(res.status(200).json({ status: 'Ok' }))
}
