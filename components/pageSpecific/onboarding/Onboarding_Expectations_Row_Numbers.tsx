function Onboarding_ExpectationNumbers({ number }) {
  return (
    <div className='lg:w-2/5 hidden lg:flex flex-col justify-center '>
      <div
        id={'expectation-' + number}
        className='relative h-full w-full text-18xl font-black text-cream expectations-number-wrapper inset-x-1/4 '
      >
        <div className='text-blue absolute l-50 z-50 expect-numb opacity-80'>{number}</div>
      </div>
    </div>
  )
}

export default Onboarding_ExpectationNumbers
