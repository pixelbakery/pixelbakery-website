import { Controller, Control, FieldErrors } from 'react-hook-form'
import cn from 'classnames'
import Select from 'react-select'
import Label from './Input_Label'

// Better to define this separately, if possible.
type FormType = any // Replace `any` with your specific form type

interface MultiSelectInputs {
  control: Control<FormType>
  errors: FieldErrors
  fieldName: string
  className?: string
  label: boolean
  isRequired: boolean
  labelText?: string
  options: Array<{ value: string; label: string }>
}

const Input_MultiSelect: React.FC<MultiSelectInputs> = ({
  control,
  errors,
  fieldName,
  options,
  className = '',
  label,
  isRequired,
  labelText,
}: MultiSelectInputs) => (
  <span className={className}>
    {label && <Label isRequired={isRequired} labelText={labelText} fieldName={fieldName} />}
    <Controller
      control={control}
      name={fieldName}
      render={({ field: { onChange, onBlur, value } }) => (
        <Select
          options={options}
          className={cn({ error: errors[fieldName] })}
          aria-invalid={errors[fieldName] ? 'true' : 'false'}
          onChange={onChange}
          isMulti
          onBlur={onBlur}
          id={fieldName}
          classNamePrefix='skills'
          instanceId={fieldName}
          value={value}
        />
      )}
    />
  </span>
)

export default Input_MultiSelect
