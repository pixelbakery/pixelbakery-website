interface Props {
  number: number
}
function Onboarding_ExpectationNumbers({ number }: Props) {
  return (
    <div className='flex-col justify-center hidden lg:w-2/5 lg:flex '>
      <div
        id={'expectation-' + number}
        className='relative w-full h-full font-black text-18xl text-cream expectations-number-wrapper inset-x-1/4 '
      >
        <div className='absolute z-50 text-blue l-50 expect-numb opacity-80'>{number}</div>
      </div>
    </div>
  )
}

export default Onboarding_ExpectationNumbers
