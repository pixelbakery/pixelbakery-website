import Education_Header_Link from './Education_Header_Link'
import dynamic from 'next/dynamic'

const Lottie_Blue_Dark = dynamic(() => import('@pageHeaders/Lottie_Blue_Dark'), { ssr: true })

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
            Our success is a direct result of the people that we meet, whether that be our
            employees, our clients, or community members. As such, we believe in giving back to our
            community through education. We are proponents of breaking down any barriers (e.g.
            monetary costs) that prevent creativity and believe that everyone should have access to
            high-quality educational experiences and resources.
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
