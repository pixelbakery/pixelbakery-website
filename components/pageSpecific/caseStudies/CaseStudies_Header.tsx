import Vimeo from '@u-wave/react-vimeo'
import H1 from '@typography/H1'
import Lead from '@typography/Lead'
import Pill from '@parts/Pill'
import Image from 'next/image'

function CaseStudies_Header({ ...props }) {
  const Logo = () => {
    if (props.logo === undefined) return
    else
      return (
        <div className='relative w-32 h-32'>
          <a hrefLang={'en-US'} href={`${props.website}`}>
            <Image
              src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/clients/${props.logo}`}
              layout={'fill'}
              objectFit={'contain'}
            />
          </a>
        </div>
      )
  }
  return (
    <section
      className='pb-12 lg:pb-24  px-6 md:px-8 pt-40 pt-lg:pt-48 relative my-4  bg-cream'
      id='topOfPage'
    >
      <div className='mx-auto max-w-6xl'>
        <div className='mb-6'>
          {/* <Logo /> */}
          <a hrefLang={'en-US'} href={`${props.website}`}>
            <div className='font-extrabold text-pink text-2xl mb-0 pb-0'>{props.client}</div>
          </a>
          <H1 color='blue-dark' className='mb-4 2xl:mb-4 '>
            {/* {props.projectName} */}
            {props.projectName}
          </H1>
          <div className='mt-12'>
            <div className='flex flex-row justify-left gap-3 flex-wrap max-w-3xl'>
              {props.tags.map((tag) => {
                return (
                  <Pill
                    key={tag}
                    text={tag.toString()}
                    bgColor={'blue'}
                    textColor={'egg'}
                    size={'sm'}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div className='mx-auto max-w-6xl'>
        <div className='mb-6'>
          <div className='font-extrabold text-pink text-2xl mb-0 pb-0'>{props.client}</div>
          <H1 color='blue-dark' className='mb-4 2xl:mb-4 '>
            {props.projectName}
          </H1>
          <Lead
            color='wine'
            className='pb-6 text-wine text-xl max-w-sm font-semibold text-opacity-75'
          >
            {props.projectExcerpt}
          </Lead>
        </div>
      </div> */}
      <div className='2xl:px-24 max-w-8xl mx-auto mt-20 '>
        <Vimeo
          video={props.heroVideo}
          autoplay={false}
          showPortrait
          responsive={true}
          className={'relative'}
        />
      </div>
    </section>
  )
}
export default CaseStudies_Header
