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
}
import Input from './Input'
const Input_Text = ({
  register,
  errors,
  fieldName,
  placeHolder,
  className,
  label,
  labelText,
  required,
}: InputProps) => {
  return (
    <span className={cn(`${className}`)}>
      {/* {errors[fieldName] && errors[fieldName].message} */}
      {label ? <Label required={required} labelText={labelText} fieldName={fieldName} /> : ''}
      <Input
        type='text'
        placeHolder={placeHolder}
        fieldName={fieldName}
        errors={errors}
        register={register}
      />
    </span>
  )
}
export default Input_Text
