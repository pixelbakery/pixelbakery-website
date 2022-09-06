import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import { NextPage, GetServerSideProps } from 'next'
import PageSection from '@parts/PageSection'
import commerce from '@lib/commerce'
import Link from 'next/link'
import useCart from '@hooks/useCart'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'))
import cn from 'classnames'
import gsap from 'gsap'
import Image from 'next/image'
import Navigation_Store from '@nav/Navigation_Store'
import Main from '@parts/Main'
import Store_SEO from '@store/Store_SEO'
import H3 from '@typography/H3'
export const getServerSideProps: GetServerSideProps = async () => {
  const products = await commerce.products.list()
  return {
    props: {
      products,
    },
  }
}

const StorePage: NextPage = ({ products }: any) => {
  const { data: cart, refetch } = useCart()
  // BEGIN GSAP
  useEffect(() => {
    gsap.set('.anim-header .anim-span', { y: 20 })
    const tl_loadingModal = gsap.timeline({
      defaults: {
        stagger: 0.1,
        ease: 'power1.inOut',
      },
      repeat: -1,
      repeatDelay: 0.62,
    })

    tl_loadingModal.to('.anim-header .anim-span', {
      y: -20,
      duration: 0.66,
    })
    tl_loadingModal.to(
      '.anim-header .anim-span',
      {
        y: 20,
        duration: 0.66,
      },
      '+=.62',
    )
    tl_loadingModal.play
    return () => {
      tl_loadingModal.kill()
    }
  }, [])
  // END GSAP

  return (
    <Main id='page-store' className='min-w-screen'>
      <Store_SEO />
      <Navigation_Store />
      <PageHeader_VarH header='Company Store' subheader='Freshly Baked Every Morning' />
      {/* <section className='mt-4 bg-blue-dark py-12 px-8 min-w-screen'>
        <div className='max-w-xl md:max-w-6xl mx-auto my-16 md:my-20 grid grid-cols-1 lg:grid-cols-9 gap-30'>
          <div className='cols-span-1 lg:col-span-3'>
            <h1 className='text-4xl lg:text-8xl text-pink-light mt-0 mb-0 pt-0 leading-none'>
              Company Shop
            </h1>
            <p className='pb-8  mt-1 italic text-3xl font-bold text-pink'>
              2021 giving <span className='line-through'>tuesday</span> month
            </p>
          </div>
          <div className='lg:pl-32 mt-12 lg:mt-0 cols-span-1 lg:col-span-6  px-4 text-pink-light font-bold text-lg lg:text-2xl'>
            <p className=' mb-9'>
              In honor of Giving Tuesday, Pixel Bakery will be donating all proceeds of purchases
              made from our shop to our friends at the
              <Link href='http://smallvoices.org' passHref>
                <a target='_blank' rel='noreferrer' className='text-pink underline ml-1'>
                  <span>Child Advocacy Center</span>
                </a>
              </Link>{' '}
              for the entire month of December.{' '}
            </p>{' '}
            <p className='my-9'>
              Each year, the CAC shields thousands of Nebraskan children from the sexual/physical
              abuse they&apos;ve suffered and give them a pathway to healing. We just sit here and
              click buttons and move things around on a computer.
            </p>
            <p className=' my-9 hidden lg:block'>
              While there are many amazing nonprofits in Nebraska that are worthy of your donations,
              the unrelenting work that the Child Advocacy Center does makes them our choice for
              this Giving Tuesday.
            </p>
            <p className='my-9 italic'>
              <span className='text-pink font-bold'>
                Also, why not make it a month instead of a day?{' '}
              </span>
              No need to conform to social constructs, ya kno?
            </p>
          </div>
        </div>
      </section> */}
      <PageSection className='bg-egg my-4'>
        <div className='max-w-7xl mx-auto mb-30 '>
          <div className='text-center md:text-left text-4xl md:text-6xl text-peach font-black anim-header block pb-12'>
            <span className='px-1 anim-span relative inline-block text-peach'>t</span>
            <span className='px-1 anim-span relative inline-block text-yellow'>h</span>
            <span className='px-1 anim-span relative inline-block mr-8 text-blue'>e</span>

            <span className='px-1 anim-span relative inline-block text-pink'>g</span>
            <span className='px-1 anim-span relative inline-block text-blue-dark'>o</span>
            <span className='px-1 anim-span relative inline-block text-blue'>o</span>
            <span className='px-1 anim-span relative inline-block text-peach'>d</span>
            <span className='px-1 anim-span relative inline-block text-yellow'>s</span>
          </div>
        </div>
        <div className='pt-8 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8'>
          {products.data.map((product) => (
            <Link key={product.id} href={`/store/product/${product.permalink}`}>
              <a
                className='overflow-hidden transform transition-all duration-600 ease-in-out scale-100 opacity-100
hover:opacity-90 hover:scale-99 active:scale-97'
              >
                <div className='relative rounded-md w-full aspect-w-4 aspect-h-3 overflow-hidden'>
                  <Image
                    src={
                      product?.media?.source ??
                      product?.image?.url ??
                      `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/placeholder01.png`
                    }
                    placeholder='blur'
                    blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/placeholder01.png`}
                    layout='fill'
                    objectFit='cover'
                    alt={product.name}
                    className='object-cover object-center w-full h-full'
                  />
                </div>
                <div className='px-4 relative inset-0 flex flex-col pt-4 mt-0'>
                  <div className='flex gap-x-6'>
                    <p
                      className={cn('text-blue font-lg font-bold my-0 py-0', {
                        ['line-through']: product.inventory.available == 0,
                      })}
                    >
                      {product.price.formatted_with_symbol}
                    </p>
                    {product.inventory.available == 0 ? (
                      <span className='h-full self-center text-sm text-wine-300 italic'>
                        SOLD OUT! OPE!
                      </span>
                    ) : (
                      <span className='h-full self-center text-sm text-wine-300 italic'>
                        available: {product.inventory.available}
                      </span>
                    )}
                  </div>
                  <H3 className=' text-wine'>{product.name}</H3>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </PageSection>
    </Main>
  )
}

export default StorePage
