import type { ReactElement } from 'react'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
function Page_FiveOhFive() {
  return (
    <>
      <NextSeo noindex={true} title='404 Page Not Found' />
      <section className='lander' id='topOfPage'>
        <div className='mx-auto flex flex-col justify-center max-w-4xl h-full'>
          <h1 className='mb-12 text-center text-4xl text-blue'>500 - Server-side error occurred</h1>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/imindanger.webp`}
            width={480}
            height={269}
            placeholder='blur'
            blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/imindanger.webp`}
            className='w-full object-contain'
            alt={"I'm in danger"}
          />
        </div>
      </section>
    </>
  )
}

//Set page layout
Page_FiveOhFive.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
}
export default Page_FiveOhFive
