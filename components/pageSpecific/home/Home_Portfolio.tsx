import { Button_Filled, InnerWrapper, PageSection } from '@parts'
import { H2AndLead } from '@typography'
import Home_Portfolio_Card from './Home_Portfolio_Card'
import type { CaseStudy } from '@/types/caseStudies'

interface FeaturedProjects {
  allCaseStudies: CaseStudy[]
  bgPosition?: string
  bgColor?: string
}

function Home_Portfolio({ allCaseStudies = [] }: FeaturedProjects) {
  const activeCS = allCaseStudies.filter((cs) => cs.data.active)
  if (activeCS.length === 0) {
    return <div>No data available</div>
  }

  const [featuredProj01, featuredProj02, featuredProj03, featuredProj04] = activeCS
  return (
    <PageSection id='home-portfolio' className='px-6 py-8 my-4 bg-white'>
      <div className='max-w-md mx-auto md:max-w-3xl lg:max-w-6xl 2xl:max-w-full 2xl:px-12'>
        <InnerWrapper className='mt-12'>
          <div className='lg:flex lg:justify-center'>
            <H2AndLead
              headerColor='blue-dark'
              leadColor='wine'
              headerText='Our Best Hits'
              leadText={
                "Here's a sample platter of some of our most recent projects, spanning from explainer videos to commercial video production."
              }
              className='mb-16 lg:text-center'
            />
          </div>
        </InnerWrapper>
        <div className='flex flex-wrap justify-between '>
          {featuredProj01 && (
            <div className='flex justify-start w-full px-5 mt-6 mb-0 2xl:w-5/12 2xl:px-12 2xl:pr-0 '>
              <Home_Portfolio_Card
                bgPosition={'block-right'}
                bgColor={'bg-pink'}
                project={featuredProj01}
              />
            </div>
          )}
          {featuredProj02 && (
            <div className='flex justify-end w-full my-24 2xl:w-5/12 2xl:mt-96'>
              <Home_Portfolio_Card
                bgPosition={'block-left'}
                bgColor={'bg-yellow'}
                project={featuredProj02}
              />
            </div>
          )}
          {featuredProj03 && (
            <div className='flex justify-start w-full mt-16 2xl:w-5/12 2xl:-mt-40'>
              <Home_Portfolio_Card
                bgPosition={'block-right-up'}
                bgColor={'bg-peach'}
                project={featuredProj03}
              />
            </div>
          )}
          {featuredProj04 && (
            <div className='flex justify-end w-full mt-32 2xl:w-5/12 2xl:mt-60'>
              <Home_Portfolio_Card
                bgPosition={'block-left-2'}
                bgColor={'bg-blue'}
                project={featuredProj04}
              />
            </div>
          )}
        </div>
      </div>
      <div className='justify-center max-w-md px-4 py-5 mx-auto mt-16'>
        <Button_Filled
          text="that's just a taste"
          link='/work'
          textColor='cream'
          bgColor='peach'
          center={true}
          chevronDirection='right'
        />
      </div>
    </PageSection>
  )
}

export default Home_Portfolio
