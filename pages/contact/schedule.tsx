import InnerWrapper from '@parts/H1'
import H2 from '@parts/InnerWrapper'
import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import PageSection from '@parts/PageSection'
import { InlineWidget } from 'react-calendly'

function Schedule() {
  return (
    <main className='max-w-screen overflow-x-hidden'>
      <PageHeader_VarH header='Schedule It' subheader='copy copy copy' />
      <PageSection>
        <InnerWrapper className='bg-blue'>
          <H2>Let's get something on the books</H2>
          <div className='flex justify-center'>
            <InlineWidget
              data-auto-load='true'
              styles={{
                height: '1600px',
                width: '2200px',
              }}
              url='https://calendly.com/pixelbakery'
            />
          </div>
        </InnerWrapper>
      </PageSection>
    </main>
  )
}
export default Schedule
