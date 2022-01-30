import Work_Services_Card from '../work/Work_Services_Card'
import services from '@data/services'
// import gsap from 'gsap'
// import { PbIconMixerAbs } from "../icons/abs/index";

function Home_Services() {
  // useEffect(() => {
  //   const mixerTL = gsap.timeline({
  //     defaults: {
  //       y: -30,
  //       rotation: gsap.utils.random(0, -15),
  //       stagger: 0.1,
  //       ease: 'sine.inOut',
  //     },
  //     repeat: -1,
  //     yoyo: true,
  //   })

  //   mixerTL.to('#home-mixer', {
  //     y: 30,
  //     rotation: gsap.utils.random(-1, 15),
  //     duration: 4,
  //   })
  // }, [])
  return (
    <section className='my-4 px-6 py-8 lg:py-16 bg-blue overflow-hidden' id='home-services'>
      <div className='max-w-md  md:max-w-2xl xl:max-w-6xl mx-auto z-10'>
        <div className=' w-full flex flex-col '>
          <div className=' mb-16'>
            <h2 className='text-blue-dark font-bold max-w-md 2xl:text-8xl 2xl:max-w-4xl leading-none'>
              And we&apos;re great at what we do.{' '}
            </h2>
            <p className='text-2xl font-medium text-cream'>
              We are builders. This is our craft.
              <br /> Our hobbies are our profession.
            </p>
          </div>
          <div className='mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-x-4 lg:grid-cols-3 justify-items-stretch -mt-2 mb-16'>
            {services.map((service) => (
              <Work_Services_Card
                service={service.service}
                url={service.url}
                key={service.service}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='absolute w-full max-w-md z-0 top-14 right-10' id='home-mixer'>
        {/* <PbIconMixerAbs /> */}
      </div>
    </section>
  )
}

export default Home_Services
