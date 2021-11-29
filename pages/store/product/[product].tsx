import { NextPage } from 'next'
import React, { useState } from 'react'
import Navigation from '../../../components/Navigation'
import PageSection from '../../../components/PageSection'
import commerce from '../../../lib/commerce'
import Image from 'next/image'

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
  console.log({ product })
  const [price, setPrice] = useState(product.price.raw)
  const onPriceChange = (evt) => setPrice(evt.target.value)
  return (
    <>
      {/* <Navigation /> */}
      <main id='' className='lander bg-white relative'>
        {/* {JSON.stringify(product)} */}
        <PageSection className='inset-0'>
          <div className='grid grid-cols-1 items-center md:grid-cols-2 gap-16'>
            <div className='col-span-1 relative' style={{ minHeight: '50vh' }}>
              <Image
                layout='fill'
                src={product.media.source}
                objectFit='contain'
                className='inset-0'
              />
            </div>
            <div className='col-span-1 flex flex-col gap-6  justify-center'>
              <h3 className='text-5xl font-light text-blue-dark'>{product.name}</h3>

              <div>
                <p className='text-blue text-lg'>{product.price.formatted_with_symbol}</p>
                <input type='range' min='1' max='100' value={price} onChange={onPriceChange} />
                <input type='number' value={price} onChange={onPriceChange} />
              </div>
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>
          </div>
        </PageSection>
      </main>
    </>
  )
}

export default StoreProduct
