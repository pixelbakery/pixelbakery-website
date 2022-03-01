import Servicess_Subservicess_Box from './Servicess_Subservices_Box'
import subservice from '@data/services-animation'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import Lead from '@typography/Lead'

function Services_Subservices() {
  return (
    <section>
      <div className='grid grid-cols-5 mx-12'>
        <div className=' col-span-5 lg:col-span-3 w-full md:h-screen  lg:sticky top-0 lg:overflow-auto'>
          <div className='flex flex-col h-full justify-center lg:max-w-md mx-auto '>
            <H2 color='wine'>there’s plenty of ways to butter your bread</H2>
            <Lead color='blue'>and we’ve pretty much mastered all of them.</Lead>
          </div>
        </div>
        <div className=' col-span-5 lg:col-span-2 w-full   mx-auto'>
          <div>
            {subservice.map((subservice) => (
              <Servicess_Subservicess_Box subservice={subservice} key={subservice.service} />
            ))}
          </div>
        </div>
      </div>
    </section>
    // <section
    //   className=' py-16 grid grid-cols-2 w-full bg-white'
    //   id='services-animation-subservices overflow-hidden sticky'
    // >
    //   <div className='w-full h-screen flex flex-col justify-center max-w-md mx-auto sticky top-0 overflow-auto'>
    //     <div className=''>
    //       <h2 className='text-wine'>there’s plenty of ways to butter your bread</h2>
    //       <p className='text-blue text-xl font-extrabold '>
    //         and we’ve pretty much mastered all of them.
    //       </p>
    //     </div>
    //   </div>
    //   <div className='w-full h-full max-w-lg mx-auto'>
    //     <div>
    //       {subservice.map((subservice) => (
    //         <Servicess_Subservicess_Box subservice={subservice} key={subservice.service} />
    //       ))}
    //     </div>
    //   </div>
    // </section>
  )
}
export default Services_Subservices
