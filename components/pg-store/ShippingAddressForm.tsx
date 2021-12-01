import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'
import commerce from '../../lib/commerce'

export default function ShippingAddressForm({ onSubmit }) {
  const [states, setStates] = useState({})
  useEffect(() => {
    commerce.services.localeListSubdivisions('US').then((res) => setStates(res.subdivisions))
  }, [])

  console.log(states)
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
      }}
      onSubmit={() => {
        onSubmit()
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-row gap-4'>
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
            </div>
            <input
              type='text'
              name='address'
              placeholder='Address'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.address}
            />

            <div className='flex flex-row gap-4'>
              <input
                type='text'
                name='city'
                placeholder='City'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.city}
              />
              <select placeholder='state' className='flex-1'>
                {Object.keys(states).map((s) => (
                  <option key={s} value={s}>
                    {states[s]}
                  </option>
                ))}
                {/* // <option value='NE'>Nebraska</option> */}
              </select>
              {/* <input
                type='text'
                name='state'
                placeholder='State'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.state}
              /> */}
            </div>
            <input
              type='text'
              name='postalCode'
              placeholder='Zip Code'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.postalCode}
            />

            <button type='submit'>Next</button>
          </div>
        </form>
      )}
    </Formik>
  )
}
