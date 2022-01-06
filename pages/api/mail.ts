import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function SendMail(req, res) {
  const body = JSON.parse(req.body)

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `

  await mail.send({
    to: 'jordan@pixelbakery.com',
    from: 'hello@pixelbakery.com',
    subject: 'New Message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  })

  res.status(200).json({ status: 'Ok' })
}
