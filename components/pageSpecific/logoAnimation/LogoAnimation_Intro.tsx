import dynamic from 'next/dynamic'

import { InnerWrapper, PageSection, Video } from '@parts'
import { H2 } from '@typography'

const LogoAnimation_Descriptions = () => {
  return (
    <PageSection className='px-12 py-12 my-4 bg-white' id='descriptions'>
      <InnerWrapper>
        <H2 className='pb-6'>Logo Animation Packages</H2>
        <p className='max-w-lg pb-12 text-lg font-medium text-opacity-75 text-wine'>
          Introducing The PB Motion Mixer. An affordable way to get your brand moving. We&apos;ll
          take that beautifully vectorized logo you already have, and make it move in a way that
          shouts your brand&apos;s persona.
        </p>
        <div className='mt-12'>
          <Video url={'https://vimeo.com/376917772'} autoPlay={false} />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default LogoAnimation_Descriptions
