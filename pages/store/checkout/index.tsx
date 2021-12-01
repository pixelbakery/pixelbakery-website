import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Formik } from 'formik'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import BillingAddressForm from '../../../components/pg-store/BillingAddressForm'
import ShippingAddressForm from '../../../components/pg-store/ShippingAddressForm'
import useCart from '../../../hooks/useCart'
import useCheckoutToken from '../../../hooks/useCheckoutToken'
import commerce from '../../../lib/commerce'

function makeOrder({ cost, token, values, billingSameAsShipping, shippingMethod }: any) {
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
    line_items: token.live.line_items,
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
    pay_what_you_want: cost,
  }
  return newOrder
}
let Checkout: NextPage = () => {
  const { data: cart } = useCart()
  const { data: token } = useCheckoutToken(cart?.id)
  const router = useRouter()
  const [shippingMethod, setShippingMethod] = useState()
  const onShippingChange = (evt: any) => {
    setShippingMethod(evt.target.value)
  }

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true)
  const [loading, setLoading] = useState(true)
  const stripe = useStripe()
  const elements = useElements()

  const [cost, setCost] = useState(cart?.subtotal?.raw ?? 0)
  const maxCost = cart?.line_items?.reduce((prev, curr) => {
    return prev + curr.quantity * (curr.price.raw * 10)
  }, 0)
  const onCostChange = (evt) => {
    setCost(Math.max(cart?.subtotal?.raw, evt.target.value))
  }

  useEffect(() => {
    if (token?.shipping_methods?.length) {
      setShippingMethod(token?.shipping_methods[0].id)
    }
  }, token?.shipping_methods?.length)

  useEffect(() => {
    setCost(cart?.subtotal?.raw)
  }, [cart?.id])

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

        const cardElement = elements.getElement('card') //PaymentElement)
        if (!cardElement) {
          return
        }
        setLoading(true)
        try {
          // Create a PaymentIntent with the order amount and currency

          // const { error } = await stripe.confirmPayment({
          //   elements,
          //   confirmParams: {
          //     // Make sure to change this to your payment completion page
          //     return_url: 'http://localhost:3000/store/checkout',
          //   },
          // })

          const newOrder = makeOrder({
            cost,
            token,
            values,
            billingSameAsShipping,
            shippingMethod,
          })

          const { paymentMethod, error } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: {
              name: `${newOrder.customer.firstname} ${newOrder.customer.lastname}`,
              email: newOrder.customer.email,
              address: {
                line1: newOrder.billing.street,
                city: newOrder.billing.town_city,
                state: newOrder.billing.county_state,
                country: 'US',
                postal_code: newOrder.billing.postal_zip_code,
              },
            },
          })

          if (error) {
            setLoading(false)
            alert('An error occurred while processing your payment: ' + error.message)
            return
          }

          const res = await commerce.checkout.capture(token.id, {
            ...newOrder,
            payment: {
              gateway: process.env.NEXT_PUBLIC_STRIPE_GATEWAY,
              stripe: {
                payment_method_id: paymentMethod.id,
              },
            },
          })

          router.push('/store/checkout/success')
        } catch (res) {
          // if (
          //   res.statusCode !== 402 ||
          //   res.data.error.type !== "requires_verification"
          // ) {
          //   setCheckoutError(res.data.error.message);
          //   setProcessing(false);
          //   return;
          // }

          // const { error, paymentIntent } = await stripe.handleCardAction(
          //   res.data.error.param
          // );

          console.log(res)
        }
        setLoading(false)
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <main className='min-h-screen my-4 p-4 bg-egg'>
          <section className='mx-auto max-w-6xl px-12'>
            {loading && (
              <div className='fixed z-50 inset-0 bg-wine bg-opacity-80 flex items-center justify-center'>
                <h3 className='text-white'>Loading...</h3>
              </div>
            )}
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
                  <select className='block' value={shippingMethod} onChange={onShippingChange}>
                    <option></option>
                    {token?.shipping_methods?.map((opt) => (
                      <option value={opt.id} key={opt.id}>
                        {opt.description} {opt.price.formatted_with_symbol}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='py-4-12'>
                  <h2 className='text-2xl text-blue-dark'>payment</h2>
                  <div>
                    <CardElement className='text-2xl h-full' />
                  </div>
                </div>
              </div>

              {/* Cart Details */}
              <div className='col-span-5 lg:col-span-2 lg:sticky top-12 px-8 py-8 bg-blue-light order-first lg:order-last'>
                <p className='text-blue-dark text-2xl font-bold mb-12 border-b-4 border-blue-dark pb-2 px-2 '>
                  your cart
                </p>
                {cart?.line_items.map((item) => {
                  const opt = item.selected_options?.length > 0 ? item.selected_options[0] : null
                  return (
                    <div
                      key={item.id}
                      className='text-wine text-md my-4 flex flex-row items-center'
                    >
                      <p>
                        {item.name} {opt ? `(${opt?.option_name})` : ''} x{item.quantity}
                      </p>
                      <div className='flex-1'></div>
                      <p>{item?.line_total?.formatted_with_symbol}</p>
                    </div>
                  )
                })}
                <div className='my-4 flex flex-row gap-6 items-center mt-4'>
                  <input
                    type='range'
                    min={cart?.subtotal.raw}
                    max={maxCost}
                    value={cost}
                    onChange={onCostChange}
                    className='bg-blue slider flex-1'
                  />
                  <span>
                    <span className='font-medium text-xl text-wine mr-1'>$</span>
                    {/* TODO: if a user manually enters a number less than 8, it'll accept that price */}
                    <input
                      className='rounded-md border-blue bg-transparent font-medium font-wine w-24 text-left pl-2 hover:opacity-60 focus:ring-blue-dark focus:ring-1'
                      type='number'
                      min={cart?.subtotal.raw}
                      value={cost}
                      onChange={onCostChange}
                    />
                  </span>
                </div>
                <h3 className='mt-8 text-right font-semibold text-2xl text-wine'>
                  ${(cost ?? 0).toFixed(2)}
                  {/* {cart?.subtotal.formatted_with_symbol} */}
                </h3>
              </div>
            </div>
            {/* End Cart Details */}

            <button
              type='submit'
              onClick={handleSubmit}
              className='block text-right bg-peach py-4 px-12 my-8 text-pink-light rounded-lg text-2xl transform transition-all duration-600 ease-in-out scale-100 opacity-100
  hover:opacity-90 hover:scale-99 active:scale-97'
            >
              submit
            </button>
          </section>
        </main>
      )}
    </Formik>
  )
}

export default function CheckoutPage() {
  const stripePromise = useMemo(() => loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE), [])
  const options = {
    //   clientSecret,
  }

  console.log({ NEXT_PUBLIC_STRIPE_PUBLISHABLE: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE })

  // if (!clientSecret) {
  // return null
  // }

  return (
    <Elements options={options} stripe={stripePromise}>
      <Checkout />
    </Elements>
  )
}
