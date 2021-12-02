import { Cart } from '@chec/commerce.js/types/cart'
import { Live } from '@chec/commerce.js/types/live'
import { ShippingMethod } from '@chec/commerce.js/types/shipping-method'
import create from 'zustand'
import commerce from '../lib/commerce'

type CheckoutState = {
  token: any
  cart?: Cart
  live?: Live
  shippingMethod?: ShippingMethod
  fetchCart: any
  fetchToken: any // () => Promise<void>
  checkPWYW: any // () => Promise<void>
  setShippingMethod: any // () => Promise<void>
  setTaxZone: any //(taxZone: { state: string; postal_zip_code: string }) => Promise<void>
}
export const useCheckoutState = create<CheckoutState>((set, get) => ({
  token: null,
  cart: undefined,
  live: undefined,
  shippingMethod: undefined,
  fetchCart: async () => {
    console.log('get cart')
    const cart = await commerce.cart.retrieve()
    console.log('-- -- -- cart', cart)

    set({ cart })
    console.log('set cart', get())
  },
  fetchToken: async () => {
    console.log('get token')
    const cart = get().cart
    if (!cart) {
      return
    }
    const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' })
    const live = token.live
    set({ token, live })
  },
  checkPWYW: async (pwyw: number) => {
    if (!get().token) {
      return
    }
    const cart = get().cart
    const live = get().live
    if (!cart || !live) {
      return
    }
    let amount = Math.max(live?.pay_what_you_want?.minimum?.raw || cart?.subtotal.raw, pwyw)
    const resp = await commerce.checkout.checkPayWhatYouWant(get().token.id, {
      customer_set_price: amount.toFixed(2),
    })
    if (resp.valid) {
      console.log(resp.live)
      set({
        live: {
          ...get().live,
          pay_what_you_want: resp.live.pay_what_you_want,
        } as Live,
      })
    }
    // .then((resp) => {
    //   setLive({
    //     ...live,
    //     ...resp.live,
    //   })
    // })
    // await Promise.resolve([])
  },
  setShippingMethod: async (shippingMethod) => {
    if (!get().token || !shippingMethod) {
      return
    }
    const resp = await commerce.checkout.checkShippingOption(get().token.id, {
      shipping_option_id: shippingMethod.id,
      country: 'US',
    })
    const live: Live = {
      ...(get().live as any),
      shipping: resp.live.shipping,
    }
    set({
      shippingMethod,
      live: live,
    })
  },
  setTaxZone: async (taxZone) => {
    const token = get().token
    if (!token) {
      return
    }
    const resp = await commerce.checkout.setTaxZone(token?.id, {
      country: 'US',
      region: taxZone.state,
      postal_zip_code: taxZone.postalCode,
    })

    console.log(resp)
    if (resp.valid) {
      set({
        live: {
          ...get().live,
          // ...resp.live,
          tax: resp.live.tax,
        },
      })
    }
  },
  //   increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 })
}))
