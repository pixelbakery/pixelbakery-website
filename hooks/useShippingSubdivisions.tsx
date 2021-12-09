import { useEffect, useState } from 'react'
import commerce from '../lib/commerce'
import { useCheckoutState } from './useCheckoutState'

export default function useShippingSubdivisions(countryCode: string) {
  const { checkout } = useCheckoutState()

  const [subdivisions, setSubdivisions] = useState<any[] | null>()

  useEffect(() => {
    if (!checkout || !commerce) {
      return
    }

    if (!countryCode) {
      setSubdivisions(null)
      return
    }

    commerce.services
      .localeListShippingSubdivisions(checkout.id, countryCode)
      .then((response: any) => setSubdivisions(response.subdivisions))
  }, [checkout, countryCode])

  return subdivisions
}
