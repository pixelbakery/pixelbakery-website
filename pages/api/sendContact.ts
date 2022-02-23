import mail from '@sendgrid/mail'

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default async function sendOnboarding(req, res) {
  const body = JSON.parse(req.body)
  console.log('Sendgrid API: ', body.email)
  const message = `
  <p>A new onboarding form has been submitted. Here are the details:</p>
  <ul>
  <li><strong>name: </strong>${body.name}</li>
  <li><strong>company:</strong> ${body.entity}</li>
  <li><strong>email:</strong> ${body.email}</li>
  <li><strong>phone:</strong> ${body.phone}</li>
  <li><strong>subject: </strong> ${body.subject}</li>
  </ul>
  <p><strong>message:</strong></p>
  <p>${body.message}</p>
  `

  await mail.send({
    to: `hello@pixelbakery.com`,
    from: {
      email: 'hello@pixelbakery.com',
      name: 'Pixel Bakery Robot',
    },
    replyTo: `${body.email}`,
    subject: `Contact Form: ${body.name}`,

    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  })

  console.log(res.status(200).json({ status: 'Ok' }))
}
