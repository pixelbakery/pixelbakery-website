import { Checkout } from '@chec/commerce.js/features/checkout'
import { Cart } from '@chec/commerce.js/types/cart'
import { CheckoutToken } from '@chec/commerce.js/types/checkout-token'
import { Live } from '@chec/commerce.js/types/live'
import { ShippingMethod } from '@chec/commerce.js/types/shipping-method'
import create from 'zustand'
import commerce from '@lib/commerce'

type CheckoutState = {
  token: any
  checkout?: CheckoutToken
  cart?: Cart
  live?: Live
  shippingMethod?: ShippingMethod
  setLive: (live: Live) => void
  fetchCart: any
  fetchToken: any
}

export const useCheckoutState = create<CheckoutState>((set, get) => ({
  token: null,
  cart: undefined,
  live: undefined,
  shippingMethod: undefined,
  setLive: (live: Live) => set({ live }),
  fetchCart: async () => {
    const cart = await commerce.cart.retrieve()
    set({ cart })
  },
  fetchToken: async () => {
    const cart = get().cart
    if (!cart) {
      return
    }
    const token = await commerce.checkout.generateTokenFrom('cart', cart.id)
    const live = token.live
    set({ token, live, checkout: token })
  },
}))
