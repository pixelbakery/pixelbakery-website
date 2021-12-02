import { Cart } from '@chec/commerce.js/types/cart'
import { Live } from '@chec/commerce.js/types/live'
import Link from 'next/link'
import { useCheckoutState } from '../../hooks/useCheckoutState'

type Props = {
  cost: number
  onCostChange: any
  cart?: Cart
  [key: string]: any
}
export default function CartDetails({ cartMin, cartMax, cost, onCostChange }: Props) {
  const { cart, live } = useCheckoutState()

  // const taxRate = live?.tax.breakdown
  //   .reduce((prev, next) => {
  //     return prev + (next?.rate ?? 0)
  //   }, 0)
  //   .toFixed(2)
  console.log(live, live?.subtotal?.raw)
  const pwyw =
    live?.pay_what_you_want?.customer_set_price?.raw > 0
      ? live?.pay_what_you_want?.customer_set_price?.raw
      : undefined
  const price = pwyw ?? live?.subtotal.raw
  // const tax = price * taxRate
  const tax = live?.tax.amount.formatted_with_symbol
  const shipping = live?.shipping?.price?.raw ?? 0
  const total = shipping + (price || 0) // + tax
  return (
    <div className='col-span-5 lg:col-span-2 lg:sticky top-12 px-8 py-8 bg-blue-light order-first lg:order-last'>
      <p className='text-blue-dark text-2xl font-bold mb-12 border-b-4 border-blue-dark pb-2 px-2 '>
        your cart
      </p>
      {cart?.line_items.map((item) => {
        const opt = item.selected_options?.length > 0 ? item.selected_options[0] : null
        return (
          <div key={item.id} className='text-wine text-md my-4 flex flex-row items-center'>
            <p>
              {item.name} {opt ? `(${opt?.option_name})` : ''} x{item.quantity}
            </p>
            <div className='flex-1'></div>
            <p>{item?.line_total?.formatted_with_symbol}</p>
          </div>
        )
      })}
      <div className='border-t-2 my-2 pt-2  border-blue-dark'>
        <p className='text-right text-wine text-sm italic'>
          minimum amount: {cart?.subtotal.formatted_with_symbol}
        </p>
      </div>
      <div>
        <p className='text-blue text-2xl font-semibold py-3'>Pay what you want</p>
        <p className='text-left text-wine text-md'>
          Adjust the slider below to change the price. All proceeds go to the{' '}
          <Link href='https://smallvoices.org' passHref>
            <a target='_blank' ref='noOpener' className='text-peach underline'>
              Child Advocacy Center
            </a>
          </Link>
          .
        </p>
      </div>
      <div className='my-4 flex flex-row gap-6 items-center mt-8'>
        <input
          type='range'
          min={cartMin}
          max={cartMax}
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
            min={cartMin}
            value={cost}
            onChange={onCostChange}
          />
        </span>
      </div>
      <p className='text-wine text-right'>shipping {live?.shipping?.price.formatted_with_symbol}</p>
      <p className='text-wine text-right'>
        tax {tax}
        {/* <br />
        {JSON.stringify(live?.tax)} */}
      </p>
      <h3 className='mt-8 text-right font-semibold text-2xl text-wine'>
        {total.toFixed(2)}
        {/* {live?.pay_what_you_want?.customer_set_price?.formatted_with_symbol} */}
      </h3>
    </div>
  )
}
