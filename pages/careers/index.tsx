import type { NextPage } from 'next'

import React from 'react'
import Careers_Lander from '../../components/Careers/Careers_Lander'
import Careers_Breadwinners from '../../components/Careers/Careers_Breadwinners'
import Careers_OpenPositions from '../../components/Careers/Careers_OpenPositions'
import Careers_Apprenticeships from '../../components/Careers/Careers_Apprenticeships'
import Careers_Casting from '../../components/Careers/Careers_Casting'
import Careers_Vendors from '../../components/Careers/Careers_Vendors'
import Careers_Benefits from '../../components/Careers/Careers_Benefits'
import Careers_Culture from '../../components/Careers/Careers_Culture'
import PageHeader_VariableHeight from '../../components/PageHeader_VariableHeight'

let Careers: NextPage = () => {
  return (
    <main id='careers-page'>
      <PageHeader_VariableHeight header='Future Bakers' subheader='Come rise with us' />

      <Careers_Breadwinners />
      <Careers_OpenPositions />
      <Careers_Apprenticeships />
      <Careers_Casting />
      <Careers_Vendors />
      <Careers_Benefits />
      <Careers_Culture />
    </main>
  )
}

export default Careers
