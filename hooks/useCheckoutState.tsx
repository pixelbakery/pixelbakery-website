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
    if (!get().token || (!pwyw && pwyw !== 0)) {
      console.log('returning no token or pwyw', get().token, pwyw)
      return
    }
    const cart = get().cart
    const live = get().live
    if (!cart || !live) {
      console.log('returning')
      return
    }
    let amount = Math.max(Number(pwyw), live?.pay_what_you_want?.minimum?.raw ?? 0) // Number(pwyw) + live?.shipping?.price?.raw ?? 0 // ?? live?.total?.raw ?? 0 //Math.max(live.total.raw, pwyw)

    console.log(
      '---------------------------',
      'set',
      {
        amount,
      },
      live,
    )
    const resp = await commerce.checkout.checkPayWhatYouWant(get().token.id, {
      customer_set_price: (amount + 0.01).toString(), //Number(amount).toFixed(2),
    })
    if (resp.valid) {
      const c = resp.live.pay_what_you_want.customer_set_price
      set({
        live: {
          ...get().live,
          pay_what_you_want: {
            ...resp.live.pay_what_you_want,
            customer_set_price: c
              ? {
                  raw: c.raw - 0.01,
                  formatted: c.raw.toFixed(2),
                  formatted_with_symbol: `$${c.raw.toFixed(2)}`,
                }
              : undefined,
          },
        } as Live,
      })
    }
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
      pay_what_you_want: {
        ...get().live.pay_what_you_want,
        minimum: resp.live.pay_what_you_want.minimum,
      },
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

    if (resp.valid) {
      set({
        live: {
          ...get().live,
          pay_what_you_want: {
            ...get().live.pay_what_you_want,
            minimum: resp.live.pay_what_you_want.minimum,
          },
          tax: resp.live.tax,
        },
      })
    }
    return resp.valid
  },
  //   increasePopulation: () => set(state => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 })
}))
