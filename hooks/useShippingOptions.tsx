import { useEffect, useState, useRef } from 'react'
import commerce from '../lib/commerce'
import { useCheckoutState } from './useCheckoutState'

export default function useShippingOptions(country: string, region: string | undefined) {
  const [options, setOptions] = useState<any[] | null>(null)
  const { checkout } = useCheckoutState()
  const previousArgs = useRef<{ country: string; region: string | undefined } | null>(null)

  useEffect(() => {
    if (!checkout || !country) {
      console.log('no asdf ', { checkout, country })
      return
    }

    if (previousArgs.current) {
      const prevCountry = previousArgs.current.country
      const prevRegion = previousArgs.current.region

      if (prevCountry !== country && prevRegion === region) {
        setOptions(null)
        previousArgs.current = { country, region }
        return
      }
    }

    previousArgs.current = { country, region }

    commerce.checkout
      .getShippingOptions(checkout.id, {
        country,
        region,
      })
      .then(setOptions as any)
      .catch(({ statusCode }: { statusCode: number }) => {
        // If doesnt exist, set to null.
        if (statusCode === 404) {
          setOptions(null)
        }
      })
  }, [checkout, country, region])

  return options
}
