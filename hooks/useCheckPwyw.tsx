import { CheckPayWhatYouWantResponse } from '@chec/commerce.js/features/checkout'
import { useCallback, useContext } from 'react'
import commerce from '../lib/commerce'
import { useCheckoutState } from './useCheckoutState'

export default function useCheckPwyw() {
  const { checkout, setLive } = useCheckoutState()

  return useCallback(
    async (data: { customer_set_price: string }): Promise<CheckPayWhatYouWantResponse> => {
      if (!checkout) {
        return null
      }

      return commerce.checkout.checkPayWhatYouWant(checkout.id, data).then((result: any) => {
        setLive(result.live)
        return result
      })
    },
    [checkout, setLive],
  )
}
