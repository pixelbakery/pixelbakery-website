import InnerWrapper from '@parts/InnerWrapper'
import logoAnimationTiers from '@data/logoAnimation'
import LogoAnimation_Tiers_Card from '@logoAnimation/LogoAnimation_Tiers_Card'
import H2 from '@typography/H2'
import PageSection from '@parts/PageSection'

const LogoAnimation_Tiers = () => {
  const contentKeys = logoAnimationTiers
  const tierOne = contentKeys.tierOne,
    tierTwo = contentKeys.tierTwo,
    tierThree = contentKeys.tierThree,
    tierFour = contentKeys.tierFour

  return (
    <PageSection id={'logo-animation-tiers'}>
      <InnerWrapper className='mx-auto max-w-6xl'>
        <H2>Packages</H2>
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
          <LogoAnimation_Tiers_Card tier={tierOne} />
          <LogoAnimation_Tiers_Card tier={tierTwo} />
          <LogoAnimation_Tiers_Card tier={tierThree} />
          <LogoAnimation_Tiers_Card tier={tierFour} />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default LogoAnimation_Tiers
