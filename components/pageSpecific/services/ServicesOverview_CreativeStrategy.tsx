import { PageSection_FullWidth, Button_Outlined } from '@parts'
import { H2 } from '@typography'
import dynamic from 'next/dynamic'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

function ServicesOverview_CreativeStrategy() {
  return (
    <PageSection_FullWidth id='creative-strategy'>
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 '>
        <div className='order-first h-full max-h-screen col-span-1 bg-blue'>
          <div className='relative w-full h-full'>
            <ReactPlayer
              muted={true}
              playsInline={true}
              autoPlay={true}
              loop={true}
              controls={false}
              width='100%'
              height='100%'
              className='bg-blue'
              url={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/services/PB_ServiceAniamtion_CreativeStrategy.mp4`}
              config={{
                file: {
                  attributes: {
                    autoPlay: true,
                    loop: true,
                    playsInline: true,
                    muted: true,
                    style: { width: '100%', height: '100%', objectFit: 'cover' },
                  },
                },
              }}
            />
          </div>
        </div>
        <div className='flex flex-col justify-center order-last col-span-1 px-12 py-12'>
          <H2 color='blue' className='mb-6 2xl:mb-10 '>
            Creative Concepting &amp; Strategy
          </H2>
          <p>
            We're more than just designers – we're thinkers, strategizers, and consultants. From the
            initial discovery meeting to the final deliverable, our leadership team at Pixel Bakery
            is all about strategizing the best way to deliver your message.
          </p>
          <Button_Outlined
            text={'Creative Strategy Services'}
            link={'/services/creative-strategy'}
            color={'blue'}
            chevronDirection='right'
          />
        </div>
      </div>
    </PageSection_FullWidth>
  )
}
export default ServicesOverview_CreativeStrategy
