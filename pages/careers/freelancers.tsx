import { Careers_Freelancer_Application_Form } from '@careers/index'
import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import { InnerWrapper, PageSection, Main } from '@parts/index'
import { H2, Lead } from '@typography/index'
import { NextSeo, BreadcrumbJsonLd } from 'next-seo'
const Page_Freelancers = () => {
  return (
    <Main>
      <PageHeader_VarH header='Freelancers' subheader='Join Our Professional Network' />
      <PageSection id={'freelancer-application'}>
        <InnerWrapper>
          <div className='flex flex-col justify-center'>
            <H2 noMargins={true} className='text-center mx-auto'>
              We're Always Looking For New Bakers
            </H2>
            <Lead className='text-center self-center' noMargins={true}>
              We're constantly on the lookout to expand our network of talented animators,
              videographers, and producers. <span className='font-bold'>Note:</span> We are not
              looking for voiceover artists at this time.
            </Lead>
            <p className='self-center text-center'>Okay, let’s get to know you a bit:</p>
          </div>

          <Careers_Freelancer_Application_Form />
        </InnerWrapper>
      </PageSection>
      <NextSeo
        title='Freelancers | Careers'
        description={`We're always on the lookout to expand our network of talented animators, videographers, and producers.`}
        canonical={`https://pixelbakery.com/careers/freelancers`}
        openGraph={{
          url: `https://pixelbakery.com/careers/freelancers`,
          title: 'Freelancers | Careers',
          description: `We're always on the lookout to expand our network of talented animators, videographers, and producers.`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-office.jpg`,
              width: 1080,
              height: 810,
              alt: 'Pixel Bakery Design Studio is an award-winning multidisciplinary production studio centered around motion graphics, animated explainer videos, video production, and product photography.',
            },
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixel-bakery-samee-dan-1200x900.png`,
              width: 1080,
              height: 810,
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
        }}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Careers',
            item: 'https://pixelbakery.com/careers',
          },
          {
            position: 2,
            name: `Freelancers | Careers`,
            item: `https://pixelbakery.com/careers/freelancers`,
          },
        ]}
      />
    </Main>
  )
}

export default Page_Freelancers
