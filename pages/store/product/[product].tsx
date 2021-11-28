import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import Carousel from '../../../components/parts/photoCarousel'
import photos from '../../../data/about-studioviews'
import { NextPage } from 'next'
// import ProductShotWebm from "../../img/store/pixelbakery-mug-black_1.webm";
// import ProductShot from "../../img/store/pixelbakery-mug-black.png";
import commerce from '../../../lib/commerce'

export async function getServerSideProps(context) {
  const { product: permalink } = context.params
  const product = await commerce.products.retrieve(permalink, { type: 'permalink ' })
  return {
    props: {
      product,
    },
  }
}

let StoreProduct: NextPage = ({ product }) => {
  return (
    <main id='' className='my-4 lander bg-white '>
      {/* {JSON.stringify(product)} */}
      <section className='pt-48 mx-auto max-w-6xl h-full grid grid-cols-1 md:grid-cols-2 gap-16'>
        <div className='col-span-1 flex flex-col justify-top'>
          <div className=' aspect-w-4 aspect-h-3 rounded-md overflow-hidden'>
            {/* <video
              muted
              autoPlay
              loop
              poster={ProductShot}
              src={ProductShotWebm}
              className='object-cover object-center w-full h-full rounded-md'
            /> */}
          </div>
          {/* <Carousel
            className='self-center aspect-w-4  aspect-h-9'
            photos={photos}
          /> */}
        </div>
        <div className='col-span-1 flex flex-col justify-top '>
          <h1 className='mt-0 pt-0 mb-3 text-blue-dark leading-none'>{product.name}</h1>
          <div className='my-3 text-blue font-bold text-3xl'> $14</div>
          <p className='my-3 text-wine text-xl text-opacity-90 leading-relaxed'>
            {product.description}
          </p>
          <form>
            <input type='number' value='' />
            <input type='submit' value='Add to Cart' />
          </form>
        </div>
      </section>
    </main>
  )
}

export default StoreProduct
