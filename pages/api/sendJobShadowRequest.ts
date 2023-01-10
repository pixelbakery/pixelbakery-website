import mail from '@sendgrid/mail'

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

export default async function sendOnboarding(req, res) {
  const body = JSON.parse(req.body)
  let agree1 = "I'm filling this out for myself: "
  let agree2 = 'I have at least 3 people in my group: '
  let agree3 = 'Signed up for the newsletter: '
  if (body.noParents === true) {
    agree1 += '✅'
  } else agree1 += '⛔️'

  if (body.threePeople === true) {
    agree2 += '✅'
  } else agree2 += '⛔️'

  if (body.newsletter === true) {
    agree3 += '✅'
  } else agree3 += '⛔️'

  const message = `
  <p>A new job shadow form has been submitted. Here are the details:</p>
  <ul>
    <li><strong>name: </strong>${body.name}</li>
    <li><strong>company:</strong> ${body.school}</li>
    <li><strong>email:</strong> ${body.email}</li>
  </ul>
  <p> <strong>Agreements</strong></p>
  <ul>
    <li> ${agree1}</li>
    <li> ${agree2}</li>
    <li> ${agree3}</li>
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
    subject: `Job Shadow Form: ${body.name}`,

    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  })
}
