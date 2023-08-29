import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Image from 'next/image'
import Shimmer from '@lib/Shimmer'
import cn from 'classnames'
import Link from 'next/link'
import { LinkedIn } from 'components/images/Icons_Social/Icons'
interface Props {
  children: any
  name: string
  title: string
  headshot: string
  image?: string
  imageAlt?: string
  client: string
  linkedIn?: string
}
function CaseStudies_Testimonial({
  children,
  name,
  title,
  headshot,
  image,
  imageAlt,
  client,
  linkedIn,
}: Props) {
  return (
    <PageSection color='pink-lighter' className=' border-t-32 border-t-pink' id={'testimonial'}>
      <InnerWrapper>
        <div className='grid grid-cols-5 gap-12'>
          <div
            className={cn(
              'col-span-5 ',
              {
                ['md:col-span-3 xl:col-span-3']: image,
              },
              { ['grid grid-cols-1 lg:grid-cols-2 gap-x-12']: !image },
            )}
          >
            <H2>Why Pixel Bakery?</H2>

            <div>
              {children}
              <div className='flex gap-x-4'>
                <div className='w-16'>
                  <div className='w-16 h-16 rounded-full overflow-hidden relative flex-grow'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${headshot}`}
                      alt={`${name} is the ${title} of Pixel Bakery's client, ${client}.`}
                      fill={true}
                      className='object-cover object-center w-full h-full'
                      placeholder={'blur'}
                      blurDataURL={`${Shimmer(16, 16)}`}
                    />
                  </div>
                </div>
                <div className='self-center'>
                  <div className='flex gap-x-4'>
                    <p className='font-bold text-md my-0 py-0'>{`${name}`} </p>
                    {linkedIn ? (
                      <Link
                        href={`${linkedIn}`}
                        className='self-center transform-gpu transition duration-700 ease-in-out hover:-translate-y-2 hover:animate-pulse text-md my-0 py-0'
                      >
                        <i className={' text-wine'} role='img'>
                          <LinkedIn />
                        </i>
                      </Link>
                    ) : (
                      ''
                    )}
                  </div>
                  <span className='block text-peach font-semibold text-md leading-none mt-1 py-0'>
                    {`${title}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {image ? (
            <div className='col-span-5 md:col-span-2 xl:col-span-2 order-first xl:order-last block md:block 2xl:block'>
              <div className='w-full aspect-h-1 aspect-w-1 overflow-hidden'>
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${image}`}
                  fill={true}
                  className='object-cover object-center w-full h-full'
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
