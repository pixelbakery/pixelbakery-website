import { NextPage } from 'next'
import useCart from '../../hooks/useCart'

let CheckoutPage: NextPage = () => {
  const { data: cart } = useCart()
  return (
    <main className='p-4'>
      <h1>Checkout</h1>
      <div>
        {cart?.line_items.map((item) => (
          <div key={item.id} className='p-4'>
            <p>
              {item.name} <b>{item.quantity}</b>
            </p>
          </div>
        ))}
        {/* {JSON.stringify(cart)} */}
      </div>
    </main>
  )
}
export default CheckoutPage
