const Video = dynamic(() => import('@parts/Video'), { ssr: false, loading: () => <Loading /> })
import H1 from '@typography/H1'
import Pill from '@parts/Pill'
import dynamic from 'next/dynamic'
import Loading from '@utility/Loading'
import Link from 'next/link'

function CaseStudies_Header({ ...props }) {
  return (
    <section
      className='relative px-6 pt-40 pb-12 my-4 lg:pb-24 md:px-8 pt-lg:pt-48 bg-cream'
      id='topOfPage'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='mb-6'>
          <H1 color='blue-dark' className='mb-4 2xl:mb-4 '>
            <Link hrefLang={'en-US'} href={`${props.website}`}>
              <div className='pb-0 mb-0 text-2xl font-extrabold text-pink'>{props.client} </div>
            </Link>

            {props.projectName}
          </H1>
          <div className='mt-12'>
            <div className='flex flex-row flex-wrap max-w-3xl gap-3 justify-left'>
              {props.tags.map((tag: string, index: number) => {
                return (
                  <Pill
                    key={tag}
                    text={tag.toString()}
                    bgColor={'blue'}
                    textColor={'egg'}
                    size={'sm'}
                    className={`${index > 2 ? 'hidden md:inline' : ''}`}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mx-auto mt-20 2xl:px-24 max-w-8xl'>
        <div className='w-full aspect-w-16 aspect-h-9'>
          <Video url={`https://vimeo.com/${props.heroVideo}`} autoPlay={false} />
        </div>
      </div>
    </section>
  )
}
export default CaseStudies_Header
