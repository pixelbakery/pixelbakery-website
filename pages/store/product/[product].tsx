/* eslint-disable react/no-children-prop */
import { GetServerSideProps, NextPage } from 'next'
import { useState } from 'react'
import { BreadcrumbJsonLd, NextSeo, ProductJsonLd } from 'next-seo'
import PageSection from '@parts/PageSection'
import commerce from '@lib/commerce'
import Image from 'next/image'
import useCart from '@hooks/useCart'
import Store_VariantPicker from '@store/Store_VariantPicker'
import Link from 'next/link'
import cs from 'classnames'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navigation_Store from '@nav/Navigation_Store'
import { createElement } from 'react'
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { product: permalink } = context.params

  const product = await commerce.products.retrieve(permalink as any, { type: 'permalink ' })

  return {
    props: {
      product,
    },
  }
}
let currentVariant = 'select'

// Lets the Add  to Cart button know if it needs to wait for a variant to be selected, and if there's a variant at all.
function CanIAddToCart(variantId) {
  currentVariant = variantId
}
const Store_Product: NextPage = ({ product }: { product: any }) => {
  const [soldOut, setSoldOut] = useState(product.conditionals.is_sold_out)

  const [variant, setVariant] = useState({})

  const onVariantChange = (groupId, variantId) => {
    setVariant({
      [groupId]: variantId,
    })
    CanIAddToCart(variantId)
    // chosenVariant(groupId, variantId)
  }

  const renderHTML = (rawHTML: string) =>
    createElement('div', { dangerouslySetInnerHTML: { __html: rawHTML } })
  const toastMessage = () => renderHTML('🥳   &#8194;    added to cart  &#8194;  🎉')
  const notify = () => toast(toastMessage)
  const { data: cart, refetch } = useCart()
  const addToCart = async () => {
    await commerce.cart.add(product.id, 1, {
      ...variant,
    })
    notify()

    refetch()
    CanIAddToCart('select')
  }

  // check to see if it's a name your own price product

  return (
    <main id={'product-' + product.name} className=' bg-white relative'>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Store',
            item: 'https://pixelbakery.com/store',
          },
          {
            position: 2,
            name: `${product.name}`,
            item: `https://pixelbakery.com/store/product/${product.permalink}`,
          },
        ]}
      />
      <NextSeo
        title={`${product.name} | Store`}
        description={`${product.description}`}
        openGraph={{
          url: `https://pixelbakery.com/store/product/${product.permalink}`,
          images: [
            {
              url: `${product.image.url}`,
              alt: `${product.description}`,
              type: 'image/jpeg',
              width: 720,
              height: 540,
            },
          ],
          title: `${product.name}`,
          description: `${product.description}`,
          site_name: 'Pixel Bakery',
        }}
        twitter={{
          handle: '@pixelbakerylnk',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <ProductJsonLd
        productName={`${product.name}`}
        images={[`${product.image.url}`]}
        description={`${product.description}`}
        brand='Pixel Bakery'
        offers={[
          {
            price: `${product.price.formatted}`,
            priceCurrency: 'USD',
            priceValidUntil: '2020-11-05',
            availability: 'https://schema.org/InStock',
            url: `https://pixelbakery.com/store/product/${product.permalink}`,
          },
        ]}
      />
      <div className='d-sm-block'></div>
      <Navigation_Store />

      <PageSection
        className={'bg-cream  my-4 inset-0 py-20'}
        innerMaxWidth={'max-w-screen-sm md:max-w-screen-md lg:max-w-7xl'}
      >
        <div className='mt-20 lg:mt-0 grid grid-cols-1 lg:grid-cols-2 items-center gap-4 md:gap-12 lg:gap-24'>
          <div className='block md:hidden col-span-1 mt-0 gap-6  '>
            <div className='w-full  flex flex-row justify-start text-left mt-0 pb-3 '>
              <div>
                <Link href={'/store'} passHref>
                  <a className='font-semibold text-blue text-xl'>← more good good</a>
                </Link>
              </div>
            </div>
            <h1 className=' text-6xl font-extrabold text-blue-dark leading-none my-0 py-0'>
              {product.name}
            </h1>
          </div>
          <div className='mt-0 col-span-1 relative flex flex-col self-start'>
            {product.assets[0].file_extension === 'mp4' ? (
              <video
                loop
                muted
                autoPlay
                playsInline
                id={product.name + '-video'}
                controls={false}
                className='my-0 px-0 object-cover inset-0 w-full rounded-md hideControls'
              >
                <source src={product.assets[0].url} type='video/mp4' />
              </video>
            ) : (
              <Image
                layout='fill'
                src={product.media.source}
                placeholder='blur'
                blurDataURL={product.media.source}
                objectFit='cover'
                className='inset-0'
                alt={'pixel bakery ' + product.name}
              />
            )}

            <div className='hidden w-full  md:flex flex-row justify-start text-left py-4 '>
              <Link href={'/store'} passHref>
                <a className='font-semibold text-blue text-xl'>← more good good</a>
              </Link>
            </div>
          </div>
          <div className='col-span-1  gap-6  '>
            <h1 className=' hidden md:block text-6xl font-extrabold text-blue-dark leading-none my-0 py-0'>
              {product.name}
            </h1>
            <p className='text-blue text-3xl font-bold mt-1 md:mt-3 pb-0 mb-0'>
              {product.price.formatted_with_symbol}
            </p>
            <p className='mt-1 py-0 text-wine italic text-opacity-70'>
              {product.inventory.available === 0 ? (
                <span>remaining: SOLD OUT</span>
              ) : (
                <span>remaining: {product.inventory.available}</span>
              )}
            </p>
            <div
              className='my-8 text-lg text-wine leading-relaxed'
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
            <Store_VariantPicker
              className='mb-3'
              variantGroups={product.variant_groups}
              value={variant}
              onChange={onVariantChange}
            />
            {currentVariant != 'select' || product.variant_groups.length === 0 ? (
              <button
                onClick={addToCart}
                disabled={soldOut}
                className={cs('checkoutButton', {
                  ['checkoutButton-disabled-true']: soldOut,
                  ['checkoutButton-disabled-false']: !soldOut,
                })}
              >
                Add To Cart {}
              </button>
            ) : (
              <button
                onClick={addToCart}
                disabled={soldOut}
                className='rounded-lg text-xl font-bold mt-8 mb-2 py-4 block w-full lowercase scale-100 bg-wine-100 text-wine-200 cursor-not-allowed opacity-60'
              >
                Select options first plz
              </button>
            )}
            {cart?.total_items > 0 ? (
              <Link href='/store/cart' passHref>
                <a
                  className={
                    'border text-center border-blue text-blue rounded-lg cursor-pointer hover:opacity-90 hover:scale-97 active:scale-90 active:bg-blue text-xl font-bold mb-8 mt-2 md:mt-4 py-4 block w-full lowercase scale-100 opacity-100 transform transition-all duration-600 ease-in-out '
                  }
                >
                  check out →
                </a>
              </Link>
            ) : null}

            <ToastContainer
              position='bottom-center'
              autoClose={1400}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />

            <div className=' md:hidden w-full  flex flex-row justify-start text-left  '>
              <div>
                <Link href={'/store'} passHref>
                  <a className='font-semibold text-blue text-xl'>← more good good</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </main>
  )
}

export default Store_Product
