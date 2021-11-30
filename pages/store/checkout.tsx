import { NextPage } from 'next'
import { Formik } from 'formik'
import useCart from '../../hooks/useCart'
import useShippingOptions from '../../hooks/useShippingOptions'
import useCheckoutToken from '../../hooks/useCheckoutToken'
let Checkout: NextPage = () => {
  const { data: cart } = useCart()
  const { data: token } = useCheckoutToken(cart?.id)
  const { data: shippingOptions } = useShippingOptions(token)

  return (
    <main className='lander p-4'>
      checkout
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          address: '',
          city: '',
          state: '',
          postalCode: '',
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <input
              type='text'
              name='firstName'
              placeholder='First Name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.firstName}
            />
            <input
              type='text'
              name='lastName'
              placeholder='Last Name'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
            />

            <input
              type='text'
              name='address'
              placeholder='Address'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />

            <input
              type='text'
              name='city'
              placeholder='City'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.city}
            />
            <input
              type='text'
              name='state'
              placeholder='State'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.state}
            />
            <input
              type='text'
              name='postalCode'
              placeholder='Zip Code'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.postalCode}
            />

            <button>Next</button>
          </form>
        )}
      </Formik>
      <p>
        Shipping
        <select>
          {shippingOptions?.map((opt) => (
            <option value={opt.id} key={opt.id}>
              {opt.description} {opt.price.formatted_with_symbol}
            </option>
          ))}
        </select>
        {/* {JSON.stringify(shippingOptions)} */}
      </p>
    </main>
  )
}
export default Checkout
