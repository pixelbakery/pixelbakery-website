/* eslint-disable react/no-string-refs */
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Formik } from 'formik'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'
import { useDebounce } from 'use-debounce'
import FormikEffect from '../../../components/FormikEffect'
import LoadingModal from '../../../components/LoadingModal'
import BillingAddressForm from '../../../components/pg-store/BillingAddressForm'
import CartDetails from '../../../components/pg-store/CartDetails'
import ShippingAddressForm from '../../../components/pg-store/ShippingAddressForm'
import { useCheckoutState } from '../../../hooks/useCheckoutState'
import commerce from '../../../lib/commerce'
import { makeOrder } from '../../../lib/makeOrder'

export type CheckoutSchema = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
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
  const {
    token,
    cart,
    live,
    fetchCart,
    fetchToken,
    setShippingMethod: setStateShipping,
    checkPWYW,
    setTaxZone,
  } = useCheckoutState()

  useEffect(() => {
    fetchCart()
      .then(fetchToken)
      .then(() => {})
  }, [])

  const [shippingMethod, setShippingMethod] = useState<any>({})
  const onShippingChange = (evt: any) => {
    const opt = token.shipping_methods.find((m) => m.id === evt.target.value)
    setShippingMethod(opt?.id ?? null)
    setStateShipping(opt)
  }

  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true)
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const [cost, setCost] = useState(cart?.subtotal?.raw ?? 0)
  const maxCost = cart?.line_items?.reduce((prev, curr) => {
    return prev + curr.quantity * (curr.price.raw * 10)
  }, 0)

  const cartMin = token?.live.subtotal.raw
  const onCostChange = (evt) => {
    setCost(evt.target.value)
  }

  const [pwyw] = useDebounce(cost, 300)

  // On change of our slider, update PWYW
  useEffect(() => {
    checkPWYW(pwyw)
  }, [pwyw])

  // On shipping change, update our live object with it
  useEffect(() => {
    if (!shippingMethod || !token?.id) {
      return
    }
    setShippingMethod(shippingMethod)
  }, [shippingMethod])
  useEffect(() => {
    setCost(cart?.subtotal?.raw!)
  }, [cart?.id])

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

      const res = await commerce.checkout.capture(token!.id, {
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
    if (JSON.stringify(prevValues.shipping) !== JSON.stringify(nextValues.shipping)) {
      console.log({ prevValues, nextValues })
      setTaxZone({
        state: nextValues.shipping.state,
        postalCode: nextValues.shipping.postalCode,
      })
    }
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
        <main className='min-h-screen my-4 p-4 bg-egg'>
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
          <section className='mx-auto max-w-6xl px-12'>
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
              <div className='col-span-5 lg:col-span-3'>
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
                    {token?.shipping_methods?.map((opt) => (
                      <option value={opt.id} key={opt.id}>
                        {opt.description} {opt.price.formatted_with_symbol}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 

                  Stripe

                 */}
                <div className='py-4-12'>
                  <h2 className='text-2xl text-blue-dark'>payment</h2>
                  <div className='py-8 px-4 my-6 border border-blue rounded-md'>
                    <CardElement className='text-2xl h-full' />
                  </div>
                </div>
              </div>

              {/* 
                Cart Details 
              */}
              <CartDetails
                cartMin={cartMin}
                cartMax={maxCost}
                cost={cost}
                onCostChange={onCostChange}
              />
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

  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  )
}
