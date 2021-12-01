import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import ShippingAddressForm from '../../../components/pg-store/ShippingAddressForm'
import useCart from '../../../hooks/useCart'
import useCheckoutToken from '../../../hooks/useCheckoutToken'
import {
  PaymentElement,
  useStripe,
  useElements,
  Elements,
  CardElement,
} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Formik } from 'formik'
import BillingAddressForm from '../../../components/pg-store/BillingAddressForm'
import { Stripe } from 'stripe'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE)

let Checkout: NextPage = () => {
  const { data: cart } = useCart()
  const { data: token } = useCheckoutToken(cart?.id)

  const [step, setStep] = useState(3)
  const [furthestStep, setFurthest] = useState(1)
  useEffect(() => {
    setFurthest(Math.max(furthestStep, step))
  }, [step])

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(false)

  const [shippingAddress, setShippingAddress] = useState({})
  const stripe = useStripe()
  const elements = useElements()

  return (
    <Formik
      onSubmit={async (values) => {
        if (!stripe || !elements) {
          return
        }
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: 'http://localhost:3000',
          },
        })

        // const paymentMethodResponse = await stripe.createPaymentMethod({ type: 'card', card });

        // if (paymentMethodResponse.error) {
        //   // There was some issue with the information that the customer entered into the payment details form.
        //   alert(paymentMethodResponse.error.message)
        //   return
        // }

        const valuesToSubmit = {}
        console.log(values)
      }}
      initialValues={{
        firstName: '',
        lastName: '',
        shipping: {
          address: '',
          city: '',
          state: '',
          postalCode: '',
        },
        billing: {
          address: '',
          city: '',
          state: '',
          postalCode: '',
        },
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <main className='min-lander p-4'>
          <div className='max-w-screen-lg flex flex-row items-start gap-12'>
            <div className='flex-1'>
              <div className='p-4 border-b'>
                <h3>Shipping</h3>
                <ShippingAddressForm />
              </div>
              <div className='p-4 border-b'>
                <h3>Billing</h3>
                <div>
                  <div>
                    <label>Same as shipping</label>
                    <input
                      type='checkbox'
                      value={billingSameAsShipping}
                      onChange={() => {
                        setBillingSameAsShipping(!billingSameAsShipping)
                      }}
                    />
                  </div>
                  {billingSameAsShipping ? null : <BillingAddressForm />}

                  <select className='block'>
                    {token?.shipping_methods?.map((opt) => (
                      <option value={opt.id} key={opt.id}>
                        {opt.description} {opt.price.formatted_with_symbol}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='p-4'>
                <h3>Payment</h3>
                <div>
                  {/*
                   */}
                  <PaymentElement />
                </div>
              </div>
            </div>

            <div className='sticky flex-1 top-12 p-4 bg-blue-light'>
              <p>Cart info here</p>
              {cart?.line_items.map((item) => (
                <div key={item.id} className='flex flex-row items-center'>
                  <p>
                    {item.name} x{item.quantity}
                  </p>
                  <div className='flex-1'></div>
                  <p>{item?.line_total?.formatted_with_symbol}</p>
                </div>
              ))}
              <h3>{cart?.subtotal.formatted_with_symbol}</h3>
            </div>
          </div>
          <button type='submit' onClick={handleSubmit}>
            Submit
          </button>
        </main>
      )}
    </Formik>
  )
}
export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: [{ id: 'xl-tshirt' }] }),
    })
      .then(async (res) => {
        const a = await res.json()
        console.log('asdf', a)
        return a
      })
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  if (!clientSecret) {
    return null
  }
  return (
    <Elements
      options={{
        clientSecret,
      }}
      stripe={stripePromise}
    >
      <Checkout />
    </Elements>
  )
}
