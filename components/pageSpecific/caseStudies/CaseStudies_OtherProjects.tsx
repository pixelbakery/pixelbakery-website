import CaseStudies_OtherProjects_Card from '@caseStudies/CaseStudies_OtherProjects_Card'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import Button_Filled from '@parts/Button_Filled'

function CaseStudies_OtherProjects({ otherCaseStudies }) {
  return (
    <PageSection color='yellow'>
      <InnerWrapper>
        <H2 color='blue-dark'>More Projects</H2>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-3 lg:gap-8'>
          {otherCaseStudies.map((project, index) => {
            return <CaseStudies_OtherProjects_Card key={index} project={project} />
          })}
        </div>
        <div className='mt-14'>
          <Button_Filled
            text={`See 'Em All`}
            link={'/work#projects'}
            center={false}
            bgColor={'blue-dark'}
            textColor={'cream'}
            chevronDirection={'left'}
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_OtherProjects
