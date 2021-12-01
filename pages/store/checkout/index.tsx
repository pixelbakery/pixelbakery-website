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
import commerce from '../../../lib/commerce'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE)

let Checkout: NextPage = () => {
  const { data: cart } = useCart()
  const { data: token } = useCheckoutToken(cart?.id)

  const [shippingMethod, setShippingMethod] = useState(
    token?.shipping_methods ? token?.shipping_methods[0] : null,
  )
  const onShippingChange = (evt: any) => {
    console.log(evt.target.value)
    setShippingMethod(evt.target.value)
  }

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(false)
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
            // card: elements.getElement(PaymentElement),
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

          const newOrder = {
            line_items: cart.line_items,
            customer: {
              firstname: values.firstName,
              lastname: values.lastName,
              email: values.email,
              phone: values.phoneNumber,
            },

            // collected 'order notes' data for extra field configured in the Chec Dashboard
            // extrafields: {
            //   extr_j0YnEoqOPle7P6: this.state.orderNotes,
            // },
            // Add more to the billing object if you're collecting a billing address in the
            // checkout form. This is just sending the name as a minimum.
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
              shipping_method: shippingMethod.id,
            },
            pay_what_you_want: 40,
          }

          try {
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
          } catch (e) {
            console.log(e)
          }
        } catch (e) {
          console.log(e)
        }
        setLoading(false)
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <main className='min-lander p-4'>
          {loading && <div>Loading...</div>}
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

                  <select className='block' value={shippingMethod} onChange={onShippingChange}>
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
                  <CardElement />
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
