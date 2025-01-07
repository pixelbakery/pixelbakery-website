import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

import { PageSection } from '@parts'
import { H1, Lead } from '@typography'

function Home_WhoTheHeck() {
  const IMAGE_PREFIX = process.env.NEXT_PUBLIC_IMG_PREFIX || ''

  return (
    <PageSection
      id='who-the-heck'
      className='relative md:max-h-screen bg-pink-lighter lander-responsive'
    >
      <div className={' w-full h-full top-0 md:bg-blue'}>
        <div className='sticky z-20 px-8 md:px-0'>
          <div className='relative z-20 mx-auto bg-pink-lighter md:inline-block md:py-4 md:pr-8 lg:pr-16 md:pl-16'>
            <H1 className='w-full pr-0 my-8 mr-0 2xl:text-8xl text-peach'>
              We Are <br /> Pixel Bakery
            </H1>
            <div className='my-8 text-4xl font-bold leading-none lowercase text-pink'>
              <Lead color='pink'>
                We&apos;re an award-winning multidisciplinary production studio that tells brand
                stories using motion design, animated explainers, and video production.
                <br />
                <br />
                <span className='text-blue'>We don't do catering.</span>
              </Lead>
            </div>
          </div>
        </div>
        <div className='absolute top-0 left-0 z-10 hidden w-full h-full md:block bg-cream'>
          <div className='relative w-full h-full'>
            <ReactPlayer
              url={`${IMAGE_PREFIX}/img/pixel_bakery_reel_bg_1.mp4`}
              width='100%'
              height='100%'
              playing={true}
              loop={true}
              muted={true}
              playsInline={true}
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
