import PageSection from '@parts/PageSection'
import Lead from '@typography/Lead'
import ReactPlayer from 'react-player/lazy'
import { motion, useScroll, useTransform, MotionValue, Variants } from 'framer-motion'
import { useRef } from 'react'

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance])
}

function Home_WhoTheHeck() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, -50)
  return (
    <PageSection
      id='who-the-heck'
      className='relative md:max-h-screen bg-pink-lighter lander-responsive'
    >
      <div ref={ref} className={' w-full h-full top-0 md:bg-blue'}>
        <div className='sticky   z-20 px-8 md:px-0'>
          <motion.div
            style={{ y }}
            className='relative z-20 mx-auto bg-pink-lighter md:inline-block md:py-4  md:pr-8 lg:pr-16 md:pl-16'
          >
            <h2 className=' my-8 2xl:text-8xl text-peach'>who the heck</h2>
            <div className='text-4xl  text-pink my-8 leading-none lowercase font-bold'>
              <Lead color='pink'>
                We&apos;re an award-winning multidisciplinary production studio centered around
                animation, film, and design.
                <br />
                <br />
                <span className='text-blue'>We don't do catering.</span>
              </Lead>
            </div>
          </motion.div>
        </div>
        <div className='hidden md:block absolute w-full h-full z-10 bg-cream top-0 left-0'>
          <div className='relative w-full h-full'>
            <ReactPlayer
              url={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel_bakery_reel_bg.mp4`}
              width='100%'
              height='100%'
              playing={true}
              loop={true}
              muted={true}
              playsinline={true}
              style={{ position: 'absolute', top: 0, left: 0 }}
              config={{
                file: {
                  attributes: {
                    style: {
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    },
                  },
                },
              }}
              className={'absolute  top-0 left-0 h-full object-cover'}
            />
          </div>
        </div>
      </div>
    </PageSection>
  )
}
export default Home_WhoTheHeck
