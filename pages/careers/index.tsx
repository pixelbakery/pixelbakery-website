import Careers_Breadwinners from '@careers/Careers_Breadwinners'
import Careers_OpenPositions from '@careers/Careers_OpenPositions'
import Careers_Apprenticeships from '@careers/Careers_Apprenticeships'
import Careers_Casting from '@careers/Careers_Casting'
import Careers_Vendors from '@careers/Careers_Vendors'
import Careers_Benefits from '@careers/Careers_Benefits'
import Careers_Culture from '@careers/Careers_Culture'
import PageHeader_VariableHeight from '@pageHeaders/PageHeader_VarH'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import Button_Filled from '@parts/Button_Filled'
import H2AndLead from '@typography/H2AndLead'
import Careers_JobShadow from '@careers/Careers_JobShadow'

const Careers = () => {
  return (
    <main id='careers-page'>
      <PageHeader_VariableHeight header='Future Bakers' subheader='Come rise with us' />

      <Careers_Breadwinners />
      <Careers_OpenPositions />
      <Careers_Apprenticeships />
      {/* <Careers_Casting /> */}
      {/* <Careers_Vendors /> */}
      <Careers_Benefits />
      <Careers_JobShadow />

      {/* <Careers_Culture /> */}
    </main>
  )
}

export default Careers
