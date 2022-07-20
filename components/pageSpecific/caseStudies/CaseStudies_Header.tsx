import Vimeo from '@u-wave/react-vimeo'
import H1 from '@typography/H1'
import Lead from '@typography/Lead'

function CaseStudies_Header({ ...props }) {
  return (
    <section
      className='pb-12 px-6 md:px-8 pt-40 pt-lg:pt-48 relative my-4  bg-white'
      id='topOfPage'
    >
      <div className='mx-auto max-w-6xl'>
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
      </div>
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
