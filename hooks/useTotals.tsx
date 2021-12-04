import { OrderTax } from '@chec/commerce.js/types/order-tax'
import { Price } from '@chec/commerce.js/types/price'
import { useCheckoutState } from './useCheckoutState'

export default function useTotals(): {
  subtotal: Price
  total: Price
  totalWithTax: Price
  totalDue: Price
  tax: OrderTax
} {
  const { checkout, live } = useCheckoutState()

  // if (!checkout) {
  //   return false
  // }

  const { subtotal, total, total_due: totalDue, total_with_tax: totalWithTax, tax } = live

  return {
    subtotal,
    total,
    totalWithTax,
    totalDue,
    tax,
  }
}
