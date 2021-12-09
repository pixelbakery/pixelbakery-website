import React, { useEffect, useState } from 'react'
import { Formik, useFormik, useFormikContext } from 'formik'
import commerce from '../../lib/commerce'

export default function BillingAddressForm({}) {
  const [states, setStates] = useState({})
  useEffect(() => {
    commerce.services.localeListSubdivisions('US').then((res) => setStates(res.subdivisions))
  }, [])

  const { values, handleChange, handleBlur } = useFormikContext()
  return (
    <div className='flex flex-col gap-4 form-border-b'>
      <input
        type='text'
        name='billing.address'
        placeholder='Address'
        autoComplete='street-address'
        onChange={handleChange}
        onBlur={handleBlur}
        value={(values as any).billing.address}
      />

      <div className='flex flex-row gap-4'>
        <input
          type='text'
          name='billing.city'
          placeholder='City'
          onChange={handleChange}
          onBlur={handleBlur}
          autoComplete='address-level2'
          value={(values as any).billing.city}
          className='w-2/3'
        />
        <select placeholder='state' autoComplete='address-level1' className='w-1/3  '>
          {Object.keys(states).map((s) => (
            <option key={s} value={s}>
              {(states as any)[s]}
            </option>
          ))}
        </select>
      </div>
      <input
        type='text'
        name='billing.postalCode'
        placeholder='Zip Code'
        onChange={handleChange}
        onBlur={handleBlur}
        value={(values as any).billing.postalCode}
        autoComplete='postal-code'
      />
    </div>
  )
}
