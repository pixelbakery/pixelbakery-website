import { NextPage } from 'next'
import useCart from '../../hooks/useCart'
import Navigation from '../../components/Navigation'
import PageSection from '../../components/PageSection'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/solid'
import Image from 'next'

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

        <div className='bg-cream p-16 my-2'>
          <table className='w-full text-left '>
            <thead>
              {/* TODO: 
                - wrap item name and item photo in a Link and redirect back to product page 
                - remove item button and/or quantity selector 
                -  add subtotal, shipping rate, and tax 
                - fix vertical alignment so quantity and price are top aligned
                */}
              <tr className='text-md font-semibold text-wine text-opacity-90'>
                <th className='z-20  top-0 p-0 '>
                  <div className='pb-3 pr-2 border-b-4 border-pink'>Item</div>
                </th>
                <th className='z-20  mr-4 top-0 p-0 text-center'>
                  <div className='pb-3 px-2 border-b-4 border-pink'>Quantity</div>
                </th>
                <th className='z-20  top-0 p-0'>
                  <div className='pb-3 px-2 border-b-4 border-pink'>Price</div>
                </th>
              </tr>
            </thead>
            <tbody className='align-baseline'>
              {cart?.line_items.map((item) => (
                <tr key={item.id} className='py-3 pr-2  border-b border-wine-100'>
                  <td className='py-8 px-2 font-medium  text-xl text-opacity-90 text-wine whitespace-nowrap flex'>
                    <div className='w-32 h-32 mr-16'>
                      <img
                        src={item.media.source}
                        className='w-full h-full object-center object-cover'
                        alt={'pixel bakery shop: ' + item.name}
                      />
                    </div>
                    <p className=''>{item.name}</p>
                  </td>
                  <td className='py-8 px-2 text-xl text-opacity-80 text-wine text-center whitespace-nowrap '>
                    <p>{item.quantity}x</p>
                  </td>
                  <td className='py-8 px-2  text-xl text-opacity-80 text-wine whitespace-nowrap'>
                    <p> {item.line_total.formatted_with_symbol}</p>
                  </td>
                </tr>
              ))}
              {/* {JSON.stringify(cart)} */}
            </tbody>
          </table>
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
