import React from 'react'

import Work_Services from '../../components/Work/Work_Services'
import Work_Portfolio from '../../components/Work/Work_Portfolio'
import Work_Client from '../../components/Work/Work_Client'
import Work_Awards from '../../components/Work/Work_Awards'
import PageHeader_VariableHeight from '../../components/PageHeader_VariableHeight'

// import Test from '../../components/Work/Test'

// import Work_Portfolio from "../components/work-portfolio";
// import Work_Filter from "../components/work-portfolio-filter";
function Work() {
  return (
    <div>
      <PageHeader_VariableHeight header='What We Make' subheader='copy copy copy ' />

      <Work_Services />
      {/* <Test /> */}
      <Work_Portfolio />
      <Work_Client />
      <Work_Awards />
    </div>
  )
}
export default Work
