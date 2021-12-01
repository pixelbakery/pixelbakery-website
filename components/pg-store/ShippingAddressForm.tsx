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
      <div className='w-full flex flex-row gap-4'>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          autoComplete='given-name'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.billing.firstName}
          className='w-1/2'
        />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          autoComplete='family-name'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.billing.lastName}
          className='w-1/2'
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
        autoComplete='street-address'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.shipping.address}
      />

      <div className='flex flex-row gap-4'>
        <input
          type='text'
          name='shipping.city'
          placeholder='City'
          autoComplete='address-level2'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.shipping.city}
        />
        <select
          placeholder='state'
          className='flex-1'
          autoComplete='address-level1'
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
        autoComplete='postal-code'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.postalCode}
      />
    </div>
  )
}
