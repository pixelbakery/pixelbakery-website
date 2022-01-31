import commerce from '@lib/commerce'
import { useCheckoutState } from './useCheckoutState'

export default function useSetShippingOption() {
  const { checkout, setLive } = useCheckoutState()

  return (shippingOption: string, country: string, region: string | null = null) =>
    commerce.checkout
      .checkShippingOption(checkout.id, {
        shipping_option_id: shippingOption,
        country,
        region,
      })
      .then((result: any) => {
        setLive(result.live)
        return result
      })
}
