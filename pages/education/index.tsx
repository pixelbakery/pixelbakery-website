import React from 'react'

//sections
import Education_Header from '../../components/Education/Education_Header'
import Education_Recent from '../../components/Education/Education_Recent'
import Education_MadeToOrder from '../../components/Education/Education_MadeToOrder'
import Education_FromScratch from '../../components/Education/Education_FromScratch'
import Education_ProjectFiles from '../../components/Education/Education_ProjectFiles'
import Education_TutorialRequests from '../../components/Education/Education_TutorialRequests'

function EducationPage() {
  return (
    <main id='educationPagea'>
      <Education_Header />
      <Education_Recent />
      <Education_FromScratch />
      <Education_MadeToOrder />
      <Education_ProjectFiles />
      <Education_TutorialRequests />
    </main>
  )
}
export default EducationPage
