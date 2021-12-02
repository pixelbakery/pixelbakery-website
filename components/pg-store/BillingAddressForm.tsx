import React, { useEffect, useState } from 'react'
import { Formik, useFormik, useFormikContext } from 'formik'
import commerce from '../../lib/commerce'

export default function BillingAddressForm({ onSubmit }) {
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
          value={(values as any).billing.city}
        />
        <select placeholder='state' className='flex-1'>
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
      />
    </div>
  )
}
