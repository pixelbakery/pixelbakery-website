import Lead from '@typography/Lead'
import Onboarding_ExpectationNumbers from './Onboarding_Expectations_Row_Numbers'

function ExpectationsRow({ flip, number, header, bodyCopy }) {
  let order = 'order-first'
  let textDir = 'right'
  const TextClasses = 'w-full lg:w-3/5 flex flex-row  justify-center py-4 lg:py-16 text-lg self-'

  if (flip) {
    order = 'order-last'
    textDir = 'left'
  }
  let DirTextClasses = TextClasses + textDir + ' ' + order
  return (
    <div className='relative max-w-6xl mx-auto flex flex-wrap lg:py-8 lg:my-8 '>
      <Onboarding_ExpectationNumbers number={number} />
      <div className={DirTextClasses}>
        <div className='max-w-md flex flex-col justify-center px-8'>
          <Lead className={'mb-1 lg:mb-4 pb-0 mt-0'} color={'blue'}>
            {header}
          </Lead>
          <p className='leading-relaxed text-wine opacity-90'>{bodyCopy}</p>
        </div>
      </div>
    </div>
  )
}

export default ExpectationsRow
