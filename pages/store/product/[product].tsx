import { GetServerSideProps, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import Navigation from '../../../components/Navigation'
import PageSection from '../../../components/PageSection'
import commerce from '../../../lib/commerce'
import Image from 'next/image'

export let getServerSideProps: GetServerSideProps = async (context) => {
  const { product: permalink } = context.params
  const product = await commerce.products.retrieve(permalink, { type: 'permalink ' })
  return {
    props: {
      product,
    },
  }
}

let StoreProduct: NextPage = ({ product }: { product: any }) => {
  console.log({ product })
  const [cart, setCart] = useState(null)
  const [price, setPrice] = useState(product.price.raw)
  const onPriceChange = (evt) => setPrice(evt.target.value)
  const addToCart = async () => {
    const result = await commerce.cart.add(product.id, 1)
    console.log(result)
    commerce.cart.retrieve().then(setCart)
  }

  useEffect(() => {
    commerce.cart.retrieve().then(setCart)
  }, [])
  return (
    <>
      {/* <Navigation /> */}
      <main id='' className='lander bg-white relative'>
        <PageSection className='inset-0'>
          Cart items: {cart.total_items}
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
              <button onClick={addToCart}>Add to Cart</button>
            </div>
          </div>
        </PageSection>
      </main>
    </>
  )
}

export default StoreProduct
