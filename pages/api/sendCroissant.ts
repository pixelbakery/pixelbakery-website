import mail from '@sendgrid/mail'

const pastries = [
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy1.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy2.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy3.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy4.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy5.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy6.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy7.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy8.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy9.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy10.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy11.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy12.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy13.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy14.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy15.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy16.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy17.jpg',
  'https://pixelbakery.com/img/something-yummy/pixel-bakery-something-yummy18.jpg',
]

mail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)

export default async function sendCroissant(req, res) {
  const body = JSON.parse(req.body)
  const rand = Math.floor(Math.random() * pastries.length)
  const randomPastry = pastries[rand]
  const message = `

<span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Hi there! Because you're super special, we'd like to do something super nice for you.</span>
    <strong>YUM!</strong>
    <p> Enjoy this tasty croissant on us:</p><br/>
    <img
        alt='A free pastry treat from Pixel Bakery'
        width='650px'
        src='${randomPastry}'
      /><br>

 <p style="margin-top:20pt;">    To show your appreciation, follow us on <a style="color:#ed6969" href="https://instagram.com/pixelbakery"><u><stong>instagram</stong></u></a>.</p>
     
     <p ><strong>Wow! Delicious!</strong></p>
    <p>You're welcome, you lucky duck. Stop by for another anytime. But not too many times. This ain't a charity.</p>

   <p>  W/ Love & Flour,<br></p>
   <p> <strong> – The PB Team</strong></p><br>
    <p style="color:darkgray; ">**some imagination required, Pixel Bakery Design Studio is not responsible for a lack of imagination and not liable if you can't taste it. no refunds.</p>
  `

  await mail.send({
    to: `${body.email}`,
    from: {
      email: 'croissants@pixelbakery.com',
      name: 'Pixel Fakery',
    },
    subject: '🥐🥐 Pixel Bakery: Have a Pastry On Us 🥐🥐',

    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  })

  res.status(200).json({ status: 'Ok' })
}
