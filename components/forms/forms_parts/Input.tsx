import cn from 'classnames'

interface InputProps {
  errors: any
  placeHolder?: string
  fieldName: string
  type: 'url' | 'text' | 'email' | 'phone'
  register: any
}
const Input = ({ errors, placeHolder, fieldName, type, register }: InputProps) => {
  return (
    <input
      className={cn(
        'border-2 border-blue bg-transparent rounded-xl w-full font-semibold py-4  px-8  md:text-lg text-wine cursor-text focus:ring-1 focus:border-blue-dark  focus:ring-blue-dark',
        {
          [' border-error focus:border-error focus:ring-error']: errors[fieldName],
        },
      )}
      type={type}
      placeholder={placeHolder}
      name={fieldName}
      aria-invalid={errors[fieldName] ? 'true' : 'false'}
      id={fieldName}
      {...register(fieldName)}
      autoComplete={type}
    />
  )
}

export default Input
