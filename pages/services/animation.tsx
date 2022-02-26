import Services_Header from '@services/Services_Header'
import Services_Subservices from '@services/Services_Subservices'
import Services_Related from '@services/Services_Related'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'
import Lead from '@typography/Lead'

export default function Services() {
  return (
    <div>
      <Services_Header serviceName='Animation'>
        <Lead className='text-peach font-extrabold text-lg my-3 leading-relaxed'>
          We specialize in 2D and 3D animation, motion graphics, stop motion, and 3D modeling
        </Lead>
        <p className='mt-6 leading-loose'>
          Every animation project is full-service and includes project management, creative
          concepting, sound design, storyboarding, and voiceover as needed. Whether you’re looking
          for a lower thirds animation template or a sizzle reel of your company’s coolest products,
          we’ve got you covered. Check out what else we have to offer below.
        </p>
      </Services_Header>
      <Services_Subservices />
      <Services_Related />
      <Services_AllServices />
      <Services_OurProcess />
    </div>
  )
}
