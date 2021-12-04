import { GetServerSideProps, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Navigation from '../../../components/Navigation'
import Maintenance from '../../../components/pg-store/maintenance'
import PageSection from '../../../components/PageSection'
import commerce from '../../../lib/commerce'
import Image from 'next/image'
import useCart from '../../../hooks/useCart'
import VariantPicker from '../../../components/pg-store/store-variant-picker'
import Link from 'next/link'
import Head from 'next/head'
import cs from 'classnames'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export let getServerSideProps: GetServerSideProps = async (context) => {
  const { product: permalink } = context.params

  const product = await commerce.products.retrieve(permalink, { type: 'permalink ' })

  return {
    props: {
      product,
    },
  }
}
let currentVariant = 'select'
function Test(one) {
  currentVariant = one
  console.log(currentVariant)
}
let StoreProduct: NextPage = ({ product }: { product: any }) => {
  const [price, setPrice] = useState(product.price.raw)
  const [soldOut, setSoldOut] = useState(product.conditionals.is_sold_out)
  const onPriceChange = (evt) => setPrice(Math.max(evt.target.value, product.price.raw))

  const [variant, setVariant] = useState({})

  // TESTING
  // configuring objects for React context providers

  // console.log(currentVariant.name)
  // END TESTING

  // function chosenVariant(groupId, variantId) {
  //   console.log('GROUP ID: ' + groupId)
  //   console.log(numbers)
  // }

  const onVariantChange = (groupId, variantId) => {
    setVariant({
      [groupId]: variantId,
    })
    Test(variantId)
    // chosenVariant(groupId, variantId)
  }

  const renderHTML = (rawHTML: string) =>
    React.createElement('div', { dangerouslySetInnerHTML: { __html: rawHTML } })
  const toastMessage = () => renderHTML('🥳   &#8194;    added to cart  &#8194;  🎉')
  const notify = () => toast(toastMessage)
  const { data: cart, refetch } = useCart()
  const addToCart = async () => {
    await commerce.cart.add(product.id, 1, {
      ...variant,
    })
    notify()
    refetch()
  }
  // console.log('checkout button enabled? ' + soldOut)

  // check to see if it's a name your own price product
  let prependPrice = ''
  if (product.conditionals.is_pay_what_you_want) {
    prependPrice = 'minimum price: '
  }

  return (
    <main id={'product-' + product.name} className=' bg-white relative'>
      <Head>
        <title>{'PBDS – Store – ' + product.name}</title>
        <meta name='description' content={product.description} />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://shop.pixelbakery.com' />
        <meta property='og:title' content={'PBDS – ' + product.name} />
        <meta property='og:description' content={product.description} />
        <meta property='og:image' content={product.assets[0].source} />
        <meta name='twitter:site' content='@pixelbakerylnk'></meta>
        <meta name='twitter:card' content='summary_large_image'></meta>
        <meta name='twitter:image:alt' content='Pixel Bakery Design Studio'></meta>
      </Head>
      <div className='d-sm-block'></div>

      <Link href='/store/cart' passHref>
        <div className='absolute right-0 top-0 mr-8 mt-8 z-50'>
          <div
            className='relative  text-center bg-pink-light px-4 py-4 rounded-md font-bold text-peach text-xl leading-none cursor-pointer  transform transition-all duration-600 ease-in-out scale-100 opacity-100
hover:opacity-90 hover:scale-97 active:scale-90'
          >
            {cart?.total_items}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2.5'
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
          </div>
        </div>
      </Link>
      <PageSection
        className={'bg-cream  my-4 inset-0 py-20'}
        innerMaxWidth={'max-w-screen-sm md:max-w-screen-md lg:max-w-7xl'}
      >
        <div className='mt-20 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 items-center gap-4 md:gap-12 lg:gap-24'>
          <div className='block md:hidden col-span-1 mt-0 gap-6  '>
            <div className='w-full  flex flex-row justify-start text-left mt-0 pb-3 '>
              <div>
                <Link href={'/store'} passHref>
                  <a className='font-semibold text-blue text-xl'>← more good good</a>
                </Link>
              </div>
            </div>
            <h1 className=' text-6xl font-extrabold text-blue-dark leading-none my-0 py-0'>
              {product.name}
            </h1>
          </div>
          <div className='mt-0 col-span-1 relative flex flex-col self-start'>
            {product.assets[0].file_extension === 'mp4' ? (
              <video
                loop
                muted
                autoPlay
                playsInline
                id={product.name + '-video'}
                controls={false}
                className='my-0 px-0 object-cover inset-0 w-full rounded-md'
              >
                <source src={product.assets[0].url} type='video/mp4' />
              </video>
            ) : (
              <Image
                layout='fill'
                src={product.media.source}
                objectFit='cover'
                className='inset-0'
                alt={'pixel bakery ' + product.name}
              />
            )}

            <div className='hidden w-full  md:flex flex-row justify-start text-left py-4 '>
              <Link href={'/store'} passHref>
                <a className='font-semibold text-blue text-xl'>← more good good</a>
              </Link>
            </div>
          </div>
          <div className='col-span-1  gap-6  '>
            <h1 className=' hidden md:block text-6xl font-extrabold text-blue-dark leading-none my-0 py-0'>
              {product.name}
            </h1>
            <p className='text-blue text-3xl font-bold mt-1 md:mt-3 pb-0 mb-0'>
              {prependPrice} {product.price.formatted_with_symbol}
            </p>
            <p className='mt-1 py-0 text-wine italic text-opacity-70'>
              {product.inventory.available === 0 ? (
                <span>remaining: SOLD OUT</span>
              ) : (
                <span>remaining: {product.inventory.available}</span>
              )}
            </p>
            <div
              className='my-8 text-lg text-wine leading-relaxed'
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
            <VariantPicker
              className='mb-3'
              variantGroups={product.variant_groups}
              value={variant}
              onChange={onVariantChange}
            />
            {currentVariant != 'select' || product.variant_groups.length === 0 ? (
              <button
                onClick={addToCart}
                disabled={soldOut}
                className={cs('checkoutButton', {
                  ['checkoutButton-disabled-true']: soldOut,
                  ['checkoutButton-disabled-false']: !soldOut,
                })}
              >
                Add To Cart {}
              </button>
            ) : (
              <button
                onClick={addToCart}
                disabled={soldOut}
                className='rounded-lg text-xl font-bold mt-8 mb-2 py-4 block w-full lowercase scale-100 bg-wine-100 text-wine-200 cursor-not-allowed opacity-60'
              >
                Select options first plz
              </button>
            )}

            <ToastContainer
              position='bottom-center'
              autoClose={1400}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />

            <div className=' md:hidden w-full  flex flex-row justify-start text-left  '>
              <div>
                <Link href={'/store'} passHref>
                  <a className='font-semibold text-blue text-xl'>← more good good</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
      <Maintenance />
    </main>
  )
}

export default StoreProduct
