import mail from '@sendgrid/mail'

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)
// eslint-disable-next-line no-unused-vars
export default async function sendOnboarding(req, res) {
  const body = JSON.parse(req.body)
  const message = `
  <p>A new logo animation requesst form has been submitted. Here are the details:</p>
  <ul>
  <li><strong>name: </strong>${body.name}</li>
  <li><strong>company:</strong> ${body.entity}</li>
  <li><strong>email:</strong> ${body.email}</li>
  <li><strong>phone:</strong> ${body.phone}</li>
  <li><strong>package: </strong> ${body.package}</li>
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
    replyTo: {
      email: `${body.email}`,
      name: `${body.name}`,
    },
    subject: `Motion Mixer Form: ${body.entity}`,

    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  })
}
