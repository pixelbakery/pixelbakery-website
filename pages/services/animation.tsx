import Services_Header from '@services/Services_Header'
import Services_Subservices from '@services/Services_Subservices'
import Services_Related from '@services/Services_Related'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'

export default function Services() {
  return (
    <div>
      <Services_Header />
      <Services_Subservices />
      <Services_Related />
      <Services_AllServices />
      <Services_OurProcess />
    </div>
  )
}
