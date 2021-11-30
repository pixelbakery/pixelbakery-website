import React from 'react'
import { NextPage, GetServerSideProps } from 'next'
import PageSection from '../../components/PageSection'
import commerce from '../../lib/commerce'
import Link from 'next/link'
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
  return (
    <main id='page-store'>
      <section className='mt-4 lander bg-blue-dark py-12 px-8'>
        <div className='md:max-w-6xl mx-auto md:my-20 grid grid-cols-1 md:grid-cols-9 gap-30'>
          <div className='cols-span-1 md:col-span-3'>
            <h1 className='text-pink-light mt-0 pt-0 leading-none'>Company Shop</h1>
            <p className='pb-8  mt-1 italic text-3xl font-bold text-pink'>
              2021 giving <span className='line-through'>tuesday</span> week
            </p>
          </div>
          <div className='md:pl-32 mt-16 md:mt-0 cols-span-1 md:col-span-6  text-pink-light font-bold text-2xl'>
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
              They tirelessly show up to work every day and stare the most vile acts a human can
              commit upon another human right in the face. Each year, the CAC shields thousands of
              Nebraskan children from the sexual/physical abuse they've suffered and give them a
              pathway to healing. We just sit here and click buttons and move things around on a
              computer.
            </p>
            <p className=' my-9'>
              While there are many amazing nonprofits in nebraska that are worthy of your donations,
              the unrelenting work that the Child Advocacy Center does makes them our choice for
              this Giving Tuesday.
            </p>
            <p className='my-9 italic'>
              <span className='text-pink font-bold'>
                Also, why not make it a week instead of a day?
              </span>{' '}
              No need to conform to social constructs, ya kno?
            </p>
          </div>
        </div>
      </section>
      <PageSection className='bg-egg my-4'>
        <div className='max-w-7xl mx-auto mb-20 '>
          <h2>The Goods</h2>
          <p className='md:max-w-2xl pb-4 my-6 text-wine text-2xl font-semibold text-opacity-60 leading-tight'>
            All products are marked as 'pay what you want'. This means you get to decide how much
            our stuff is worth to you. The minimum price is the cost it takes for us to
            print/produce the product– nothing more. No margins, no upmarking.{' '}
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {products.data.map((product) => (
            <Link key={product.id} href={`/store/product/${product.permalink}`}>
              <a className='overflow-hidden'>
                <div className='relative rounded-lg overflow-hidden'>
                  <img
                    src={product.media.source}
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
      <section className='my-4 bg-yellow py-16 px-8'>
        <div className='max-w-6xl mx-auto'>
          <h2>Mind the dust</h2>
          <p className='my-4 text-blue-dark text-3xl font-bold md:max-w-3xl'>
            This is a development preview of our new website ~~see ya in Q1 of 2022 😉~~. This means
            that a lot of links are going to be broken outside of our shop pages.
          </p>
          <p className='my-4 text-peach font-bold italic text-2xl '>
            please don't tell the health inspector.
          </p>
        </div>
      </section>
    </main>
  )
}

export default StorePage
