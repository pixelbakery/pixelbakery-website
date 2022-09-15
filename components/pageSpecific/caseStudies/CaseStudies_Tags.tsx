import Pill from '@parts/Pill'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H3 from '@typography/H3'

interface tags {
  tags: any
}

function CaseStudies_Tags({ tags }: tags) {
  return (
    <PageSection color='blue-dark' className='lg:py-6' id={'tags'}>
      <InnerWrapper color='blue-dark' className=' my-4 py-12'>
        <div className='mx-auto md:max-w-6 flex flex-col justify-center'>
          <H3 className='text-center text-2xl text-pink mb-6 mx-auto'>here&apos;s what we did</H3>
          <div className='flex flex-row justify-center gap-3 flex-wrap max-w-3xl mx-auto'>
            {Object.values(tags).map(([index, tag]) => {
              return (
                <Pill key={index} text={tag} bgColor={'blue'} textColor={'blue-dark'} size={'md'} />
              )
            })}
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_Tags
