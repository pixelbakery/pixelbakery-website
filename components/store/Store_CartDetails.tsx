/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-pattern */
// 👇️ ts-nocheck ignores all ts errors in the file
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { Cart } from '@chec/commerce.js/types/cart'
import { Price } from '@chec/commerce.js/types/price'
import { useCheckoutState } from '@hooks/useCheckoutState'
import useShippingSummary from '@hooks/useShippingSummary'
import useTotals from '@hooks/useTotals'

type Props = {
  cost: number
  shipping?: {
    price?: Price
  }
  cart?: Cart
  [key: string]: any
}

function Store_CartDetails({}: Props) {
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
          amount: {cart?.subtotal.formatted_with_symbol}
        </p>
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
