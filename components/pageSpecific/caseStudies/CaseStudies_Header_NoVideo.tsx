import H1 from '@typography/H1'
import Image from 'next/image'
import Pill from '@parts/Pill'

function CaseStudies_Header_Alt({ ...props }) {
  const tags = ['copywriting', 'email campaigns', 'motion design', 'other things', 'more things']
  return (
    <section
      className='pb-12 px-6 md:px-8 pt-40 pt-lg:pt-48 relative my-4 min-h-[75vh] max-h-screen bg-pink'
      id='topOfPage'
    >
      <div className='mx-auto max-w-6xl'>
        <div className='mb-6'>
          <div className='relative  h-16 w-16 self-center mb-2 overflow-hidden'>
            <Image
              fill={true}
              className='relative object-cover object-center w-full h-full'
              placeholder='blur'
              blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/clients/pixelbakery_client_SNACKLINS_color.svg`}
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/clients/pixelbakery_client_SNACKLINS_color.svg`}
              alt='Pixel Bakery Design Studio'
            />
          </div>

          <div className='font-extrabold text-cream text-2xl mb-0 pb-0'>
            SNACKLINS
            {/* {props.client} */}
          </div>
          <H1 color='blue-dark' className='mb-4 2xl:mb-4 '>
            {/* {props.projectName} */}
            Monthly Retainer
          </H1>
          <div className='mt-12'>
            <div className='flex flex-row justify-left gap-3 flex-wrap max-w-3xl'>
              {Object.values(tags).map((tag, index) => {
                return (
                  <Pill
                    key={index}
                    text={tag}
                    bgColor={'blue-dark'}
                    textColor={'cream'}
                    size={'sm'}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CaseStudies_Header_Alt
