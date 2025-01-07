import { InnerWrapper, PageSection } from '@parts'
import { H2, Lead } from '@typography'
import { Fragment } from 'react'
import { CaseStudies_OtherProjects_Card } from '@caseStudies'
import { CaseStudy } from '@/types/caseStudies'

interface AboutTeamMatchingCaseStudiesProps {
  matchingCaseStudies: CaseStudy[]
  name: string
}

const About_Team_MatchingCaseStudies = ({
  matchingCaseStudies,
  name,
}: AboutTeamMatchingCaseStudiesProps) => {
  const [firstName] = name?.split(' ') || ['Team Member']

  // Check for valid project data
  const hasValidProject = (cs: CaseStudy) => {
    const isValid = cs.filePath && cs.data.title
    return isValid
  }

  const validCaseStudies = matchingCaseStudies.filter(hasValidProject)

  // Do not render if no valid case studies are found
  if (validCaseStudies.length === 0) return null

  // Render case study card
  const renderCaseStudyCard = (cs: CaseStudy, index: number) => (
    <div className='p-2 md:p-4 pb-6 bg-egg rounded-lg' key={index}>
      <CaseStudies_OtherProjects_Card project={{ filePath: cs.filePath, data: cs.data }} />
    </div>
  )

  return (
    <PageSection color='blue-dark' id={'bio-postsByPerson'}>
      <InnerWrapper>
        <H2 color='blue'>{`${firstName}`}'s Credited Projects</H2>
        <Lead className='font-semibold' color='cream'>
          Check out some of the awesome projects {`${firstName}`} has worked on.
        </Lead>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6 xl:gap-x-6'>
          {validCaseStudies.map(renderCaseStudyCard)}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default About_Team_MatchingCaseStudies