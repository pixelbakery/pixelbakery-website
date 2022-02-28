import Services_Header from '@services/Services_Header'
import Services_Subservices from '@services/Services_Subservices'
import Services_Related from '@services/Services_Related'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'
import Lead from '@typography/Lead'
import Store_Maintenance from '@store/Store_Maintenance'

export default function Services() {
  return (
    <div>
      <Services_Header serviceName='Web Hosting'>
        <Lead>Coming Soon 😉 </Lead>
      </Services_Header>
      <Services_AllServices />
      <Store_Maintenance />
    </div>
  )
}
