import { NextPage, GetServerSideProps } from 'next'
import PageSection from '../../components/PageSection'
import commerce from '../../lib/commerce'
import Link from 'next/link'

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
    <main>
      <div className='lander bg-yellow'>Company Shop</div>
      <PageSection>
        <div className='grid grid-cols-3 gap-4'>
          {products.data.map((product) => (
            <Link key={product.id} href={`/store/product/${product.permalink}`}>
              <a className='aspect-w-1 aspect-h-1 bg-pink'>
                <div className='inset-0 flex justify-center items-center p-4'>
                  <h4 className='block'>{product.name}</h4>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </PageSection>
    </main>
  )
}

export default StorePage
