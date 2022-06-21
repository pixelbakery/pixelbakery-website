import dynamic from 'next/dynamic'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'))
import LogoAnimation_Intro from '@logoAnimation/LogoAnimation_Intro'
import LogoAnimation_Descriptions from '@logoAnimation/LogoAnimation_Descriptions'
import LogoAnimation_PastClients from '@logoAnimation/LogoAnimation_PastClients'
import Vimeo from '@u-wave/react-vimeo'
import LogoAnimation_Tiers from '@logoAnimation/LogoAnimation_Tiers'
import LogoAnimation_GetStarted from '@logoAnimation/LogoAnimation_GetStarted'
import Main from '@parts/Main'
import { NextSeo } from 'next-seo'
function LogoAnimation() {
  return (
    <Main>
      <NextSeo
        title='Logo Animation | Services'
        description={`bring your logo to life with an eye-catching and memorable animation`}
        openGraph={{
          url: `https://pixelbakery.com/logo-animation`,
          images: [
            {
              url: 'https://pixelbakery.com/img/pixelbakery-thumbnail.jpg',
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://pixelbakery.com/img/pixel-bakery-office.jpeg',
              width: 1080,
              height: 810,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://pixelbakery.com/img/pixel-bakery-samee-dan-1200x900.png',
              width: 1080,
              height: 810,
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
          title: 'Logo Animation | Services',
          description: `bring your logo to life with an eye-catching and memorable animation`,
        }}
      />
      <PageHeader_VarH
        header={'Motion Mixer'}
        subheader={'Bring your logo to life with an eye-catching and memorable animation'}
      />
      <LogoAnimation_Intro />

      <section className='lg:hidden bg-white my-4'>
        <div className=''>
          <Vimeo video={'376917772'} autoplay={false} showPortrait responsive={true} />
        </div>
      </section>

      <LogoAnimation_Tiers />
      <LogoAnimation_GetStarted />
      <LogoAnimation_Descriptions />
      <LogoAnimation_PastClients />
    </Main>
  )
}
export default LogoAnimation
