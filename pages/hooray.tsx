import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import H1 from '@typography/H1'
import Hooray_ContactForm from 'components/pageSpecific/hooray/Hooray_ContactForm'
import { NextSeo } from 'next-seo'

function surprise() {
  return (
    <>
      <NextSeo
        title='Hooray, A Surprise! | Pixel Bakery'
        noindex={true}
        nofollow={true}
        description={` It's hard to practice vulnerability– especially on the internet. Normalizing
            vulnerability is how we move to a more inclusive and accepting society, so thank you for
            being a part of that.`}
        openGraph={{
          type: 'website',
          url: 'pixelbakery.com/hooray',
          title: 'Hooray, A Surprise! | Pixel Bakery',
          images: [
            {
              url: 'https://cdn.pixelbakery.com/img/hooray_a_surprise.jpg',
              alt: 'Maddie Hahn is very surprised.',
              type: 'image/jpeg',
            },
          ],
        }}
      />
      <PageSection color='blue-dark' className='pt-44'>
        <InnerWrapper>
          <H1 className='2xl:max-w-3xl' color='blue'>
            Hooray, A Surprise 4 You
          </H1>
          <p className='text-egg'>
            It&apos;s hard to practice vulnerability– especially on the internet. Normalizing
            vulnerability is how we move to a more inclusive and accepting society, so thank you for
            being a part of that.
          </p>
          <p className='text-egg'>
            Enter your details below and we&apos;ll send you a surprise via snailmail for being
            dope.
          </p>
        </InnerWrapper>
        <InnerWrapper>
          <H2 color='egg' className='mt-24 mb-5 2xl:mb-10'>
            Gimmi the deets
          </H2>
          <Hooray_ContactForm />
        </InnerWrapper>
      </PageSection>
    </>
  )
}

export default surprise
