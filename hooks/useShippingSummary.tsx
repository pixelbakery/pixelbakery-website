import { useCheckoutState } from './useCheckoutState'

export default function useShippingSummary() {
  const { live } = useCheckoutState()

  if (!live) {
    return false
  }

  const { shipping } = live

  return shipping
}
