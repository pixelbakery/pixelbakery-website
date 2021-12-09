import React, { useEffect, useState } from 'react'
import { Formik, useFormik, useFormikContext } from 'formik'
import commerce from '../../lib/commerce'

export default function ShippingAddressForm() {
  const [states, setStates] = useState({})
  useEffect(() => {
    commerce.services.localeListSubdivisions('US').then((res) => setStates(res.subdivisions))
  }, [])

  const { values, handleChange, handleBlur } = useFormikContext<any>()
  return (
    <div className='flex flex-col gap-4 form-border-b'>
      <div className='w-full flex flex-row gap-4 '>
        <input
          type='text'
          name='firstName'
          placeholder='First Name'
          autoComplete='given-name'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstName}
          className='w-1/2  active:outline-none focus:outline-none '
        />
        <input
          type='text'
          name='lastName'
          placeholder='Last Name'
          autoComplete='family-name'
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastName}
          className='w-1/2'
        />
      </div>
      <input
        type='text'
        name='email'
        placeholder='Email Address'
        autoComplete='email'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      <input
        type='text'
        name='phoneNumber'
        placeholder='Phone Number'
        autoComplete='tel-national'
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.phoneNumber}
      />
      <input
        type='text'
        name='shipping.address'
        placeholder='Address'
        autoComplete='street-address'
        onChange={handleChange}
        onBlur={handleBlur}
        value={(values as any).shipping.address}
      />

      <div className='w-full flex flex-row gap-4'>
        <input
          type='text'
          name='shipping.city'
          placeholder='City'
          autoComplete='address-level2'
          onChange={handleChange}
          onBlur={handleBlur}
          value={(values as any).shipping.city}
          className='w-2/3'
        />
        <select
          placeholder='state'
          className='w-1/3'
          autoComplete='address-level1'
          value={(values as any).shipping.state}
          name='shipping.state'
          onChange={handleChange}
        >
          {Object.keys(states).map((s) => (
            <option key={s} value={s}>
              {(states as any)[s]}
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
        value={(values as any).postalCode}
      />
    </div>
  )
}
