import Education_Header_Link from './Education_Header_Link'
import dynamic from 'next/dynamic'

const Lottie_Blue_Dark = dynamic(() => import('@pageHeaders/Lottie_Blue_Dark'), { ssr: true })

// Local Variables

const primaryColor1 = 'blue'
const accentColor1 = 'blue-dark'
const subheaderColor1 = 'cream'

function Education_Header() {
  return (
    <section className='relative lander my-4 grid grid-cols-5 w-full'>
      <div className='bg-blue absolute lg:relative top-0 left-0 w-full h-full col-span-1 sm:col-span-2 z-0  '>
        <Lottie_Blue_Dark />
      </div>
      <div className='bg-white col-span-4 sm:col-span-3  pt-24 lg:pt-12  h-full w-full overflow-hidden flex flex-col justify-center  z-10'>
        <div className='max-w-xl mx-auto px-8  py-8'>
          <h1 className='text-5xl lg:text-7xl text-blue-dark leading-none mt-0 pt-0'>Education</h1>
          <div className='text-peach mb-8 lg:mb-16 mt-4  pb-0 font-medium lg:font-semibold 2xl:text-lg lg:text-xl lowercase leading-tight'>
            Proactively repurpose premier leadership via sticky architectures. Uniquely predominate
            distinctive convergence for stand-alone alignments.
          </div>
          <div>
            <Education_Header_Link
              header={'project files'}
              subheader={'open-source work we’ve made'}
              inpageLink={'#projectFiles'}
            />
            <Education_Header_Link
              header={'from  scratch'}
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
