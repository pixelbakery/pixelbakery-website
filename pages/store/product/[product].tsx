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
  let prependPrice = ''
  if (product.conditionals.is_pay_what_you_want) {
    prependPrice = 'minimum price '
  }
  let params = {
    type: 'id',
  }
  console.log('HERE YA GO: ' + product.assets[0].url)
  return (
    <>
      {/* <Navigation /> */}
      <main id={'product-' + product.name} className=' bg-white relative'>
        {/* {JSON.stringify(product)} */}
        <PageSection
          className='inset-0 pt-40'
          innerMaxWidth={'max-w-screen-sm md:max-w-screen-md lg:max-w-7xl'}
        >
          <div className='grid grid-cols-1 items-center pt-20 md:grid-cols-2 gap-24'>
            <div
              className='mt-0 col-span-1 relative flex flex-col justify-start'
              style={{ minHeight: '50vh' }}
            >
              <video
                src={product.assets[0].url}
                loop
                muted
                autoPlay
                className='my-0 px-0 object-cover inset-0 w-full h-full'
              />
              {/* <Image
                layout='fill'
                src={product.media.source}
                objectFit='cover'
                className='inset-0'
              /> */}
            </div>

            {}
            <div className='col-span-1 flex flex-col gap-6  justify-start'>
              <h1 className='text-6xl font-extrabold text-blue-dark leading-none my-0 py-0'>
                {product.name}
              </h1>
              <p className='text-blue text-3xl font-bold mt-3'>
                {prependPrice} {product.price.formatted_with_symbol}
              </p>
              <p className='my-1 py-0 text-wine italic '>
                available: {product.inventory.available}
              </p>
              <div
                className='my-b mt-3 text-lg text-wine leading-relaxed'
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
              <div>
                <p>{product.filename}</p>
                <input
                  type='range'
                  min={product.price.raw}
                  max='100'
                  value={price}
                  onChange={onPriceChange}
                  className='bg-blue slider'
                />
                <span className='ml-8'>
                  <span className='font-medium text-xl text-wine mr-1'>$</span>
                  <input
                    className='rounded-md border-blue bg-transparent font-medium font-wine w-24 text-left pl-2'
                    type='number'
                    min={product.price.raw}
                    value={price}
                    onChange={onPriceChange}
                  />
                </span>
              </div>
              <input
                type='submit'
                value='Get At It '
                className='bg-blue rounded-lg text-xl font-bold py-4 block text-cream focus-within:sr-only lowercase  cursor-pointer'
              />
            </div>
          </div>
        </PageSection>
      </main>
    </>
  )
}

export default StoreProduct
