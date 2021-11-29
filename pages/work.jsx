import React from 'react'
import Work_Clients from '../components/pg-work/work-clients'
import Work_Awards from '../components/pg-work/work-awards'
import Work_Services from '../components/pg-work/work-services'
import PageHeader from '../components/PageHeader'
import Work_Portfolio from '../components/pg-work/work-portfolio'

// import Work_Portfolio from "../components/work-portfolio";
// import Work_Filter from "../components/work-portfolio-filter";
export default function App() {
  return (
    <div>
      <PageHeader />

      <Work_Services />
      <Work_Clients />
      <Work_Awards />
    </div>
  )
}
