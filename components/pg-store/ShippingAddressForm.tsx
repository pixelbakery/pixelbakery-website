import React, { useEffect, useState } from 'react'
import { Formik, useFormik, useFormikContext } from 'formik'
import commerce from '../../lib/commerce'

export default function ShippingAddressForm({ onSubmit }) {
  const [states, setStates] = useState({})
  useEffect(() => {
    commerce.services.localeListSubdivisions('US').then((res) => setStates(res.subdivisions))
  }, [])

  const { values, handleChange, handleBlur } = useFormikContext()
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-row gap-4'>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.billing.firstName}
        />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.billing.lastName}
        />
      </div>
      <input
        type='text'
        name='email'
        placeholder='Email Address'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.billing.email}
      />
      <input
        type='text'
        name='phoneNumber'
        placeholder='Phone Number'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.billing.phoneNumber}
      />
      <input
        type='text'
        name='shipping.address'
        placeholder='Address'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.billing.address}
      />

      <div className='flex flex-row gap-4'>
        <input
          type='text'
          name='shipping.city'
          placeholder='City'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.billing.city}
        />
        <select
          placeholder='state'
          className='flex-1'
          value={values.shipping.state}
          name='shipping.state'
          onChange={handleChange}
        >
          {Object.keys(states).map((s) => (
            <option key={s} value={s}>
              {states[s]}
            </option>
          ))}
        </select>
      </div>
      <input
        type='text'
        name='shipping.postalCode'
        placeholder='Zip Code'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.postalCode}
      />
    </div>
  )
}
