import classNames from 'classnames'

interface LabelProps {
  className?: string
  labelText?: string
  fieldName: string
  isRequired?: boolean
}

const Input_Label = ({ labelText, isRequired = false, fieldName, className }: LabelProps) => {
  const classList = classNames('text-lg text-wine mb-2 font-bold block pt-0 mt-0 pb-0', className, {
    'after:content-[_*] after:text-sm after:align-top after:inline after:text-peach': isRequired,
  })

  return (
    <label htmlFor={fieldName} className={classList} aria-required={isRequired}>
      {labelText}
    </label>
  )
}

export default Input_Label
