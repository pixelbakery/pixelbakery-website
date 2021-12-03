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
import Head from 'next/head'
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
        <Head>
          <title>PBDS – Store – Cart</title>
          <meta name='description' content='Pixel Bakery store cart' />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://shop.pixelbakery.com' />
          <meta property='og:title' content='Pixel Bakery – Cart' />
          <meta property='og:description' content='Pixel Bakery store cart' />
          <meta property='og:image' content='/img/pixel-bakery-header.png' />
          <meta name='twitter:site' content='@pixelbakerylnk'></meta>
          <meta name='twitter:card' content='summary_large_image'></meta>
          <meta name='twitter:image:alt' content='Pixel Bakery Design Studio'></meta>
        </Head>
        <Link href='/store' passHref>
          <a className='block text-blue text-md cursor-pointer py-3'>← Back to store </a>
        </Link>
        <h1 className='text-pink text-4xl md:text-6xl lg:text-7xl'>
          Chikity
          <br /> chikity
          <br /> checkout
        </h1>

        <h2 className='text-3xl mt-10 lg:mt-20 mb-4'>💁‍♀️ What you&apos;re buyin&apos; </h2>

        <div className='bg-cream px-3 md:px-16 pb-16 pt-8 my-2'>
          {cart?.line_items?.length! > 0 ? (
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
          <div className='mt-4 grid grid-cols-1 w-full gap-4 md:gap-12'>
            {cart?.line_items.map((item) => {
              const opt = item.selected_options?.length > 0 ? item.selected_options[0] : null
              return (
                <div
                  key={item.id}
                  className='py-4 border-b border-pink-light col-span-1 grid grid-cols-5 font-medium  text-lg md:text-xl text-opacity-90 text-wine'
                >
                  <div className='xs:col-span-1 sm:col-span-1'>
                    <div className='w-20 h-20 lg:w-32 lg:h-32 lg:mr-16'>
                      <Link href='/store/product/[product]' as={`/store/product/${item.permalink}`}>
                        <a>
                          <img
                            src={item?.media?.source ?? item?.image?.url}
                            className='rounded-md w-full h-full object-center object-cover'
                            alt={'pixel bakery shop: ' + item.name}
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className='pb-4 col-span-5 lg:col-span-2 order-first lg:order-2 '>
                    <p className=''>
                      {item.name} {opt ? `(${opt?.option_name})` : ''}
                    </p>
                  </div>
                  <div className='col-span-3 lg:col-span-1 flex flex-col'>
                    <div className='self-center'>
                      <button
                        className='inline-block leading-none text-blue text-sm md:text-md  mx-3 px-2 py-1 border border-blue rounded-md transform transition-all duration-600 ease-in-out scale-100 opacity-100
hover:opacity-90 hover:scale-98 active:scale-97'
                        onClick={() => subtractQuantity(item)}
                      >
                        –
                      </button>
                      <span className='text-sm md:text-lg'>{item.quantity}</span>
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
              )
            })}
          </div>

          {cart?.line_items?.length! > 0 ? (
            <div className='text-right font-semibold text-2xl text-opacity-80 py-4 my-6  text-wine'>
              <span className='lg:mr-20'>subtotal:</span> {cart?.subtotal.formatted_with_symbol}
            </div>
          ) : (
            <div>
              <h3 className='text-wine text-xl italic font-semibold text-opacity-40'>
                well, that&apos;s a sad looking cart.{' '}
                <Link href='/store' passHref>
                  <a className='underline text-blue'>make it less sad</a>
                </Link>
                .
              </h3>
            </div>
          )}
        </div>
        <div className=' flex flex-col md:flex-row justify-between'>
          <Link href='/store' passHref>
            <a className='block text-blue text-md cursor-pointer py-3'>← Back to store </a>
          </Link>
          <Link href='/store/checkout' passHref>
            <button
              className='flex align-middle justify-center bg-peach py-4 px-12 my-8 text-pink-light rounded-lg text-xl md:text-2xl transform transition-all duration-600 ease-in-out scale-100 opacity-100
  hover:opacity-90 hover:scale-99 active:scale-97'
            >
              <span className='self-center inline-block font-medium text-center px-12'>
                pony up
              </span>

              <ChevronRightIcon className=' absolute right-4  top-1/2 transform -translate-y-1/2 text-pink-light text-xl md:text-2xl  w-12 ' />
            </button>
          </Link>
        </div>
      </PageSection>
      <Maintenance />
    </main>
  )
}
export default CheckoutPage
