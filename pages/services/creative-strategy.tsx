import Services_Header from '@services/Services_Header'
// import Services_Subservices from '@services/Services_Subservices'
// import Services_Related from '@services/Services_Related'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'
import Store_Maintenance from '@store/Store_Maintenance'
import Lead from '@typography/Lead'

export default function Services() {
  return (
    <div>
      <Services_Header serviceName='Creative Strategy'>
        <Lead>
          We&apos;re more than just designers – we&apos;re thinkers, strategizers, and consultants.
        </Lead>
        <p>
          From the initial discovery meeting to the final deliverable, our leadership team at Pixel
          Bakery is all about strategizing the best way to deliver your message. Before any
          pre-production on a project begins, PB develops a communication strategy and creative
          brief based on a client&apos;s goals, pain points, and ideas.
        </p>
        <p>
          Between a client&apos;s invaluable knowledge of their brand and our dedication to
          providing a homogeneous brand experience from start to finish, PB knows that a unifying
          theme that ties a project together is the key to a successful campaign.
        </p>
      </Services_Header>
      {/* <Services_Subservices />
      <Services_Related /> */}
      <Services_AllServices />
      <Services_OurProcess />
      <Store_Maintenance />
    </div>
  )
}
