/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable react/prop-types */
/* eslint-disable */
/* eslint-disable react/react-in-jsx-scope */
import { Cart } from '@chec/commerce.js/types/cart'
import { Live } from '@chec/commerce.js/types/live'
import Link from 'next/link'

import { useCheckoutState } from '@hooks/useCheckoutState'
import useShippingSummary from '@hooks/useShippingSummary'
import useTotals from '@hooks/useTotals'

type Props = {
  cost: number
  price: any
  shipping?: {
    price: any
  }
  onCostChange: any
  cart?: Cart

  [key: string]: any
}
function Store_CartDetails({ pwywMin, pwywMax, pwyw, onPwywChange }: Props) {
  const { cart, live } = useCheckoutState()
  const { subtotal, total, totalWithTax, totalDue, tax } = useTotals()

  const shipping = useShippingSummary()

  const actualTotal = totalDue?.raw + live.tax?.amount?.raw

  return (
    <div className='mx-auto col-span-5 lg:col-span-5 lg:max-w-2xl lg:sticky top-12 px-4 md:px-20 py-8 lg:py-20 bg-blue-light order-last lg:order-last rounded-lg'>
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
            <a target='_blank' className='text-peach underline'>
              Child Advocacy Center
            </a>
          </Link>
          .
        </p>
        <p className='font-semibold text-md mt-4'>
          NOTE: Currently, you have to move the slider a little bit to successfully check out. If
          you'd like to pay the minimum price, simply slide it back all the way to the left.
        </p>
      </div>
      <div className='my-4 flex flex-col md:flex-row gap-6 items-center mt-8'>
        <input
          type='range'
          min={pwywMin}
          max={pwywMax}
          value={Number(pwyw ?? 0).toFixed(2)}
          onChange={onPwywChange}
          className='bg-blue slider w-full md:w-auto md:flex-grow'
        />
        <span>
          <span className='font-medium text-xl text-wine mr-1'>
            ${Number(pwyw ?? 0).toFixed(2)}
          </span>
        </span>
      </div>
      <p className='text-wine text-right'>shipping {shipping?.price.formatted_with_symbol}</p>
      <p className='text-wine text-right italic py-2'>tax {tax?.amount.formatted_with_symbol}</p>
      <p className='text-wine text-right italic py-2 text-opacity-60'>
        taxes will be calculated after you enter a billing address
      </p>
      <h3 className='mt-8 text-right font-semibold text-2xl text-wine'>
        ${actualTotal.toFixed(2)}
      </h3>
    </div>
  )
}

export default Store_CartDetails
