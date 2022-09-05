import commerce from '@lib/commerce'
import { useCheckoutState } from './useCheckoutState'

export default function useDiscountCode() {
  const { checkout, setLive } = useCheckoutState()

  return (code: string) =>
    commerce.checkout
      .checkDiscount(checkout.id, { code })

      .then((result: any) => {
        setLive(result.live)
        return result
      })
}
