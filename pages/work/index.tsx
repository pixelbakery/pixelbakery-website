import React from 'react'

import PageHeader from '../../components/PageHeader'
import Work_Services from '../../components/Work/Work_Services'
import Work_Portfolio from '../../components/Work/Work_Portfolio'
import Work_Client from '../../components/Work/Work_Client'
import Work_Awards from '../../components/Work/Work_Awards'

// import Work_Portfolio from "../components/work-portfolio";
// import Work_Filter from "../components/work-portfolio-filter";
function Work() {
  return (
    <div>
      <PageHeader />
      <Work_Services />
      <Work_Portfolio />
      <Work_Client />
      <Work_Awards />
    </div>
  )
}
export default Work
