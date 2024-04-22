import cn from 'classnames'
import Label from './Input_Label'
import Input from './Input'

interface InputProps {
  register: any
  errors: any
  fieldName: string
  placeHolder?: string
  className?: string
  isLabelled?: boolean
  labelText?: string
  isRequired?: boolean
}

const Input_Email = ({
  register,
  errors,
  fieldName,
  placeHolder,
  className,
  isLabelled = false,
  labelText,
  isRequired = false,
}: InputProps) => {
  return (
    <div className={cn(className)}>
      {errors[fieldName] && <span className='error-message'>{errors[fieldName].message}</span>}
      {isLabelled && labelText && (
        <Label isRequired={isRequired} labelText={labelText} fieldName={fieldName} />
      )}
      <Input
        type='email'
        placeHolder={placeHolder}
        fieldName={fieldName}
        errors={errors}
        register={register}
      />
    </div>
  )
}

export default Input_Email
