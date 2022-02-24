import Image from 'next/image'
import clientList from '@data/work-client-list'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import Lead from '@typography/Lead'
import H2 from '@typography/H2'

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import GsapClients from "../../js/GSAPclients";

function Work_Clients() {
  // useEffect(() => {
  //   GsapClients();
  // }, [])

  const numRows = Math.floor(clientList.length / 2)

  clientList.forEach((element, index) => {})

  return (
    <PageSection>
      <InnerWrapper>
        <H2 color={'peach'}>Our lovely clients</H2>
        <Lead color='blue-dark'>
          Our story wouldn’t exist if it weren’t for all of the wonderful clients that have been on
          this journey with us. From initial discovery meetings to seeing the final product, we
          thrive in bringing a client’s vision to life. Check out some of our past and present
          clients below.
        </Lead>
      </InnerWrapper>
      <InnerWrapper>
        <div className='mt-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6'>
          {clientList.map((client, index) =>
            client.active ? (
              <div key={client.client} className=' col-span-1 '>
                <div className='relative w-full h-32'>
                  <p>
                    <Image
                      layout='fill'
                      objectFit='contain'
                      src={client.logo}
                      alt={client.client}
                      className='w-full'
                      quality={25}
                      blurDataURL='blur'
                    />
                  </p>
                </div>
              </div>
            ) : (
              ''
            ),
          )}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default Work_Clients

// <div className='px-12 mx-auto lg:px-24 py-4 lg:py-16 grid  grid-cols-6'>
//   <div className='col-span-2'></div>
//   <div className='col-span-4  flex justify-between'>
//     <div className=' w-auto wrapper-clients overflow-hidden'>
//       <div className='boxes ' id='boxCol'>
//         {clientList.map((client) => (
//           <div className='box absolute w-full ' key={client.client}>
//             <div className='client-box-Image h-full overflow-hidden '>
//               <Image
//                 width='100%'
//                 height='100%'
//                 src={client.logo}
//                 alt={client.client}
//                 className='object-contain object-center h-full mx-auto'
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className='scrim'> </div>
//     </div>
//   </div>
// </div>
