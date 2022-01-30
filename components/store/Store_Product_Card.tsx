import { useEffect } from 'react'

import Link from 'next/link'

function Store_Product_Card({ product, price, url, previewImg }) {
  useEffect(() => {
    return () => {}
  }, [])

  return (
    <Link href={url}>
      <article className='col-span-1 w-full '>
        <div className=' rounded-lg overflow-hidden aspect-w-4 aspect-h-3'>
          <img
            src={previewImg}
            alt="Pixel Bakery Black Mug that says 'i love you'"
            className='absolute object-cover object-center w-100 h-100'
          />
        </div>
        <h2 className='text-pink-light mt-3 text-2xl'>
          {product} – ${price}
        </h2>
      </article>
    </Link>
  )
}

export default Store_Product_Card
