import Button_Filled from '@parts/Button_Filled'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import H2AndLead from '@typography/H2AndLead'
import Lead from '@typography/Lead'
import Home_Portfolio_Card from './Home_Portfolio_Card'

function Home_Portfolio({ allCaseStudies }) {
  const activeCS = allCaseStudies.filter((cs) => cs.data.active)
  const featuredProj01 = activeCS[0]
  const featuredProj02 = activeCS[1]
  const featuredProj03 = activeCS[2]
  const featuredProj04 = activeCS[3]
  return (
    <PageSection id='home-portfolio' className='bg-white py-8 my-4 px-6'>
      <div className='max-w-md md:max-w-3xl lg:max-w-6xl 2xl:max-w-full 2xl:px-12 mx-auto'>
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
          <div className='w-full flex px-5 2xl:w-5/12 2xl:px-12 2xl:pr-0 justify-start mt-6  mb-0 '>
            <Home_Portfolio_Card
              bgPosition={'block-right'}
              bgColor={'bg-pink'}
              project={featuredProj01}
            />
          </div>
          <div className='w-full 2xl:w-5/12 flex justify-end my-24 2xl:mt-96'>
            <Home_Portfolio_Card
              bgPosition={'block-left'}
              bgColor={'bg-yellow'}
              project={featuredProj02}
            />
          </div>
          <div className='w-full flex justify-start mt-16 2xl:w-5/12  2xl:-mt-40'>
            <Home_Portfolio_Card
              bgPosition={'block-right-up'}
              bgColor={'bg-peach'}
              project={featuredProj03}
            />
          </div>{' '}
          <div className='w-full flex 2xl:w-5/12 justify-end mt-32 2xl:mt-60'>
            <Home_Portfolio_Card
              bgPosition={'block-left-2'}
              bgColor={'bg-blue'}
              project={featuredProj04}
            />
          </div>
        </div>
      </div>
      <div className=' px-4  mx-auto max-w-md justify-center mt-16 py-5'>
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
