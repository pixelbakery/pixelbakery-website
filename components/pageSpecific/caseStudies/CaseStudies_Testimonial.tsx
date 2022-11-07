import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Image from 'next/image'
import Shimmer from '@lib/Shimmer'

interface Props {
  children: any
  name: string
  title: string
  headshot: string
  image?: string
  imageAlt?: string
  client: string
}
function CaseStudies_Testimonial({
  children,
  name,
  title,
  headshot,
  image,
  imageAlt,
  client,
}: Props) {
  return (
    <PageSection color='pink-light' className=' border-t-32 border-t-pink' id={'testimonial'}>
      <InnerWrapper>
        <div className='grid grid-cols-5 gap-12'>
          <div className='col-span-5 md:col-span-3 xl:col-span-3'>
            <H2>Why Pixel Bakery?</H2>

            {children}
            <div className='flex gap-x-4'>
              <div className='w-16'>
                <div className='w-16 h-16 rounded-full overflow-hidden relative flex-grow'>
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${headshot}`}
                    alt={`${name} is the ${title} of Pixel Bakery's client, ${client}.`}
                    layout={'fill'}
                    objectFit={'cover'}
                    placeholder={'blur'}
                    blurDataURL={`${Shimmer(16, 16)}`}
                    className={''}
                  />
                </div>
              </div>
              <div className='self-center'>
                <p className='font-bold text-md my-0 py-0'>{`${name}`}</p>
                <span className='block text-peach font-semibold text-md leading-none mt-1 py-0'>
                  {`${title}`}
                </span>
              </div>
            </div>
          </div>
          {image ? (
            <div className='col-span-5 md:col-span-2 xl:col-span-2 order-first xl:order-last block md:block 2xl:block'>
              <div className='w-full aspect-h-1 aspect-w-1'>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${image}`}
                  layout='fill'
                  objectFit='cover'
                  placeholder='blur'
                  blurDataURL={`${Shimmer(600, 600)}`}
                  alt={`${imageAlt}`}
                />
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_Testimonial
