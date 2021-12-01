import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import ShippingAddressForm from '../../../components/pg-store/ShippingAddressForm'
import useCart from '../../../hooks/useCart'
import useCheckoutToken from '../../../hooks/useCheckoutToken'
import Link from 'next/link'
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
import commerce from '../../../lib/commerce'
import { useRouter } from 'next/router'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE)

let Checkout: NextPage = () => {
  const { data: cart } = useCart()
  const { data: token } = useCheckoutToken(cart?.id)
  const router = useRouter()
  const [shippingMethod, setShippingMethod] = useState(
    token?.shipping_methods ? token?.shipping_methods[0] : null,
  )
  const onShippingChange = (evt: any) => {
    console.log(evt.target.value)
    setShippingMethod(evt.target.value)
  }

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true)
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
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
      onSubmit={async (values) => {
        if (!stripe || !elements) {
          return
        }
        setLoading(true)
        try {
          const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
          })

          if (error) {
            setLoading(false)
            alert('An error occurred while processing your payment: ' + error.message)
            return
          }

          const shippingAddress = {
            name: 'Shipping',
            country: 'US',
            street: values.shipping.address,
            street_2: '',
            town_city: values.shipping.city,
            county_state: values.shipping.state,
            postal_zip_code: values.shipping.postalCode,
          }
          console.log({ shippingAddress })

          const newOrder = {
            line_items: cart.line_items,
            customer: {
              firstname: values.firstName,
              lastname: values.lastName,
              email: values.email,
              phone: values.phoneNumber,
            },
            billing: billingSameAsShipping
              ? shippingAddress
              : {
                  name: 'Billing',
                  country: 'US',
                  street: values.billing.address,
                  street_2: '',
                  town_city: values.billing.city,
                  county_state: values.billing.state,
                  postal_zip_code: values.billing.postalCode,
                },
            shipping: shippingAddress,
            fulfillment: {
              shipping_method: shippingMethod,
            },
            pay_what_you_want: 40,
          }

          console.log({ newOrder })
          const res = await commerce.checkout.capture(token.id, {
            ...newOrder,
            payment: {
              gateway: 'stripe',
              stripe: {
                payment_method_id: paymentMethod.id,
              },
            },
          })
          console.log({ res })
          router.push('/store/checkout/success')
        } catch (e) {
          console.log(e)
        }
        setLoading(false)
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <main className='min-h-screen my-4 p-4 bg-egg'>
          <section className='mx-auto max-w-6xl px-12'>
            {loading && <div>Loading...</div>}
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
              <div className='col-span-5 lg:col-span-3'>
                <div className='px-4 pb-12 border-b-4 border-blue-dark '>
                  <h2 className='mt-0 pt-0 text-2xl text-blue-dark'>Shipping</h2>
                  <ShippingAddressForm />
                </div>
                <div className='py-12 border-b-4 border-blue-dark'>
                  <h2 className='mt-0 pt-0 text-2xl text-blue-dark'>Billing</h2>
                  <div>
                    <div className='my-4'>
                      <input
                        type='checkbox'
                        className=' mr-3 border-blue text-blue p-2 cursor-pointer rounded-sm'
                        checked={billingSameAsShipping}
                        onChange={() => {
                          setBillingSameAsShipping(!billingSameAsShipping)
                        }}
                      />
                      <label className='text-wine align-middle'>Same as shipping</label>
                    </div>
                    <div className='my-4'>
                      {billingSameAsShipping ? null : <BillingAddressForm />}
                    </div>
                  </div>
                </div>
                <div className='py-12 border-b-4 border-blue-dark'>
                  <h2 className='mt-0 pt-0 text-2xl text-blue-dark'>Shipping Options</h2>
                  <select
                    className='block form-border-b'
                    value={shippingMethod}
                    onChange={onShippingChange}
                  >
                    <option selected>-- select an option -- </option>
                    {token?.shipping_methods?.map((opt) => (
                      <option value={opt.id} key={opt.id}>
                        {opt.description} {opt.price.formatted_with_symbol}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='py-4-12'>
                  <h2 className='text-2xl text-blue-dark'>payment</h2>
                  <div></div>
                </div>
              </div>

              <div className='col-span-5 lg:col-span-2 lg:sticky top-12 px-8 py-8 bg-blue-light order-first lg:order-last'>
                <p className='text-blue-dark text-2xl font-bold mb-12 border-b-4 border-blue-dark pb-2 px-2 '>
                  your cart
                </p>
                {cart?.line_items.map((item) => (
                  <div key={item.id} className='text-wine text-md my-4 flex flex-row items-center'>
                    <p>
                      {item.name} x{item.quantity}
                    </p>
                    <div className='flex-1'></div>
                    <p>{item?.line_total?.formatted_with_symbol}</p>
                  </div>
                ))}
                <h3 className='mt-8 text-right font-semibold text-2xl text-wine'>
                  {cart?.subtotal.formatted_with_symbol}
                </h3>
              </div>
            </div>

            <button
              type='submit'
              onClick={handleSubmit}
              className='block text-right bg-peach py-4 px-12 my-8 text-pink-light rounded-lg text-2xl transform transition-all duration-600 ease-in-out scale-100 opacity-100
  hover:opacity-90 hover:scale-99 active:scale-97'
            >
              submit
            </button>
          </section>
          <CardElement className='text-2xl h-full' />
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
