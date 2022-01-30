import { useQuery } from 'react-query'
import commerce from '@lib/commerce'

export default function useCart() {
  return useQuery('cart', () => commerce.cart.retrieve())
}
