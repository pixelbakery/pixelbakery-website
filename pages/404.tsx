import Main from '@parts/Main'
import PageSection from '@parts/PageSection'
import H1 from '@typography/H1'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
function FourOhFour() {
  return (
    <Main>
      <NextSeo noindex={true} title='Pixel Bakery – 404 Page Not Found' />
      <section className='lander' id='topOfPage'>
        <div className='mx-auto flex flex-col justify-center max-w-4xl h-full'>
          <h1 className='mb-12 text-center text-4xl text-blue'>404: Page Not Found</h1>
          <Image
            src={'/img/imindanger.webp'}
            layout='responsive'
            width='480px'
            height='269px'
            className='w-full'
          />
        </div>
      </section>
    </Main>
  )
}

export default FourOhFour
