import React from 'react'
import Services_Header from '../../components/Services/Services_Header'
import Services_Subservices from '../../components/Services/Services_Subservices'
import Services_Related from '../../components/Services/Services_Related'
import Services_AllServices from '../../components/Services/Services_AllServices'
import Services_OurProcess from '../../components/Services/Services_OurProcess'

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
