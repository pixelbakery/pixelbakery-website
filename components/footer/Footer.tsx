import { NextPage } from 'next'

import {
  Footer_Sections_BottomRow,
  Footer_MobileNav,
  Footer_Objects_EmailUs,
  Footer_Objects_HappyCard,
  Footer_Objects_MoreStuff,
  Footer_Objects_PrimaryNavigation,
  Footer_Objects_ServicesNavigation,
  Footer_Objects_SocialLinks,
  Footer_Objects_StartAProject,
  Footer_Poptart,
} from '@footer'

export const Footer: NextPage = () => {
  return (
    <footer className='relative px-6 py-12 mb-4 bg-peach lg:px-12 xl:py-24' id='footer'>
      <div className='max-w-6xl mx-auto'>
        <div className='flex flex-col grid-cols-1 lg:grid lg:gap-8 lg:grid-cols-3 gap-y-3 lg:gap-y-12'>
          <Footer_Poptart />
          <Footer_MobileNav />
          <Footer_Objects_PrimaryNavigation />
          <Footer_Objects_HappyCard />
          <div className='flex flex-col col-span-1 justify-self-start'>
            <Footer_Objects_SocialLinks />
            <Footer_Objects_EmailUs />
            <Footer_Objects_StartAProject />
          </div>

          <div className='grid justify-end h-auto grid-cols-2 col-span-2 gap-8'>
            <Footer_Objects_ServicesNavigation />
            <Footer_Objects_MoreStuff />
          </div>
          <div className='col-span-3'>
            <Footer_Sections_BottomRow />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
