import { Lead } from '@typography'
import Onboarding_ExpectationNumbers from './Onboarding_Expectations_Row_Numbers'

interface ExpectationsRowProps {
  flip: boolean
  number: string | number
  header: string
  bodyCopy: string
}

function ExpectationsRow({ flip, number, header, bodyCopy }: ExpectationsRowProps) {
  let order = 'order-first'
  let textDir = 'right'
  const TextClasses = 'w-full lg:w-3/5 flex flex-row  justify-center py-4 lg:py-16 text-lg self-'

  if (flip) {
    order = 'order-last'
    textDir = 'left'
  }
  let DirTextClasses = TextClasses + textDir + ' ' + order
  return (
    <div className='relative flex flex-wrap max-w-6xl mx-auto lg:py-8 lg:my-8 '>
      <Onboarding_ExpectationNumbers number={number as number} />
      <div className={DirTextClasses}>
        <div className='flex flex-col justify-center max-w-md px-8'>
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
