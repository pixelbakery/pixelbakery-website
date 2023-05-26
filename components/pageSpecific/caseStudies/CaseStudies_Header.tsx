const Video = dynamic(() => import('@parts/Video'), { ssr: false, loading: () => <Loading /> })
import H1 from '@typography/H1'
import Pill from '@parts/Pill'
// import Image from 'next/image'
import dynamic from 'next/dynamic'
import Loading from '@utility/Loading'
import Link from 'next/link'
// import Player from 'components/player/Player'
function CaseStudies_Header({ ...props }) {
  // const Logo = () => {
  //   if (props.logo === undefined) return
  //   else
  //     return (
  //       <div className='relative w-32 h-32'>
  //         <Link hrefLang={'en-US'} href={`${props.website}`}>
  //           <Image
  //             src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/clients/${props.logo}`}
  //             fill={true}
  //             className='object-cover object-center w-full h-full'
  //             alt={`logo for ${props.client}`}
  //           />
  //         </Link>
  //       </div>
  //     )
  // }
  return (
    <section
      className='pb-12 lg:pb-24  px-6 md:px-8 pt-40 pt-lg:pt-48 relative my-4  bg-cream'
      id='topOfPage'
    >
      <div className='mx-auto max-w-6xl'>
        <div className='mb-6'>
          {/* <Logo /> */}

          <H1 color='blue-dark' className='mb-4 2xl:mb-4 '>
            <Link hrefLang={'en-US'} href={`${props.website}`}>
              <div className='font-extrabold text-pink text-2xl mb-0 pb-0'>{props.client} </div>
            </Link>
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
      <div className='2xl:px-24 max-w-8xl mx-auto mt-20 w-full'>
        <div className='w-full aspect-w-16 aspect-h-9'>
          <Video
            url={`https://vimeo.com/${props.heroVideo}`}
            autoPlay={false}

            // poster={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${props.poster}.jpg`}
          />
        </div>
        {/* <Player
          url={props.heroVideo}
          light={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${props.poster}.jpg`}
        /> */}
      </div>
    </section>
  )
}
export default CaseStudies_Header
