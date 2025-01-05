import { InnerWrapper, PageSection } from '@parts'
import H2 from '@typography/H2'

const Education_Why = () => {
  return (
    <PageSection id='why'>
      <InnerWrapper>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <H2>Why?</H2>
          <div className='max-w-xl'>
            <p>
              Our success is a direct result of the people that we meet, whether that be our
              employees, our clients, or community members. As such, we believe in giving back to
              our community through education. <br />
              <br />
              We are proponents of breaking down any barriers (e.g. monetary costs) that prevent
              creativity and believe that everyone should have access to high-quality educational
              experiences and resources.
            </p>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Education_Why
