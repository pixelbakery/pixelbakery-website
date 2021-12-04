import { useCallback, useContext } from 'react'
import commerce from '../lib/commerce'
import { useCheckoutState } from './useCheckoutState'

export default function useSetTaxZone() {
  const { checkout, setLive } = useCheckoutState()

  return useCallback(
    async (data: {
      ip_address?: string | undefined
      country?: string | undefined
      region?: string | undefined
      postal_zip_code?: string | undefined
    }) => {
      if (!checkout) {
        return null
      }

      return commerce.checkout.setTaxZone(checkout.id, data).then((result: any) => {
        setLive(result.live)
        return result
      })
    },
    [checkout, setLive],
  )
}
