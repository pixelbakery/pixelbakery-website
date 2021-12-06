/* eslint-disable react/no-string-refs */
import React, { useEffect, useMemo, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Formik } from 'formik'
import { useDebounce } from 'use-debounce'
import FormikEffect from '../../../components/FormikEffect'
import LoadingModal from '../../../components/LoadingModal'
import BillingAddressForm from '../../../components/pg-store/BillingAddressForm'
import CartDetails from '../../../components/pg-store/CartDetails'
import ShippingAddressForm from '../../../components/pg-store/ShippingAddressForm'
import { useCheckoutState } from '../../../hooks/useCheckoutState'
import commerce from '../../../lib/commerce'
import { makeOrder } from '../../../lib/makeOrder'
import Maintenance from '../../../components/pg-store/maintenance'
import useShippingOptions from '../../../hooks/useShippingOptions'
import useSetShippingOption from '../../../hooks/useSetShippingOption'
import useSetTaxZone from '../../../hooks/useSetTaxZone'
import useCheckPwyw from '../../../hooks/useCheckPwyw'

export type CheckoutSchema = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  selected_options: [
    {
      group_id: string
      group_name: string
      option_id: string
      option_name: string
    },
  ]
  variant: {
    id: string
    options: string
  }

  shipping: {
    address: string
    city: string
    state: string
    postalCode: string
  }
  billing: {
    address: string
    city: string
    state: string
    postalCode: string
  }
}
let Checkout: NextPage = () => {
  const router = useRouter()
  const { checkout, cart, live, fetchCart, fetchToken } = useCheckoutState()

  useEffect(() => {
    fetchCart()
      .then(fetchToken)
      .then(() => {})
  }, [])

  const [shippingDetails, setShippingDetails] = useState<CheckoutSchema['shipping']>()

  const [shippingMethod, setShippingMethod] = useState<any>({})
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true)
  const [loading, setLoading] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  const setShippingOption = useSetShippingOption()
  const setTaxZone = useSetTaxZone()
  const checkPwyw = useCheckPwyw()
  const shippingOptions = useShippingOptions('US', shippingDetails?.state ?? 'US-NE')

  const onShippingChange = async (evt: any) => {
    // const opt = shippingOptions?.find((m) => m.id === evt.target.value)
    setShippingMethod(evt.target.value ?? null)
    setShippingOption(evt.target.value, 'US', shippingDetails?.state ?? 'US-NE')
  }

  const [pwyw, setPwyw] = useState(live?.pay_what_you_want?.minimum?.raw ?? 0)

  const pwywMax = cart?.line_items?.reduce((prev, curr) => {
    return prev + curr.quantity * (curr.price.raw * 10)
  }, 0)
  const pwywMin = live?.pay_what_you_want.minimum.raw

  const onPwywChange = (evt) => {
    setPwyw(evt.target.value)
  }

  const [customer_set_price] = useDebounce(pwyw, 300)

  // On change of our slider, update PWYW
  useEffect(() => {
    if (customer_set_price) {
      checkPwyw({ customer_set_price: customer_set_price.toString() })
    }
  }, [customer_set_price])

  useEffect(() => {
    let raw = live?.pay_what_you_want?.customer_set_price?.raw
    // if (raw !== 0) {
    setPwyw(raw)
    //   checkPwyw({ customer_set_price: raw.toString() })
    // }
  }, [live?.pay_what_you_want?.customer_set_price?.raw])

  const onSubmit = async (values) => {
    if (!stripe || !elements) {
      return
    }

    const cardElement = elements.getElement('card') //PaymentElement)
    if (!cardElement) {
      return
    }
    setLoading(true)
    try {
      const newOrder = makeOrder({
        live,
        values,
        billingSameAsShipping,
      })

      const { paymentMethod, error } = await stripe.createPaymentMethod!({
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

      const res = await commerce.checkout.capture(checkout!.id, {
        ...newOrder,
        payment: {
          gateway: process.env.NEXT_PUBLIC_STRIPE_GATEWAY,
          stripe: {
            payment_method_id: paymentMethod?.id,
          },
        },
      })

      router.push('/store/checkout/order-confirmed')
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
      alert('An error occurred while processing your payment: ' + res?.message)
      console.log(res)
    }
    setLoading(false)
  }

  const handleFormChange = async ({
    prevValues,
    nextValues,
  }: {
    prevValues: CheckoutSchema
    nextValues: CheckoutSchema
  }) => {
    setShippingDetails(nextValues.shipping)
    if (JSON.stringify(prevValues.shipping) !== JSON.stringify(nextValues.shipping)) {
      if (nextValues.shipping.postalCode.toString().length === 5) {
        const { valid } = await setTaxZone({
          country: 'US',
          region: nextValues.shipping.state,
          postal_zip_code: nextValues.shipping.postalCode,
        })
        // if (valid) {
        //   checkPWYW(live?.pay_what_you_want?.customer_set_price?.raw)
        // }
      }
    }
  }

  if (!checkout) {
    return null
  }

  return (
    <Formik<CheckoutSchema>
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
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleSubmit }) => (
        <main className='min-w-screen min-h-screen my-4 p-1 md:p-4 bg-egg'>
          <FormikEffect onChange={handleFormChange} />
          <Head>
            <title>PBDS – Store – Checkout</title>
            <meta name='description' content='Pixel Bakery store checkout' />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://shop.pixelbakery.com' />
            <meta property='og:title' content='Pixel Bakery – Checkout' />
            <meta property='og:description' content='Pixel Bakery store checkout' />
            <meta property='og:image' content='/img/pixel-bakery-header.png' />
            <meta name='twitter:site' content='@pixelbakerylnk'></meta>
            <meta name='twitter:card' content='summary_large_image'></meta>
            <meta name='twitter:image:alt' content='Pixel Bakery Design Studio'></meta>
          </Head>
          {cart?.total_items > 0 ? (
            <section className='mx-auto max-w-4xl px-3 md:px-12'>
              <LoadingModal visible={loading} />
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
                <div className='col-span-5 lg:col-span-5'>
                  {/* 

                  Shipping info

                 */}
                  <div className='px-4 pb-12 border-b-4 border-blue-dark '>
                    <h2 className='mt-0 pt-0 text-2xl text-blue-dark'>Shipping</h2>
                    <ShippingAddressForm />
                  </div>
                  {/* 

                  Billing info

                */}
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
                  {/* 

                  Shipping method

                 */}
                  <div className='py-12 border-b-4 border-blue-dark'>
                    <h2 className='mt-0 pt-0 text-2xl text-blue-dark'>Shipping Options</h2>
                    <select
                      className='block form-border-b'
                      value={shippingMethod}
                      onChange={onShippingChange}
                    >
                      <option value={''}>select</option>
                      {shippingOptions?.map((opt) => (
                        <option value={opt.id} key={opt.id}>
                          {opt.description} {opt.price.formatted_with_symbol}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* 

                  Stripe

                 */}
                  {/* <h1>
                  asdcvbnm {live?.pay_what_you_want.customer_set_price?.raw} {cartMin}
                </h1> */}
                  {/* <h1>{live?.shipping} </h1> */}
                  <div className='py-4-12'>
                    <h2 className='text-2xl text-blue-dark'>payment</h2>
                    <div className='py-8 px-4 my-6 border border-blue rounded-md'>
                      <CardElement className='text-2xl h-full' />
                    </div>
                  </div>
                </div>

                <CartDetails
                  value={pwywMin}
                  pwywMin={pwywMin}
                  pwywMax={pwywMax}
                  pwyw={pwyw}
                  cost={pwyw}
                  onPwywChange={onPwywChange}
                  onCostChange={onPwywChange}
                />
              </div>
              {/* End Cart Details */}

              <button
                type='submit'
                onClick={() => handleSubmit()}
                className='block text-right bg-peach py-4 px-12 my-8 text-pink-light rounded-lg text-2xl transform transition-all duration-600 ease-in-out scale-100 opacity-100
  hover:opacity-90 hover:scale-99 active:scale-97'
              >
                submit
              </button>
            </section>
          ) : (
            <section className='bg-white h-96 flex flex-col justify-center'>
              <div className='max-w-6xl mx-auto'>
                <h3 className='text-wine text-xl italic font-semibold text-opacity-40'>
                  well, that&apos;s a sad looking cart.{' '}
                  <Link href='/store' passHref>
                    <a className='underline text-blue'>make it less sad</a>
                  </Link>
                  .
                </h3>
              </div>
            </section>
          )}
          <Maintenance />
        </main>
      )}
    </Formik>
  )
}

export default function CheckoutPage() {
  const stripePromise = useMemo(() => loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE), [])

  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  )
}
