import Services_Related_Card from './Services_Related_Card'
import relatedProjects from '@data/services-animation-related'
import Button_Filled from '@parts/Button_Filled'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'

function shuffleArray(array) {
  let i = array.length - 1
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

function Services_Related() {
  const shuffledPosts = shuffleArray(relatedProjects)
  return (
    <PageSection className='my-4' id='services-animation-related'>
      <InnerWrapper className=''>
        <div className=''>
          <span className='text-peach text-2xl font-bold pb-0 mb-0'>Related Projects</span>
          <H2 color='blue'>Words are wind, so here&apos;s proof</H2>
        </div>
        <div className='pt-8 grid grid-cols-1 md:grid-cols-3 gap-4 '>
          {shuffledPosts.map((project) => (
            <Services_Related_Card project={project} key={project.name} />
          ))}
        </div>
        <div className=' py-8 mx-auto w-full'>
          <Button_Filled
            center={true}
            text="we've got more"
            link='/work'
            bgColor={'pink-light'}
            textColor={'peach'}
            chevronDirection='right'
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Services_Related
