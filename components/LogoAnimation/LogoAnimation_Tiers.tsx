import React from 'react'
import InnerWrapper from '../InnerWrapper'
import logoAnimationTiers from '../../data/logoAnimation'
import LogoAnimation_Tiers_Card from './LogoAnimation_Tiers_Card'
import H2 from '../H2'
function LogoAnimation_Tiers() {
  const contentKeys = logoAnimationTiers

  const tierOne = contentKeys.tierOne,
    tierTwo = contentKeys.tierTwo,
    tierThree = contentKeys.tierThree,
    tierFour = contentKeys.tierFour

  return (
    <section className='my-4 py-12'>
      <InnerWrapper classNames='mx-auto max-w-6xl'>
        <H2>Packages</H2>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4     '>
          <LogoAnimation_Tiers_Card tier={tierOne} />
          <LogoAnimation_Tiers_Card tier={tierTwo} />
          <LogoAnimation_Tiers_Card tier={tierThree} />
          <LogoAnimation_Tiers_Card tier={tierFour} />
        </div>
      </InnerWrapper>
    </section>
  )
}

export default LogoAnimation_Tiers
