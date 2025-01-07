import { InnerWrapper } from '@parts'
import { H2, Lead, H3 } from '@typography'

import Image from 'next/image'

const slides = [
  {
    header: 'the client',
    body: 'History says that’s how SNACKLINS vegan plant crisps were created. And soon after, they got their big break by making a deal with Mark Cuban on Shark Tank. Can’t resist the crisps.',
  },
  {
    header: 'How it Started',
    body: 'Pixel Bakery teamed up with SNACKLINS starting in June of 2020 for an ongoing content kit. This kit includes deliverables such as emails, organic social media posts, photoshoots, and TikToks.',
  },
  {
    header: `How it's Going`,
    body: `An ongoing retainer allows our team to continue building and growing on the brand as we go. We’ve been able to create a beautifully homogenous identity for the SNACKLINS brand.`,
  },
]

const CaseStudies_ProjectIntro_Alt = () => {
  return (
    <section className='relative z-10 flex py-0 my-5 lg:-my-5 lg:py-0 lg:overflow-visible'>
      <div className='w-full px-8 py-12 mx-auto  lg:w-3/4 lg:pl-12'>
        <InnerWrapper className='max-w-xl mx-auto md:max-w-3xl xl:max-w-6xl'>
          <div className='pr-12 mx-auto xl:pr-24'>
            <div className='relative flex flex-row h-full mb-6'>
              <div>
                <H2 className='max-w-2xl mb-10  md:max-w-2xl 2xl:max-w-4xl'>
                  what do you do after you build a brand?
                </H2>
                <Lead color='pink' className='max-w-2xl lg:mb-6'>
                  A muslim man obsessed with the idea of a meat-free pork rind and yuca, mushroom,
                  and onion walk into the back of a Washington, D.C. barbeque joint...
                </Lead>
              </div>
            </div>

            <div className=''>
              <div className='grid grid-cols-1 2xl:grid-cols-3 gap-x-24'>
                {slides.map((slide, index) => {
                  return (
                    <div key={index} className='col-span-1'>
                      <H3 color='blue-dark'>{slide.header}</H3>
                      <p>{slide.body}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </InnerWrapper>
      </div>

      <div className='absolute bottom-0 hidden object-bottom w-1/4 h-full origin-bottom scale-150 lg:block 2xl:w-1/5 right-10'>
        <Image
          src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Q3-Photos_Shot-06.png`}
          placeholder='blur'
          alt='Product Photography created for SNACKLINS'
          blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Q3-Photos_Shot-06.png`}
          fill={true}
          className={' object-bottom origin-bottom bottom-0 h-full object-contain'}
        />
      </div>

      {/* <div className='relative hidden h-full mx-auto lg:block lg:w-1/4'>
        <div className='absolute left-0 right-0 -mt-20 -mb-20 origin-bottom -bottom-5 -top-40 xl:top-0'>
          <div className='relative max-h-[125vh]  h-[130%] xl:h-[120%] bottom-0  -top-40 xl:-top-40 scale-[130%] 2xl:scale-100 overflow-hidden'>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Q3-Photos_Shot-06.png`}
              placeholder='blur'
              alt='Product Photography created for SNACKLINS'
              blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/case-studies/snacklins/SNACK_Q3-Photos_Shot-06.png`}
              fill={true}
              className={'relative origin-bottom bottom-0 h-full object-contain'}
            />
          </div>
        </div>
      </div> */}
    </section>
  )
}
export default CaseStudies_ProjectIntro_Alt
