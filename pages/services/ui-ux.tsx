import Services_Header from '@services/Services_Header'
import Services_Subservices from '@services/Services_Subservices'
import Services_Related from '@services/Services_Related'
import Services_AllServices from '@services/Services_AllServices'
import Services_OurProcess from '@services/Services_OurProcess'

export default function Services() {
  return (
    <div>
      <Services_Header serviceName='UI / UX Design'>
        <p className='text-peach font-extrabold text-lg my-3 leading-relaxed'>
          Proactively repurpose premier leadership via sticky architectures. Uniquely predominate
          distinctive convergence for stand-alone alignments.{' '}
        </p>
        <p className='mt-6 leading-loose'>
          Phosfluorescently restore enabled models before premium solutions. Monotonectally initiate
          cross-platform strategic theme areas vis-a-vis out-of-the-box testing procedures.
          Compellingly deploy high-payoff catalysts for change via empowered solutions. Proactively
          empower.
        </p>
      </Services_Header>
      <Services_Subservices />
      <Services_Related />
      <Services_AllServices />
      <Services_OurProcess />
    </div>
  )
}
