import dynamic from 'next/dynamic'
import { NextPage, GetServerSideProps } from 'next'
import PageSection from '@parts/PageSection'
import commerce from '@lib/commerce'
import Link from 'next/link'
import useCart from '@hooks/useCart'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'), {
  loading: () => (
    <PageHeader_LoadingContent header={'Company Store'} subheader={'Freshly baked every morning'} />
  ),
  ssr: false,
})
import cn from 'classnames'
import Image from 'next/image'
import Navigation_Store from '@nav/Navigation_Store'
import Main from '@parts/Main'
import Store_SEO from '@store/Store_SEO'
import H3 from '@typography/H3'
import Store_TheGoods from '@store/Store_TheGoods'
import PageHeader_LoadingContent from '@pageHeaders/PageHeader_LoadingContent'
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

  return (
    <Main id='page-store' className='min-w-screen'>
      <Store_SEO />
      <Navigation_Store />
      <PageHeader_VarH header='Company Store' subheader='Freshly Baked Every Morning' />
      <PageSection className='bg-egg my-4' id='products'>
        <Store_TheGoods />
        <div className='pt-8 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8'>
          {products.data.map((product) => (
            <Link
              hrefLang={'en-US'}
              key={product.id}
              href={`/store/product/${product.permalink}`}
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
                  width={1920}
                  height={1440}
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
            </Link>
          ))}
        </div>
      </PageSection>
    </Main>
  )
}

export default StorePage
