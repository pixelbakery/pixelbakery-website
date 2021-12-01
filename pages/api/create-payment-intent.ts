// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const stripe = require('stripe')(process.env.STRIPE_SECRET)

type Data = {
  clientSecret: string
}

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 1400
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { items } = req.body

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: 'eur',
    automatic_payment_methods: {
      enabled: true,
    },
  })
  res.status(200).json({
    clientSecret: paymentIntent.client_secret,
  })
  // res.status(200).json({ name: 'John Doe' })
}
