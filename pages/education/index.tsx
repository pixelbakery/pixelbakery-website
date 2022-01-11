import React from 'react'
import { getAllProjectFiles } from '../../lib/api_projectFile'
import Education_Header from '../../components/Education/Education_Header'
// import Education_Recent from '../../components/Education/Education_Recent'
import Education_MadeToOrder from '../../components/Education/Education_MadeToOrder'
import Education_FromScratch from '../../components/Education/Education_FromScratch'
import Education_ProjectFiles from '../../components/Education/Education_ProjectFiles'
import Education_TutorialRequests from '../../components/Education/Education_TutorialRequests'
import ProjectFile from '../../types/projectFile'

type Props = {
  allProjectFiles: ProjectFile[]
}
function EducationPage({ allProjectFiles }: Props) {
  return (
    <main className='max-w-screen overflow-x-hidden' id='educationPage'>
      <Education_Header />
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
