import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import { Lottie_Marq_MarchingSoldiers, Lottie_Marq_FloatingUnicorn } from '@lib/lottie_helpers'
import H2 from '@typography/H2'
import Button_Filled from '@parts/Button_Filled'

function marq_lottie() {
  return (
    <>
      <PageHeader_VarH />
      <InnerWrapper id='' color=''>
        <PageSection>
          <div className=' h-full max-h-screen'>
            <H2>Marching Soldiers</H2>
            <p>The background colors are added for effect and not in the lottie files. </p>
            <p>
              Documentation for Lottie:{' '}
              <a href='https://airbnb.design/lottie/' rel='noreferer' target={'blank'}>
                https://airbnb.io/lottie
              </a>
            </p>
            <p>
              For implementation on our site (built using reactJS), PB uses a package called{' '}
              <a
                href='https://github.com/Gamote/lottie-react'
                target={'_blank'}
                rel='noopener noreferer'
              >
                lottie-react
              </a>
              . Our source code for this site is available on{' '}
              <a
                href='https://github.com/pixelbakery/pixelbakery-website'
                target={'_blank'}
                rel='noopener noreferer'
              >
                Github
              </a>
              .
            </p>
            <div className='bg-[#F15454]'>
              {' '}
              <Lottie_Marq_MarchingSoldiers />
            </div>
            <Button_Filled
              chevronDirection='download'
              text={'download'}
              link={'/downloads/lottie/Marq_Lottie_MarchingSoldiers.json'}
              center={false}
              bgColor={'peach'}
              textColor={'cream'}
            />
          </div>
        </PageSection>
        <PageSection>
          <div className='gap-x-24 w-full grid grid-cols-1 xl:grid-cols-2 h-full max-h-screen'>
            <div className='bg-[#412762]'>
              <Lottie_Marq_FloatingUnicorn />
            </div>
            <div className=''>
              <H2>Floating Unicorn</H2>
              <Button_Filled
                chevronDirection='download'
                text={'download'}
                link={'/downloads/lottie/Marq_Lottie_FloatingUnicorn.json'}
                center={false}
                bgColor={'peach'}
                textColor={'cream'}
              />
            </div>
          </div>
        </PageSection>
      </InnerWrapper>
    </>
  )
}

export default marq_lottie
