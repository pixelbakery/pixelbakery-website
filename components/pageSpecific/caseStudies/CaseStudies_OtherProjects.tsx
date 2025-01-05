import { CaseStudies_OtherProjects_Card } from '@caseStudies'
import { InnerWrapper, PageSection } from '@parts'
import H2 from '@typography/H2'
import Button_Filled from '@parts/Button_Filled'
import { Key } from 'react'

interface CaseStudiesOtherProjectsProps {
  otherCaseStudies: Array<{
    id: Key
    title: string
    description: string
  }>
}

function CaseStudies_OtherProjects({ otherCaseStudies }: CaseStudiesOtherProjectsProps) {
  return (
    <PageSection color='cream' id={'other-projects'}>
      <InnerWrapper>
        <H2 color='blue-dark'>More Projects</H2>
        <div className='grid grid-cols-1 gap-6 lg:grid-cols-3 md:gap-3 lg:gap-8'>
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
            plausibleEventName='ButtonClick'
            plausibleEventProps={{
              label: 'See All Projects',
            }}
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default CaseStudies_OtherProjects
