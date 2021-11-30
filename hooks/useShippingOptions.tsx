import { useQuery } from 'react-query'
import commerce from '../lib/commerce'

export default function useShippingOptions(checkoutId: any) {
  return useQuery(
    ['shipping-options', checkoutId],
    () => {
      return commerce.checkout.getShippingOptions(checkoutId?.id, { country: 'US' })
    },
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: !!checkoutId,
    },
  )
}
