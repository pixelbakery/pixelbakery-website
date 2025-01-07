import { type ReactNode } from 'react'
import { InnerWrapper, PageSection } from '@parts'
import { H2 } from '@typography'
import Image from 'next/image'
import { Shimmer } from '@lib'
import cn from 'classnames'
import Link from 'next/link'
import { Icon_LinkedIn } from '@SocialIcons'

interface Props {
  children: ReactNode
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
            <H2>
              Why Pixel
              <br /> Bakery?
            </H2>

            <div>
              {children}
              <div className='flex gap-x-4'>
                <div className='w-16'>
                  <div className='relative flex-grow w-16 h-16 overflow-hidden rounded-full'>
                    <Image
                      src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}${headshot}`}
                      alt={`${name} is the ${title} of Pixel Bakery's client, ${client}.`}
                      width={64}
                      height={64}
                      className='object-cover object-center w-full h-full'
                    />
                  </div>
                </div>
                <div className='self-center'>
                  <div className='flex gap-x-4'>
                    <p className='py-0 my-0 font-bold text-md'>{`${name}`} </p>
                    {linkedIn ? (
                      <Link
                        href={`${linkedIn}`}
                        className='self-center py-0 my-0 transition duration-700 ease-in-out transform-gpu hover:-translate-y-2 hover:animate-pulse text-md'
                      >
                        <i className={' text-wine'} role='img'>
                          <Icon_LinkedIn />
                        </i>
                      </Link>
                    ) : (
                      ''
                    )}
                  </div>
                  <span className='block py-0 mt-1 font-semibold leading-none text-peach text-md'>
                    {`${title}`}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {image ? (
            <div className='order-first block col-span-5 md:col-span-2 xl:col-span-2 xl:order-last md:block 2xl:block'>
              <div className='w-full overflow-hidden aspect-h-1 aspect-w-1'>
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
