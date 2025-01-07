import logoAnimationTiers from '@data/logoAnimation'
import LogoAnimation_Tiers_Card from '@logoAnimation/LogoAnimation_Tiers_Card'
import { InnerWrapper, PageSection } from '@parts'
import { H2 } from '@typography'

const LogoAnimation_Tiers = () => {
  const contentKeys = logoAnimationTiers
  const tierOne = contentKeys.tierOne,
    tierTwo = contentKeys.tierTwo,
    tierThree = contentKeys.tierThree,
    tierFour = contentKeys.tierFour

  return (
    <PageSection id={'logo-animation-tiers'}>
      <InnerWrapper className='max-w-6xl mx-auto'>
        <H2>Packages</H2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4'>
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
