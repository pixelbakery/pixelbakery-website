import H2 from '@typography/H2'

import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Lead from '@typography/Lead'
import DateFormatter from '@lib/date-formatter'
import Pill from '@parts/Pill'
import Image from 'next/image'
import Link from 'next/link'
import Education_MadeToOrder_Card from './Education_MadeToOrder_Card'

function Education_MadeToOrder({ allMadeToOrders }) {
  return (
    <PageSection className='bg-white' id='madeToOrder'>
      <InnerWrapper>
        <H2 id={'made-to-order'} color='blue'>
          Made To Order
        </H2>

        <Lead className='max-w-md text-xl text-blue-dark leading-none my-6'>
          One-off tutorials on specific somethings.
        </Lead>
        <div className='my-16 grid grid-cols-2  sm:grid-cols-4  gap-4 md:gap-y-20 md:gap-5'>
          {allMadeToOrders.map((tutorial, index) => {
            return (
              <Education_MadeToOrder_Card
                key={index}
                title={tutorial.data.title}
                coverImage={tutorial.data.coverImage}
                date={tutorial.data.date}
                category={tutorial.data.category}
                aspectW={'3'}
                aspectY={'4'}
                as={`/education/tutorials/${tutorial.filePath.replace(/\.mdx?$/, '')}`}
                href={`/education/tutorials/[madeToOrder]`}
              />
            )
          })}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Education_MadeToOrder
