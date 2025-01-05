import H2 from '@typography/H2'
import { InnerWrapper, PageSection } from '@parts'
import Lead from '@typography/Lead'
import Education_MadeToOrder_Card from '@education/Education_MadeToOrder_Card'

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
                tutorial={tutorial}
                key={index}
                aspectW={'3'}
                aspectH={'4'}
              />
            )
          })}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Education_MadeToOrder
