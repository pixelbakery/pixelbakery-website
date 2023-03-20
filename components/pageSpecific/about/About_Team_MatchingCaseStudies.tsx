import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import { Fragment } from 'react'
import CaseStudies_OtherProjects_Card from '@caseStudies/CaseStudies_OtherProjects_Card'

const About_Team_MatchingCaseStudies = ({ matchingCaseStudies, name }) => {
  // eslint-disable-next-line no-unused-vars
  const [firstName, lastName] = name.split(' ')

  return (
    <>
      {matchingCaseStudies.length > 0 ? (
        <PageSection color='blue' id={'bio-postsByPerson'}>
          <InnerWrapper>
            <H2 color='blue-dark'>Credited Projects</H2>
            <p className='text-cream font-semibold'>
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
