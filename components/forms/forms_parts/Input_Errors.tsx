import cn from 'classnames'

const Form_Part_Errors = ({ errors, className }: Errors) => {
  return (
    <div className={cn(' text-peach', className)}>
      {errors ? (
        <ul>
          {Object.entries(errors).map(([type, message]) => {
            return (
              <li className='text-error font-medium text-lg italic' key={type}>
                🚨 {Object.values(message)[0].toString()}
              </li>
            )
          })}
        </ul>
      ) : (
        'no errors'
      )}
    </div>
  )
}
export default Form_Part_Errors
