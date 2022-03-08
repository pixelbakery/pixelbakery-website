import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)
export const config = {
  api: {
    bodyParser: false,
  },
}

export default async function sendMail(req: any, res: any) {
  const body = JSON.parse(req.body)

  await mail.send({
    to: `${body.email}`,
    from: {
      email: 'careers@pixelbakery.com',
      name: 'Pixel Bakery Robot',
    },
    subject: `Application Submitted – ${body.position}`,
    templateId: 'd-d5c8482409ad476eb1c58b546f399f98',
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
  })
}
