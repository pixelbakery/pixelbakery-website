import { InnerWrapper, PageSection } from '@parts'
import { H2, Lead } from '@typography'
import { Education_MadeToOrder_Card } from '@education'
import type { Tutorial } from '@/types/tutorials'

interface Props {
  allMadeToOrders: Tutorial[]
}

function Education_MadeToOrder({ allMadeToOrders }: Props) {
  return (
    <PageSection className="bg-white" id="madeToOrder">
      <InnerWrapper>
        <H2 id={'made-to-order'} color="blue">
          Made To Order
        </H2>

        <Lead className="max-w-md my-6 text-xl leading-none text-blue-dark">
          One-off tutorials on specific somethings.
        </Lead>
        <div className="grid grid-cols-2 gap-4 my-16 sm:grid-cols-4 md:gap-y-20 md:gap-5">
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