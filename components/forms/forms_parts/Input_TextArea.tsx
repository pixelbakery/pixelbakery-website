import cn from 'classnames'
import Label from './Input_Label'
interface InputProps {
  register: any
  errors: any
  fieldName: string
  placeHolder?: string
  className?: string
  label: boolean
  labelText?: string
  required: boolean
  rows: number
}

const Input_TextArea = ({
  register,
  errors,
  fieldName,
  placeHolder,
  className,
  label,
  labelText,
  required,
  rows,
}: InputProps) => {
  return (
    <span className={cn(`${className}`)}>
      {/* {errors[fieldName] && errors[fieldName].message} */}
      {label ? <Label required={required} labelText={labelText} fieldName={fieldName} /> : ''}
      <textarea
        className={cn(
          'border-2 border-blue bg-transparent rounded-xl w-full font-semibold py-4  px-8  md:text-lg text-wine cursor-text focus:ring-1 focus:border-blue-dark  focus:ring-blue-dark',
          {
            [' border-error focus:border-error focus:ring-error']: errors[fieldName],
          },
        )}
        placeholder={placeHolder}
        rows={rows}
        name={fieldName}
        aria-invalid={errors[fieldName] ? 'true' : 'false'}
        id={fieldName}
        {...register(fieldName)}
      />
    </span>
  )
}
export default Input_TextArea
