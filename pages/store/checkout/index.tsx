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
import Link from 'next/link'
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
        <main className='min-h-screen my-4 p-4 bg-egg'>
          <section className='mx-auto max-w-6xl px-12'>
            <header className='mb-6 pb-8 mt-12'>
              <div id='breadcrumbs' className='w-full text-blue  text-sm '>
                <Link href='/store' passHref>
                  <a className='underline py-2'>store</a>
                </Link>
                <span className='mx-3 py-2'>/</span>
                <Link href='/store/cart' passHref>
                  <a className='underline py-2'>cart</a>
                </Link>
                <span className='mx-3 py-3'>/</span>
                <span className='py-3'>payment & shipping</span>
              </div>
              <h1 className='text-peach text-6xl lg:text-8xl pt-4'> Payment & Shipping</h1>
            </header>
            <div className='w-full grid grid-cols-5 items-start gap-12 '>
              <div className='col-span-5 lg:col-span-3 order-last lg:order-first'>
                <div className='p-4 border-b'>
                  <h2 className='text-2xl text-blue-dark'>Shipping</h2>
                  <ShippingAddressForm />
                </div>
                <div className='p-4 border-b'>
                  <h2 className='text-2xl text-blue-dark'>Billing</h2>
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
                  <h2 className='text-2xl text-blue-dark'>Payment</h2>
                  <div>
                    {/*
                     */}
                    <PaymentElement />
                  </div>
                </div>
              </div>

              <div className='col-span-5 lg:col-span-2 lg:sticky flex-1 top-12 p-4 bg-blue-light'>
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
          </section>
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
