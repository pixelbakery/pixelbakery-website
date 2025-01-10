import Education_Header_Link from './Education_Header_Link'
import dynamic from 'next/dynamic'
import { H1, Lead } from '@typography'

const LottiePatternPlayer = dynamic(() => import('@parts/LottiePatternPlayer'), {
  ssr: false,
})

function Education_Header() {
  return (
    <section className='relative grid w-full grid-cols-5 my-4 lander'>
      <div className='absolute top-0 left-0 z-0 w-full h-full col-span-1 bg-blue lg:relative sm:col-span-2 lottie-blue-dark'>
        <LottiePatternPlayer />
      </div>
      <div className='z-10 flex flex-col justify-center w-full h-full col-span-4 pt-24 overflow-hidden bg-white sm:col-span-3 lg:pt-12'>
        <div className='max-w-xl px-8 py-8 mx-auto'>
          <H1 className='pt-0 mt-0 text-5xl leading-none lg:text-7xl text-blue-dark'>Education</H1>
          <Lead color='peach'>Education should be accessable, free, and open-source.</Lead>

          <div>
            <Education_Header_Link
              header={'project files'}
              subheader={'open-source work we’ve made'}
              inpageLink={'#projectFiles'}
            />

            <Education_Header_Link
              header={'made to order'}
              subheader={'one-off tutorials on specific somethings'}
              inpageLink={'#madeToOrder'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education_Header
