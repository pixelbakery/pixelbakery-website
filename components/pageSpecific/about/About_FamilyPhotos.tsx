import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Loading from '@utility/Loading'
import Image from 'next/image'

function About_FamilyPhotos() {
  return (
    <PageSection className='sticky top-0 left-0' id='family-photos' color=''>
      <InnerWrapper className=' relative   -mb-64 lg:mb-0  pb-20'>
        <div className='columns-1 md:columns-2 gap-6 lg:gap-12'>
          <div className='col-span-1 lg:col-span-4 translate-y-16'>
            <div className=' relative w-full aspect-1'>
              {/* Circle photo */}
              <Image
                src='/img/family-photos/pixelbakery-familyphoto07.jpg'
                layout='fill'
                alt=''
                objectFit='contain'
                placeholder='blur'
                blurDataURL='/img/family-photos/pixelbakery-familyphoto07.jpg'
              />
              <Loading />
            </div>
          </div>
          <div className='col-span-1 lg:col-span-4 mt-12 translate-x-24 relative z-10 '>
            <div className=' w-full '>
              {/* Spinning video */}
              <video
                className=' object-cover hideControls bg-blue'
                muted
                autoPlay
                width='100%'
                height='100%'
                loop
                playsInline
                controls={false}
                poster='https://cdn.pixelbakery.com/img/family-photos/pixelbakery-yeehaw.jpg'
              >
                <source
                  src={`https://cdn.pixelbakery.com/img/family-photos/pixelbakery-yeehaw.webm`}
                  type='video/webm'
                />
                <source
                  src={`https://cdn.pixelbakery.com/img/family-photos/pixelbakery-yeehaw.mp4`}
                  type='video/mp4'
                />
              </video>
            </div>
            <Loading />
          </div>
          <div className='col-span-1 lg:col-span-4 -translate-y-20 relative z-20'>
            <div className='relative w-full aspect-w-4 aspect-h-3'>
              {/* Looking down */}
              <Image
                src='/img/family-photos/pixelbakery-familyphoto08.jpg'
                layout='fill'
                alt='Lizzie Moore, Jordan Lambrecht, Samee Callahan, and Mitchell Guynan'
                objectFit='contain'
                placeholder='blur'
                blurDataURL='/img/family-photos/pixelbakery-familyphoto08.jpg'
              />
            </div>
            <Loading />
          </div>
          <div className='relative -translate-y-48 lg:-translate-y-0 -translate-x-24 lg:translate-x-0 col-span-1 lg:col-span-4 z-0'>
            <div className=' w-full '>
              {/* Jordan Dancing */}
              <video
                className='relative object-cover hideControls bg-blue'
                muted
                autoPlay
                width='100%'
                height='100%'
                loop
                playsInline={true}
                controls={false}
                poster='https://cdn.pixelbakery.com/img/family-photos/pixel-bakery-jordan-dancing.jpg'
              >
                <source
                  src={`/img/family-photos/pixel-bakery-jordan-dancing.webm`}
                  type='video/webm'
                />
                <source
                  src={`/img/family-photos/pixel-bakery-jordan-dancing.mp4`}
                  type='video/mp4'
                />
              </video>
            </div>
          </div>
          <div className='col-span-1 lg:col-span-4 translate-x-8 relative z-40 -translate-y-64 lg:translate-y-0'>
            <div className='relative w-full aspect-w-4 aspect-h-3 '>
              {/* Crew photo */}
              <Image
                src='/img/family-photos/pixelbakery-familyphoto04.jpg'
                layout='fill'
                alt='The Pixel Bakery production team after shooting a pilot for a TV show'
                objectFit='cover'
              />
              <Loading />
            </div>
          </div>

          <div className='col-span-1 lg:col-span-4 -translate-y-64 lg:-translate-y-28  scale-110 lg:translate-x-10 relative z-40 lg:z-30'>
            <div className='relative w-full aspect-1'>
              {/* Wedding Photo */}
              <Image
                src='/img/family-photos/pixelbakery-familyphoto02.jpg'
                layout='fill'
                alt=''
                objectFit='cover'
              />
              <Loading />
            </div>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default About_FamilyPhotos
