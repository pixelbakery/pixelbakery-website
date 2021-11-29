import type { NextPage } from 'next'

import React from 'react'
import Lander from '../../components/pg-careers/careers-lander'
import Breadwinners from '../../components/pg-careers/careers-breadwinner'
import OpenPositions from '../../components/pg-careers/careers-open-positions'
import Apprenticeships from '../../components/pg-careers/careers-apprenticeships'
import Casting from '../../components/pg-careers/careers-casting'
import Vendors from '../../components/pg-careers/careers-vendors'
import Benefits from '../../components/pg-careers/careers-benefits'
import Culture from '../../components/pg-careers/careers-culture'

let Careers: NextPage = () => {
  return (
    <main className='' id='careers-page'>
      <Lander />
      <Breadwinners />
      <OpenPositions />
      {/* <Apprenticeships />
      <Casting />
      <Vendors />
      <Benefits />
      <Culture /> */}
    </main>
  )
}

export default Careers
