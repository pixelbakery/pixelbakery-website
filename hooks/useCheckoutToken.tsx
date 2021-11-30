import { useQuery } from 'react-query'
import commerce from '../lib/commerce'

function getToken() {
  return commerce.checkout.generateTokenFrom('permalink', 'white-shirt')
}
export default function useCheckoutToken(cartId: string) {
  return useQuery(
    'checkout-token',
    () => commerce.checkout.generateToken(cartId, { type: 'cart' }),
    {
      refetchOnWindowFocus: false,
      enabled: !!cartId,
    },
  )
}
