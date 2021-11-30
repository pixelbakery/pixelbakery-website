import { GetServerSideProps, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Navigation from '../../../components/Navigation'
// import Maintenance from '../../../components/pg-store/maintenance'
import PageSection from '../../../components/PageSection'
import commerce from '../../../lib/commerce'
import Image from 'next/image'
import useCart from '../../../hooks/useCart'
import VariantPicker from '../../../components/pg-store/store-variant-picker'
import Link from 'next/link'

export let getServerSideProps: GetServerSideProps = async (context) => {
  const { product: permalink } = context.params

  const product = await commerce.products.retrieve(permalink, { type: 'permalink ' })

  return {
    props: {
      product,
    },
  }
}

let StoreProduct: NextPage = ({ product }: { product: any }) => {
  const [price, setPrice] = useState(product.price.raw)
  const onPriceChange = (evt) => setPrice(evt.target.value)
  const { data: cart, refetch } = useCart()
  const addToCart = async () => {
    await commerce.cart.add(product.id, 1)
    refetch()
  }

  // const variants = product.options.map(({ options, group }) => ({
  //   options: options.map((option) => option.name),
  // }))

  // check to see if it's a name your own price product
  let prependPrice = ''
  if (product.conditionals.is_pay_what_you_want) {
    prependPrice = 'minimum price: '
  }

  return (
    <main id={'product-' + product.name} className=' bg-white relative'>
      <div className='d-sm-block'></div>
      {/* TODO: Move this to store-cart-nav */}
      <Link href='/store/cart' passHref>
        <div className='absolute right-0 top-0 mr-8 mt-8 z-50'>
          <div
            className='relative text-center bg-pink-light px-4 py-4 rounded-md font-bold text-peach text-xl leading-none cursor-pointer  transform transition-all duration-600 ease-in-out scale-100 opacity-100
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
      {/* {JSON.stringify(product)} */}
      <PageSection
        className={'bg-cream lander my-4 inset-0 '}
        innerMaxWidth={'max-w-screen-sm md:max-w-screen-md lg:max-w-7xl'}
      >
        <div className='mt-20 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-24'>
          <div className='mt-0 col-span-1 relative flex flex-col justify-start'>
            {product.assets[0].file_extension === 'mp4' ? (
              <video
                src={product.assets[0].url}
                loop
                muted
                autoPlay
                className='my-0 px-0 object-cover inset-0 w-full rounded-md'
              />
            ) : (
              <Image
                layout='fill'
                src={product.media.source}
                objectFit='cover'
                className='inset-0'
                alt={'pixel bakery ' + product.name}
              />
            )}
          </div>
          <div className='col-span-1  gap-6  '>
            <h1 className='text-6xl font-extrabold text-blue-dark leading-none my-0 py-0'>
              {product.name}
            </h1>
            <p className='text-blue text-3xl font-bold mt-3 pb-0 mb-0'>
              {prependPrice} {product.price.formatted_with_symbol}
            </p>
            <p className='mt-1 py-0 text-wine italic text-opacity-70'>
              remaining: {product.inventory.available}
            </p>
            <div
              className='my-8 text-lg text-wine leading-relaxed'
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
            {/* TODO: Hook variant support */}
            <VariantPicker className='mb-3' variantGroups={product.variant_groups} />
            {/* {product.variants ? <h1>TRUE</h1> : ''} */}
            {/* <VariantPicker variants={product.variants} /> */}
            <div className='my-4 flex justify-between'>
              <input
                type='range'
                min={product.price.raw}
                max='100'
                value={price}
                onChange={onPriceChange}
                className='bg-blue slider self-center flex-grow'
              />
              <span className='ml-8'>
                <span className='font-medium text-xl text-wine mr-1'>$</span>
                {/* TODO: if a user manually enters a number less than 8, it'll accept that price */}
                <input
                  className='rounded-md border-blue bg-transparent font-medium font-wine w-24 text-left pl-2 hover:opacity-60 focus:ring-blue-dark focus:ring-1'
                  type='number'
                  min={product.price.raw}
                  value={price}
                  onChange={onPriceChange}
                />
              </span>
            </div>

            {/* TODO: 
              - Disable button if sold out 
              - price does not update with slider. it remains the default minimum price 
              */}
            <button
              onClick={addToCart}
              className='bg-blue rounded-lg text-xl font-bold my-8 py-4 block w-full text-cream focus-within:sr-only lowercase  cursor-pointer transform transition-all duration-600 ease-in-out scale-100 opacity-100
hover:opacity-90 hover:scale-97 active:scale-90 active:bg-peach'
            >
              Get At It
            </button>
            <div className='flex justify-between'>
              <Link href={'/store'} passHref>
                <a className='font-semibold text-blue text-xl'>← more good good</a>
              </Link>
              <Link href={'/store/cart'} passHref>
                <a className='font-semibold text-blue text-xl hover:opacity-90 active:scale-90 active:opacity-60'>
                  {' '}
                  check out →
                </a>
              </Link>
            </div>
          </div>
        </div>
      </PageSection>
      {/* <Maintenance /> */}
    </main>
  )
}

export default StoreProduct
