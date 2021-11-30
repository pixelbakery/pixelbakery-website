import { NextPage } from 'next'
import useCart from '../../hooks/useCart'
import Navigation from '../../components/Navigation'
import PageSection from '../../components/PageSection'
import Maintenance from '../../components/pg-store/maintenance'
import Link from 'next/link'
import commerce from '../../lib/commerce'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import { useQueryClient } from 'react-query'

function CartItem({ item }) {
  const client = useQueryClient()
  const increment = async () => {
    await commerce.cart.update(item.id, { quantity: item.quantity + 1 })
    client.refetchQueries('cart')
  }
  const decrement = async () => {
    await commerce.cart.update(item.id, { quantity: item.quantity - 1 })
    client.refetchQueries('cart')
  }
  const remove = async () => {
    await commerce.cart.update(item.id, { quantity: 0 })
    client.refetchQueries('cart')
  }

  return (
    <div className='flex flex-row w-full py-8 gap-16 border-b border-wine-100 '>
      <div className='w-32 h-32 relative '>
        <Link href={`/store/product/${item.permalink}`}>
          <a>
            <Image
              src={item.media.source}
              layout='fill'
              className='w-full h-full object-center object-cover'
              alt={'pixel bakery shop: ' + item.name}
            />
          </a>
        </Link>
      </div>
      <div className='flex-1 flex flex-col items-start text-wine'>
        <Link href={`/store/product/${item.permalink}`}>
          <a>
            <p className='font-medium text-xl'>{item.name}</p>
          </a>
        </Link>
        <div className='flex-1' />
        <div className='flex flex-row items-center'>
          <button className='px-3 text-xl text-wine text-opacity-80' onClick={decrement}>
            -
          </button>
          <p className='text-xl text-opacity-80 '>{item.quantity}</p>
          <button className='px-3 text-xl text-wine text-opacity-80' onClick={increment}>
            +
          </button>
        </div>
      </div>
      <div className='flex flex-col items-end'>
        <p className='font-medium text-xl text-opacity-80 text-wine'>
          {item.line_total.formatted_with_symbol}
        </p>
        <div className='flex-1' />
        <button className='text-wine text-opacity-80 underline' onClick={remove}>
          remove
        </button>
      </div>
    </div>
  )
}

let CheckoutPage: NextPage = () => {
  const { data: cart, refetch } = useCart()

  const clearCart = async () => {
    await commerce.cart.empty()
    refetch()
  }

  const addQuantity = async (item: any) => {
    await commerce.cart.update(item.id, { quantity: item.quantity + 1 })
    refetch()
    console.log('ADDED ITEM')
  }
  const subtractQuantity = async (item: any) => {
    await commerce.cart.update(item.id, { quantity: item.quantity - 1 })

    console.log('SUBTRACTED ITEM')
    refetch()
  }
  const removeLineItem = async (item: any) => {
    await commerce.cart.update(item.id, { quantity: 0 })

    console.log('REMOVED ITEM')
    refetch()
  }

  return (
    <main id='page-checkout' className='relative'>
      <PageSection
        className={'bg-pink-light inset-0 lg:pt-20 my-4'}
        innerMaxWidth={'max-w-screen-sm md:max-w-screen-md lg:max-w-6xl'}
      >
        <Link href='/store' passHref>
          <a className='block text-blue text-md cursor-pointer py-3'>← Back to store </a>
        </Link>
        <h1 className='text-pink text-7xl'>
          Chikity
          <br /> chikity
          <br /> checkout
        </h1>

        <h2 className='text-3xl mt-20 mb-4'>💁‍♀️ What you&apos;re buyin&apos; </h2>

        <div className='bg-cream px-16 pb-16 pt-8 my-2'>
          {cart?.line_items?.length > 0 ? (
            <button
              onClick={clearCart}
              className='text-blue border rounded-md text-md font-light px-3 py-1'
            >
              clear cart
            </button>
          ) : null}
          {/* TODO: 
                - wrap item name and item photo in a Link and redirect back to product page 
                */}
          <div className='mt-4 grid grid-cols-1 w-full gap-12'>
            {cart?.line_items.map((item) => (
              <div
                key={item.id}
                className='py-4 border-b border-pink-light col-span-1 grid grid-cols-5 font-medium  text-xl text-opacity-90 text-wine'
              >
                <div className='col-span-1'>
                  <div className='w-20 h-20 lg:w-32 lg:h-32 lg:mr-16'>
                    <img
                      src={item.media.source}
                      className='rounded-md w-full h-full object-center object-cover'
                      alt={'pixel bakery shop: ' + item.name}
                    />
                  </div>
                </div>
                <div className='pb-4 col-span-5 lg:col-span-2 order-first lg:order-2 '>
                  <p className=''>{item.name}</p>
                </div>
                <div className='col-span-3 lg:col-span-1 flex flex-col'>
                  <div className='self-center'>
                    <button
                      className='inline-block leading-none text-blue text-md font-md mx-3 px-2 py-1 border border-blue rounded-md transform transition-all duration-600 ease-in-out scale-100 opacity-100
hover:opacity-90 hover:scale-98 active:scale-97'
                      onClick={() => subtractQuantity(item)}
                    >
                      –
                    </button>
                    {item.quantity}
                    <button
                      className='inline-block leading-none text-blue text-md font-md mx-3 px-2 py-1 border border-blue rounded-md transform transition-all duration-600 ease-in-out scale-100 opacity-100
hover:opacity-90 hover:scale-98    active:scale-97'
                      onClick={() => addQuantity(item)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className='text-center w-full mt-2 text-blue text-opacity-60 text-sm italic'
                    onClick={() => removeLineItem(item)}
                  >
                    {' '}
                    Remove Item{' '}
                  </button>
                </div>
                <div className='lg:col-span-1 text-right order-last'>
                  {' '}
                  <p> {item.line_total.formatted_with_symbol}</p>
                </div>
              </div>
            ))}
          </div>

          {cart?.line_items?.length > 0 ? (
            <div className='text-right font-semibold text-2xl text-opacity-80 py-4 my-6  text-wine'>
              <span className='lg:mr-20'>subtotal:</span> {cart?.subtotal.formatted_with_symbol}
            </div>
          ) : (
            <div>
              <h3 className='text-wine text-xl italic font-semibold text-opacity-40'>
                well, that's a sad looking cart.{' '}
                <Link href='/store' passHref>
                  <a className='underline text-blue'>make it less sad</a>
                </Link>
                .
              </h3>
            </div>
          )}
        </div>
        <div className=' flex justify-end'>
          <Link href='/store/checkout' passHref>
            <button
              className='block text-right bg-peach py-4 px-12 my-8 text-pink-light rounded-lg text-2xl transform transition-all duration-600 ease-in-out scale-100 opacity-100
  hover:opacity-90 hover:scale-99 active:scale-97'
            >
              <span className='font-medium text-center'>pony up</span>
              <ChevronRightIcon className=' text-pink-light text-2xl inline-block w-12 ' />
            </button>
          </Link>
        </div>
      </PageSection>
      <Maintenance />
    </main>
  )
}
export default CheckoutPage
