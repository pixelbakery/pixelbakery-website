import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import PageSection from '../../components/PageSection'
import Maintenance from '../../components/pg-store/maintenance'
import commerce from '../../lib/commerce'
import Link from 'next/link'
import useCart from '../../hooks/useCart'
import Image from 'next'

export let getServerSideProps: GetServerSideProps = async (context) => {
  const products = await commerce.products.list()
  return {
    props: {
      products,
    },
  }
}

let StorePage: NextPage = ({ products }) => {
  const { data: cart, refetch } = useCart()

  console.log(products)

  return (
    <main id='page-store'>
      <Link href='/store/cart' passHref>
        <div className='absolute right-0 top-0 mr-8 mt-8 z-50'>
          <div
            className='relative text-center bg-pink-light px-4 py-4 rounded-md font-bold text-peach text-xl leading-none cursor-pointer  transform transition-all duration-600 ease-in-out scale-100 opacity-100
hover:opacity-90 hover:scale-97 active:scale-90'
          >
            {cart?.total_items}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-7 w-7'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2.5'
                d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
              />
            </svg>
          </div>
        </div>
      </Link>
      <section className='mt-4 bg-blue-dark py-12 px-8'>
        <div className='max-w-xl md:max-w-6xl mx-auto md:my-20 grid grid-cols-1 lg:grid-cols-9 gap-30'>
          <div className='cols-span-1 lg:col-span-3'>
            <h1 className='text-pink-light mt-0 pt-0 leading-none'>Company Shop</h1>
            <p className='pb-8  mt-1 italic text-3xl font-bold text-pink'>
              2021 giving <span className='line-through'>tuesday</span> week
            </p>
          </div>
          <div className='lg:pl-32 mt-16 lg:mt-0 cols-span-1 lg:col-span-6  px-4 text-pink-light font-bold text-lg lg:text-2xl'>
            <p className=' mb-9'>
              In honor of Giving Tuesday, Pixel Bakery will be donating all proceeds of purchases
              made from our shop to our friends at the
              <Link href='http://smallvoices.org' passHref>
                <a target='_blank' rel='noreferrer' className='text-pink underline ml-1'>
                  <span>Child Advocacy Center</span>
                </a>
              </Link>
              .{' '}
            </p>{' '}
            <p className='my-9'>
              Each year, the CAC shields thousands of Nebraskan children from the sexual/physical
              abuse they&apos;ve suffered and give them a pathway to healing. We just sit here and
              click buttons and move things around on a computer.
            </p>
            <p className=' my-9 hidden lg:block'>
              While there are many amazing nonprofits in nebraska that are worthy of your donations,
              the unrelenting work that the Child Advocacy Center does makes them our choice for
              this Giving Tuesday.
            </p>
            <p className='my-9 italic'>
              <span className='text-pink font-bold'>
                Also, why not make it a week instead of a day?{' '}
              </span>
              No need to conform to social constructs, ya kno?
            </p>
          </div>
        </div>
      </section>
      <PageSection className='bg-egg my-4'>
        <div className='max-w-7xl mx-auto mb-20 '>
          <h2>The Goods</h2>
          <p className='md:max-w-2xl pb-4 my-6 text-wine text-2xl font-semibold text-opacity-60 leading-tight'>
            All products are marked as &apos;pay what you want&apos;. This means you get to decide
            how much our stuff is worth to you. The minimum price is the cost it takes for us to
            print/produce the product– nothing more. No margins, no upmarking.{' '}
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {products.data.map((product) => (
            <Link key={product.id} href={`/store/product/${product.permalink}`}>
              <a
                className='overflow-hidden transform transition-all duration-600 ease-in-out scale-100 opacity-100
hover:opacity-90 hover:scale-99 active:scale-97'
              >
                <div className='relative rounded-md overflow-hidden'>
                  <img
                    src={product?.media?.source ?? product?.image?.url}
                    alt={product.name}
                    className='object-cover object-center w-full h-full'
                  />
                </div>
                <div className='px-4 relative inset-0 flex flex-col pt-4 mt-0'>
                  <h4 className='block text-2xl font-semibold text-wine'>{product.name}</h4>
                  <p className='text-blue font-lg font-bold'>
                    starting at {product.price.formatted_with_symbol}
                  </p>
                  <p className='text-wine font-md italic text-md text-opacity-50'>
                    {product.inventory.available == 0 ? (
                      <>SOLD OUT! OPE!</>
                    ) : (
                      <>remaining inventory: {product.inventory.available}</>
                    )}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </PageSection>
      <Maintenance />
    </main>
  )
}

export default StorePage
