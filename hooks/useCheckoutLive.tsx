import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import commerce from '../lib/commerce'

export default function useCheckoutLive(token: string) {
  return useQuery(
    'checkout-live',
    async () => {
      console.log('live token', token)
      const live = await commerce.checkout.getLive(token)
      console.log('new live', live)
      return live
    },
    {
      enabled: !!token,
    },
  )
}
