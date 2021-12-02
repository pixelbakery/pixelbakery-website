import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import commerce from '../lib/commerce'

function getToken() {
  return commerce.checkout.generateTokenFrom('permalink', 'white-shirt')
}
export default function useCheckoutToken(cartId: string) {
  const [token, setToken] = useState<any>(null)

  const refetch = async () => {
    const tok = await commerce.checkout.generateToken(cartId, { type: 'cart' })
    setToken(tok)
  }

  useEffect(() => {
    if (!cartId) {
      return
    }
    refetch()
  }, [cartId])

  return { data: token }
}
