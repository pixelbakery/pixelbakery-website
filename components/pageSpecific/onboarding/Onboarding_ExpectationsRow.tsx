import Onboarding_ExpectationNumbers from './Onboarding_ExpectationNumbers'

function ExpectationsRow({ flip, number, header, bodyCopy }) {
  let order = 'order-first'
  let textDir = 'right'
  const TextClasses = 'w-3/5 flex flex-row  justify-center py-16 text-lg self-'

  if (flip) {
    order = 'order-last'
    textDir = 'left'
  }
  let DirTextClasses = TextClasses + textDir + ' ' + order
  return (
    <div className='relative max-w-6xl mx-auto flex flex-wrap py-16 my-16 '>
      <Onboarding_ExpectationNumbers number={number} />
      <div className={DirTextClasses}>
        <div className='max-w-md flex flex-col justify-center px-8'>
          <p className='leading-relaxed text-wine opacity-90'>
            <strong className='text-blue'>{header}</strong>
            {bodyCopy}{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ExpectationsRow
