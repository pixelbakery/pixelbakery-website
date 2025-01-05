import { InnerWrapper, PageSection } from '@parts'
import H2 from '@typography/H2'
import { Fragment } from 'react'
import { CaseStudies_OtherProjects_Card } from '@caseStudies'

interface CaseStudy {
  title: string
  description?: string
  thumbnailUrl?: string
  link?: string
  [key: string]: any
}

interface AboutTeamMatchingCaseStudiesProps {
  matchingCaseStudies: CaseStudy[]
  name: string
}
const About_Team_MatchingCaseStudies = ({
  matchingCaseStudies,
  name,
}: AboutTeamMatchingCaseStudiesProps) => {
  // eslint-disable-next-line no-unused-vars
  const [firstName, lastName] = name.split(' ')

  return (
    <>
      {matchingCaseStudies.length > 0 ? (
        <PageSection color='blue' id={'bio-postsByPerson'}>
          <InnerWrapper>
            <H2 color='blue-dark'>{`${firstName}`}'s Credited Projects</H2>
            <p className='font-semibold text-cream'>
              Check out some of the awesome projects {`${firstName}`} has worked on.
            </p>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6'>
              {matchingCaseStudies.map((cs, index) => {
                return (
                  <Fragment key={index}>
                    <CaseStudies_OtherProjects_Card project={cs} />
                  </Fragment>
                )
              })}
            </div>
          </InnerWrapper>
        </PageSection>
      ) : (
        ''
      )}
    </>
  )
}
export default About_Team_MatchingCaseStudies
