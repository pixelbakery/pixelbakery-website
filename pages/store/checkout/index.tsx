/* eslint-disable react/no-string-refs */
import React, { useEffect, useMemo, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Formik } from 'formik'
import FormikEffect from '@parts/FormikEffect'
import LoadingModal from '@parts/LoadingModal'
import Store_BillingAddressForm from '@store/Store_BillingAddressForm'
import Store_CartDetails from '@store/Store_CartDetails'
import Store_ShippingAddressForm from '@store/Store_ShippingAddressForm'
import { useCheckoutState } from '@hooks/useCheckoutState'
import commerce from '@lib/commerce'
import { makeOrder } from '@lib/makeOrder'
import useShippingOptions from '@hooks/useShippingOptions'
import useSetShippingOption from '@hooks/useSetShippingOption'
// import useDiscountCode from '@hooks/useDiscountCode'

// import useCheckPwyw from '@hooks/useCheckPwyw'
import useSetTaxZone from '@hooks/useSetTaxZone'
import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import Navigation_Store from '@nav/Navigation_Store'
import NoIndex from '@parts/NoIndex'

export type CheckoutSchema = {
  firstName: string
  lastName: string
  email: string
  phoneNumber: string
  price: any
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
  // discount:{
  //   code: string
  // }
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
  }, [fetchCart, fetchToken])

  // useEffect(() => {
  //   let raw = live?.pay_what_you_want?.customer_set_price?.raw
  //   setPwyw(raw)
  // }, [live?.pay_what_you_want?.customer_set_price?.raw])

  // const checkPwyw = useCheckPwyw()
  const [shippingDetails, setShippingDetails] = useState<CheckoutSchema['shipping']>()
  // const [discountCode, setDiscountCode] = useState<CheckoutSchema['discount']>()

  const [shippingMethod, setShippingMethod] = useState<any>({})
  const [billingSameAsShipping, setBillingSameAsShipping] = useState(true)
  const [loading, setLoading] = useState(false)

  const stripe = useStripe()
  const elements = useElements()

  // const pwywMax = cart?.line_items?.reduce((prev, curr) => {
  //   return prev + curr.quantity * (curr.price.raw * 10)
  // }, 0)
  // const pwywMin = live?.pay_what_you_want.minimum.raw

  // const [pwyw, setPwyw] = useState(live?.pay_what_you_want?.minimum?.raw ?? 0)
  // const onPwywChange = (evt) => {
  //   setPwyw(evt.target.value)
  // }

  const setShippingOption = useSetShippingOption()
  // const applyDiscountCode = useDiscountCode()
  const setTaxZone = useSetTaxZone()

  const shippingOptions = useShippingOptions('US', shippingDetails?.state ?? 'US-NE')

  const onShippingChange = async (evt) => {
    // const opt = shippingOptions?.find((m) => m.id === evt.target.value)
    setShippingMethod(evt.target.value ?? null)
    setShippingOption(evt.target.value, 'US', shippingDetails?.state ?? 'US-NE')
  }

  // const onDiscountChange = async (evt) => {

  //   applyDiscountCode(evt.target.value ?? null)
  //   applyDiscountCode(evt.target.value)
  // }
  // const [customer_set_price] = useDebounce(pwyw, 300)

  // On change of our slider, update PWYW
  // useEffect(() => {
  //   if (customer_set_price) {
  //     checkPwyw({ customer_set_price: customer_set_price.toString() })
  //   }
  // }, [checkPwyw, customer_set_price])

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
      if (res.data.error.type === 'unprocessable_entity') {
        alert(
          'An error occurred while processing your payment. Please double check that you entered everything correctly',
        )
        setLoading(false)
        return
      }
      if (res.statusCode !== 402 || res.data.error.type !== 'requires_verification') {
        return
      }

      // const { error, paymentIntent } = await stripe.handleCardAction(
      //   res.data.error.param
      // );s
      alert('An error occurred while processing your payment: ' + res?.message)
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
    // setDiscountCode(nextValues.discountCode)

    if (JSON.stringify(prevValues.shipping) !== JSON.stringify(nextValues.shipping)) {
      if (nextValues.shipping.postalCode.toString().length === 5) {
        const { valid } = await setTaxZone({
          country: 'US',
          region: nextValues.shipping.state,
          postal_zip_code: nextValues.shipping.postalCode,
        })
        // if (valid) {
        //   checkPwyw(Number(live?.pay_what_you_want?.customer_set_price?.raw))
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
        variant: {
          id: '',
          options: '',
        },
        price: '',
        selected_options: [
          {
            group_id: '',
            group_name: '',
            option_id: '',
            option_name: '',
          },
        ],
        // discount: '',
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
        <Main className='min-w-screen min-h-screen my-4 p-1 md:p-4 bg-egg'>
          <FormikEffect onChange={handleFormChange} />
          <Head>
            <title>Checkout | Store</title>
            <meta name='description' content='Pixel Bakery store checkout' />
            <meta property='og:type' content='website' />
            <meta property='og:url' content='https://pixelbakery.com/store' />
            <meta property='og:title' content='Pixel Bakery – Checkout' />
            <meta property='og:description' content='Pixel Bakery store checkout' />
            <meta property='og:image' content='/img/pixel-bakery-header.png' />
            <meta name='twitter:site' content='@pixelbakerylnk'></meta>
            <meta name='twitter:card' content='summary_large_image'></meta>
            <meta name='twitter:image:alt' content='Pixel Bakery Design Studio'></meta>
          </Head>
          <NoIndex />
          <Navigation_Store />

          {cart?.total_items > 0 ? (
            <PageSection className=' pt-24' id='checkout-info'>
              <LoadingModal visible={loading} />

              <InnerWrapper className='xl:max-w-3xl'>
                <header className='mb-6 pb-8 mt-12'>
                  <div id='breadcrumbs' className='w-full text-blue  text-sm '>
                    <Link hrefLang={'en-US'} href='/store' passHref>
                      <a hrefLang={'en-US'} className='underline py-2'>
                        store
                      </a>
                    </Link>
                    <span className='mx-3 py-2'>/</span>
                    <Link hrefLang={'en-US'} href='/store/cart' passHref>
                      <a hrefLang={'en-US'} className='underline py-2'>
                        cart
                      </a>
                    </Link>
                    <span className='mx-3 py-3'>/</span>
                    <span className='py-3'>payment &amp; shipping</span>
                  </div>
                  <h1 className='text-peach text-6xl lg:text-8xl pt-4'> Payment &amp; Shipping</h1>
                </header>
                <div className='w-full grid grid-cols-5 items-start gap-12 '>
                  <div className='col-span-5 lg:col-span-5'>
                    {/* 
  
                    Shipping info
  
                   */}
                    <div className='px-4 pb-12 border-b-4 border-blue-dark '>
                      <h2 className='mt-0 pt-0 text-2xl text-blue-dark'>Shipping</h2>
                      <Store_ShippingAddressForm />
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
                          {billingSameAsShipping ? null : <Store_BillingAddressForm />}
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
                            {opt.description}
                            {/* {opt.description} {opt.price.formatted_with_symbol} */}
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

                  <Store_CartDetails
                    // value={pwywMin}
                    // pwywMin={pwywMin}
                    // pwywMax={pwywMax}
                    // pwyw={pwyw}
                    // onPwywChange={onPwywChange}
                    cost={0}
                    // onCostChange={undefined} // onCostChange={onPwywChange}
                  />
                </div>
                {/* End Cart Details */}

                <button
                  type='submit'
                  onClick={() => handleSubmit()}
                  className='block text-right bg-peach py-4 px-12 my-8 text-pink-lighter rounded-lg text-2xl transform transition-all duration-600 ease-in-out scale-100 opacity-100
    hover:opacity-90 hover:scale-99 active:scale-97'
                >
                  submit
                </button>
              </InnerWrapper>
            </PageSection>
          ) : (
            <PageSection color={'white'} id='empty-cart'>
              <InnerWrapper className='max-w-6xl mx-auto'>
                <h3 className='text-wine text-xl italic font-semibold text-opacity-40'>
                  well, that&apos;s a sad looking cart.{' '}
                  <Link hrefLang={'en-US'} href='/store' passHref>
                    <a hrefLang={'en-US'} className='underline text-blue'>
                      make it less sad
                    </a>
                  </Link>
                  .
                </h3>
              </InnerWrapper>
            </PageSection>
          )}
        </Main>
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
