import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
function Page_FourOhFour() {
  return (
    <>
      <NextSeo noindex={true} title='404 Page Not Found' />
      <section className='lander' id='topOfPage'>
        <div className='flex flex-col justify-center h-full max-w-4xl mx-auto'>
          <h1 className='mb-12 text-4xl font-extrabold text-center font-geologica text-blue'>
            404: Page Not Found
          </h1>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/imindanger.webp`}
            width={480}
            height={269}
            placeholder='blur'
            blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/imindanger.webp`}
            className='object-contain w-full'
            alt={"I'm in danger"}
          />
        </div>
      </section>
    </>
  )
}

//Set page layout
Page_FourOhFour.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_FourOhFour
