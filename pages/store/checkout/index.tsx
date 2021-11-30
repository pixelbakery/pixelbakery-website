import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import ShippingAddressForm from '../../../components/pg-store/ShippingAddressForm'
import useCart from '../../../hooks/useCart'
import useCheckoutToken from '../../../hooks/useCheckoutToken'

let Checkout: NextPage = () => {
  const { data: cart } = useCart()
  const { data: token } = useCheckoutToken(cart?.id)

  console.log({ token })
  const [step, setStep] = useState(1)
  const [furthestStep, setFurthest] = useState(1)
  useEffect(() => {
    setFurthest(Math.max(furthestStep, step))
  }, [step])

  return (
    <main className='lander p-4'>
      <div className='max-w-screen-lg flex flex-row items-start gap-12'>
        <div className='flex-1'>
          <div className='p-4 border-b'>
            <h3>Shipping</h3>
            {furthestStep >= 1 && step !== 1 && <button onClick={() => setStep(1)}>Edit</button>}
            {step === 1 && <ShippingAddressForm onSubmit={() => setStep(2)} />}
          </div>
          <div className='p-4 border-b'>
            <h3>Billing</h3>
            {furthestStep >= 2 && step !== 2 && <button onClick={() => setStep(2)}>Edit</button>}
            {step === 2 && (
              <div>
                <select className='block'>
                  {token?.shipping_methods?.map((opt) => (
                    <option value={opt.id} key={opt.id}>
                      {opt.description} {opt.price.formatted_with_symbol}
                    </option>
                  ))}
                </select>
                {/* <ShippingOptions /> */}
                <button onClick={() => setStep(3)}>Next</button>
              </div>
            )}
          </div>
          <div className='p-4 border-b'>
            <h3>Payment</h3>
            {furthestStep >= 3 && step !== 3 && <button onClick={() => setStep(3)}>Edit</button>}
            {step === 3 && <p>Stripe widget or something here</p>}
          </div>
        </div>

        <div className='sticky flex-1 top-12 p-4 bg-blue-light'>
          <p>Cart info here</p>
          {cart?.line_items.map((item) => (
            <div key={item.id} className='flex flex-row items-center'>
              <p>
                {item.name} x{item.quantity}
              </p>
              <div className='flex-1'></div>
              <p>{item?.line_total?.formatted_with_symbol}</p>
            </div>
          ))}
          <h3>{cart?.subtotal.formatted_with_symbol}</h3>
        </div>
      </div>
    </main>
  )
}
export default Checkout
