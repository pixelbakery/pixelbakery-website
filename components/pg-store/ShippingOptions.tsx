import React from 'react'
import useCart from '../../hooks/useCart'
import useCheckoutToken from '../../hooks/useCheckoutToken'
import useShippingOptions from '../../hooks/useShippingOptions'

export default function ShippingOptions() {
  const { data: cart } = useCart()
  const { data: token } = useCheckoutToken(cart?.id)
  const { data: shippingOptions } = useShippingOptions(token)

  return (
    <select className='block'>
      {shippingOptions?.map((opt) => (
        <option value={opt.id} key={opt.id}>
          {opt.description} {opt.price.formatted_with_symbol}
        </option>
      ))}
    </select>
  )
}
