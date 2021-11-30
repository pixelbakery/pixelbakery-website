import { NextPage } from 'next'
import useCart from '../../hooks/useCart'
import Navigation from '../../components/Navigation'
import PageSection from '../../components/PageSection'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import commerce from '../../lib/commerce'
import { useQueryClient } from 'react-query'

function CartItem({ item }) {
  // const [quantity, setQuantity] = useState(item.quantity)
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
  const { data: cart } = useCart()
  return (
    <main id='page-checkout' className='relative p-4'>
      <PageSection
        className={'bg-pink-light inset-0 pt-40'}
        innerMaxWidth={'max-w-screen-sm md:max-w-screen-md lg:max-w-6xl'}
      >
        <Link href='/store' passHref>
          <span className='text-blue text-md cursor-pointer py-2'>← Back to store </span>
        </Link>
        <h1 className='text-pink text-7xl'>
          Chikity
          <br /> chikity
          <br /> checkout
        </h1>

        <h2 className='text-3xl mt-20 mb-4'>💁‍♀️ What you're buyin' </h2>
        {/* TODO: 
                - wrap item name and item photo in a Link and redirect back to product page 
                - remove item button and/or quantity selector 
                -  add subtotal, shipping rate, and tax 
                - fix vertical alignment so quantity and price are top aligned
                */}
        <div className='bg-cream p-16 my-2'>
          {/* <table className='w-full text-left '>
            <thead>
              <tr className='text-md font-semibold text-wine text-opacity-90'>
                <th className='z-20  top-0 p-0 '>
                  <div className='pb-3 pr-2 border-b-4 border-pink'>Item</div>
                </th>
                <th className='z-20  mr-4 top-0 p-0 text-center'>
                  <div className='pb-3 px-2 border-b-4 border-pink text-right'>Quantity</div>
                </th>
                <th className='z-20  top-0 p-0'>
                  <div className='pb-3 px-2 border-b-4 border-pink text-right'>Price</div>
                </th>
              </tr>
            </thead>
            <tbody className='align-baseline'>
              {cart?.line_items.map((item) => (
                <React.Fragment key={item.id}>
                  <tr className='py-3 pr-2 border-b border-wine-100 items-start'>
                    <td className='py-8 px-2 font-medium text-xl text-opacity-90 text-wine whitespace-nowrap flex'>
                      <div className='w-32 h-32 mr-16'>
                        <img
                          src={item.media.source}
                          className='w-full h-full object-center object-cover'
                          alt={'pixel bakery shop: ' + item.name}
                        />
                      </div>
                      <p>{item.name}</p>
                    </td>
                    <td className='py-8 px-2 text-xl text-opacity-80 text-wine text-center whitespace-nowrap align-top'>
                      <div className='flex flex-row items-center justify-end'>
                        <p>{item.quantity}x</p>
                      </div>
                    </td>
                    <td className='py-8 px-2 text-xl text-opacity-80 text-wine whitespace-nowrap align-top'>
                      <p className='text-right'> {item.line_total.formatted_with_symbol}</p>
                      <div className='flex-1' />
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table> */}
          <div className='flex flex-row text-md font-semibold text-wine text-opacity-90'>
            <div className='z-20 flex-1 top-0 p-0'>
              <div className='pb-3 pr-2 border-b-4 border-pink'>Item</div>
            </div>
            <div className='z-20 top-0 p-0'>
              <div className='pb-3 px-2 border-b-4 border-pink text-right'>Price</div>
            </div>
          </div>
          <div>
            {cart?.line_items.map((item) => (
              <React.Fragment key={item.id}>
                <CartItem item={item} />
              </React.Fragment>
            ))}
          </div>
          <div className='text-right font-bold text-3xl text-opacity-90 py-4 my-6 mr-24 text-wine'>
            <span className='mr-20'>Total:</span> {cart?.subtotal.formatted_with_symbol}
          </div>
        </div>
        <div className=' flex justify-end'>
          <button className='text-right bg-peach py-4 px-12 my-8 text-pink-light rounded-lg text-2xl'>
            <span className='font-medium text-center'>checkout</span>
            <ChevronRightIcon className=' text-pink-light text-2xl inline-block w-12 ' />
          </button>
        </div>
      </PageSection>
    </main>
  )
}
export default CheckoutPage
