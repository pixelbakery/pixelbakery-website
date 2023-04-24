import Education_Header_Link from './Education_Header_Link'
import dynamic from 'next/dynamic'
import Lead from '@typography/Lead'
import H1 from '@typography/H1'
import Patterns_Blue_Dark from '@data/lottie_patterns/Patterns_Blue_Dark.json' assert { type: 'json' }

const LottiePatternPlayer = dynamic(() => import('@parts/LottiePatternPlayer'), {
  ssr: false,
})

function Education_Header() {
  return (
    <section className='relative lander my-4 grid grid-cols-5 w-full'>
      <div className='bg-blue absolute lg:relative top-0 left-0 w-full h-full col-span-1 sm:col-span-2 z-0  '>
        <LottiePatternPlayer animationData={Patterns_Blue_Dark} width={100} height={100} />
      </div>
      <div className='bg-white col-span-4 sm:col-span-3  pt-24 lg:pt-12  h-full w-full overflow-hidden flex flex-col justify-center  z-10'>
        <div className='max-w-xl mx-auto px-8  py-8'>
          <H1 className='text-5xl lg:text-7xl text-blue-dark leading-none mt-0 pt-0'>Education</H1>
          <Lead color='peach'>Education should be accessable, free, and open-source.</Lead>

          <div>
            <Education_Header_Link
              header={'project files'}
              subheader={'open-source work we’ve made'}
              inpageLink={'#projectFiles'}
            />
            <Education_Header_Link
              header={'from scratch'}
              subheader={'complete a to z tutorials'}
              inpageLink={'#fromScratch'}
            />
            <Education_Header_Link
              header={'made to order'}
              subheader={'one-off tutorials on specific somethings'}
              inpageLink={'#madeToOrder'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education_Header
