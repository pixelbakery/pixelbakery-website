import mail from '@sendgrid/mail'

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

export default async function sendCroissant(req, res) {
  const body = JSON.parse(req.body)

  const message = `

<span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">A new onboarding form has been submitted.</span>

 
  `

  await mail.send({
    to: `${body.email}`,
    from: {
      email: 'croissants@pixelbakery.com',
      name: 'Pixel Fakery',
    },
    subject: `${body.subject}`,

    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  })

  res.status(200).json({ status: 'Ok' })
}
