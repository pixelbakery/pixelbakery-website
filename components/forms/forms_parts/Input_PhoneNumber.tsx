import React from 'react'
import { Controller, Control, FieldErrors } from 'react-hook-form'
import Label from './Input_Label'
interface PhoneInputProps {
  control: Control<any> // Replace `any` with your specific form type
  errors: FieldErrors
  placeHolder: string
  fieldName: string
  className?: string
  label: boolean
  required: boolean
  labelText?: string
}
import cn from 'classnames'
const formatPhoneNumber = (inputValue: string): string => {
  const inputDigits = inputValue.replace(/\D/g, '')
  const formattedParts = inputDigits.match(/(\d{0,3})(\d{0,3})(\d{0,4})/)

  if (!formattedParts) return ''

  const [, areaCode, firstPart, secondPart] = formattedParts
  return `${areaCode ? `(${areaCode}` : ''}${firstPart ? `) ${firstPart}` : ''}${
    secondPart ? `-${secondPart}` : ''
  }`
}

const Input_PhoneNumber = ({
  control,
  errors,
  placeHolder,
  label,
  required,
  labelText,
  fieldName,
  className = '',
}: PhoneInputProps) => (
  <span className={`${className}`}>
    {label ? <Label required={required} labelText={labelText} fieldName={fieldName} /> : ''}
    <Controller
      control={control}
      name={fieldName}
      render={({ field: { onChange, onBlur, value, ref } }) => (
        <input
          name={fieldName}
          className={cn(
            'border-2 border-blue bg-transparent rounded-xl w-full font-semibold py-4  px-8  md:text-lg text-wine cursor-text focus:ring-1 focus:border-blue-dark  focus:ring-blue-dark',
            {
              [' border-error focus:border-error focus:ring-error']: errors[fieldName],
            },
          )}
          type='tel'
          value={value ? formatPhoneNumber(value) : ''}
          aria-invalid={errors[fieldName] ? 'true' : 'false'}
          placeholder={placeHolder}
          onBlur={onBlur}
          id={fieldName}
          autoComplete='tel'
          onChange={(e) => onChange(formatPhoneNumber(e.target.value))}
          ref={ref}
        />
      )}
    />
  </span>
)
export default Input_PhoneNumber
