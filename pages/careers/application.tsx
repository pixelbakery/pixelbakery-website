import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import InnerWrapper from '@parts/InnerWrapper'
import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import H2AndLead from '@typography/H2AndLead'
import Lead from '@typography/Lead'
import Careers_Application_Form from '@careers/Careers_Application_Form'

// get job posts for position titles
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { jobFilePaths, JOBS_PATH } from '@lib/mdxUtils'

function Careers_Application({ allJobs }) {
  console.log(allJobs)
  return (
    <Main>
      <PageHeader_VarH header='Application' subheader='get at it' />
      <PageSection>
        <InnerWrapper>
          <H2AndLead
            headerText={"we're always looking for new bakers"}
            leadText={'Come rise with us'}
          />
          <Lead>That was a pun. A large part of your job here will be writing puns.</Lead>
          <p>Okay, let’s get to know you a bit.</p>
        </InnerWrapper>
        <InnerWrapper>
          <Careers_Application_Form allJobs={allJobs} />
          <p className='mt-12 text-sm italic text-wine-300'>
            PS: Pixel Bakery Motion Studio is an equal opportunity employer. By submitting this
            application you agree to allow us to check references and verify former employment.
          </p>
        </InnerWrapper>
      </PageSection>
    </Main>
  )
}
export default Careers_Application
export function getStaticProps() {
  const allJobs = jobFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(JOBS_PATH, filePath))
      const { content, data } = matter(source)

      return {
        content,
        data,
        filePath,
      }
    })
    .sort((post1, post2) => (post1.data.date > post2.data.date ? -1 : 1))

  return { props: { allJobs } }
}
