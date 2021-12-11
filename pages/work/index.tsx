import React from 'react'

import PageHeader from '../../components/PageHeader'
import Services from '../../components/pg-work/work-services'
import Portfolio from '../../components/pg-work/work-portfolio'
import Clients from '../../components/pg-work/work-clients'
import Awards from '../../components/pg-work/work-awards'

// import Work_Portfolio from "../components/work-portfolio";
// import Work_Filter from "../components/work-portfolio-filter";
export default function App() {
  return (
    <div>
      <PageHeader />

      <Services />
      <Portfolio />
      <Clients />
      <Awards />
    </div>
  )
}
