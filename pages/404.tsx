import { ReactElement, useEffect } from 'react'
import { Layout_Default } from '@layouts'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { H1 } from '@typography'
import { usePlausible } from 'next-plausible'
import { Button_Outlined } from '@parts'

function Page_FourOhFour() {
  const plausible = usePlausible()

  useEffect(() => {
    plausible('404-page', {
      props: {
        url: window.location.href,
        referrer: document.referrer || 'None',
      },
    })
  }, [plausible])

  return (
    <>
      <NextSeo noindex={true} title='404 Page Not Found' />
      <section className='lander' id='topOfPage'>
        <div className='flex flex-col justify-center h-full max-w-4xl mx-auto'>
          <H1 color={'blue'} centered className='font-geologica'>
            404: Page Not Found
          </H1>
          <Image
            src={`/img/imindanger.webp`}
            width={480}
            height={269}
            placeholder='blur'
            blurDataURL={`/img/imindanger.webp`}
            className='object-contain w-full'
            alt={"I'm in danger"}
          />
        </div>
        <Button_Outlined color='blue' link='/' className='mt-8' text='Go Home' />
      </section>
    </>
  )
}

//Set page layout
Page_FourOhFour.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Default>{page}</Layout_Default>
}
export default Page_FourOhFour
