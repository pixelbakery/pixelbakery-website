import { getAllProjectFiles } from '@lib/api_projectFile'
import Education_Header from '@education/Education_Header'
import Store_Maintenance from '@store/Store_Maintenance'
import Education_MadeToOrder from '@education/Education_MadeToOrder'
import Education_FromScratch from '@education/Education_FromScratch'
import Education_ProjectFiles from '@education/Education_ProjectFiles'
import Education_TutorialRequests from '@education/Education_TutorialRequests'
import ProjectFile from 'types/projectFile'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
type Props = {
  allProjectFiles: ProjectFile[]
}
function EducationPage({ allProjectFiles }: Props) {
  return (
    <main className='max-w-screen overflow-x-hidden' id='educationPage'>
      <Education_Header />
      <PageSection>
        <InnerWrapper>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <H2>Why?</H2>
            <div className='max-w-xl'>
              <p>
                Our success is a direct result of the people that we meet, whether that be our
                employees, our clients, or community members. As such, we believe in giving back to
                our community through education. <br />
                <br />
                We are proponents of breaking down any barriers (e.g. monetary costs) that prevent
                creativity and believe that everyone should have access to high-quality educational
                experiences and resources.
              </p>
            </div>
          </div>
        </InnerWrapper>
      </PageSection>
      <Store_Maintenance />
      <Education_ProjectFiles projectFiles={allProjectFiles} />
      {/* <Education_Recent /> */}
      <Education_FromScratch />
      <Education_MadeToOrder />
      <Education_TutorialRequests />
    </main>
  )
}
export default EducationPage

export const getStaticProps = async () => {
  const allProjectFiles = getAllProjectFiles([
    'slug',
    'title',
    'active',
    'subtitle',
    'coverImage',
    'category',
  ])

  return {
    props: { allProjectFiles },
  }
}
