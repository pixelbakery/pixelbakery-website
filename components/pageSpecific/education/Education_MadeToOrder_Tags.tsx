import Button_Filled from '@parts/Button_Filled'
import { InnerWrapper, PageSection } from '@parts'
import Pill from '@parts/Pill'

function Education_MadeToOrder_Tags({ tags }) {
  return (
    <PageSection id={'tutorials-tags'} disableSpacing className='mb-32'>
      <InnerWrapper disableSpacing>
        <div className='px-6 max-w-3xl mx-auto'>
          <h3 className='text-blue font-semibold text-3xl mb-4'>Tags</h3>
          <div className='flex justify-start flex-wrap gap-2'>
            {tags.map((tag) => {
              return <Pill key={tag} text={tag} bgColor='pink-lighter' textColor='pink' size='sm' />
            })}
          </div>
        </div>
        <div className='mt-12'>
          <Button_Filled
            center={true}
            text='we got more'
            link='/education#madeToOrder'
            bgColor='blue'
            textColor='cream'
            chevronDirection='left'
          />
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default Education_MadeToOrder_Tags
