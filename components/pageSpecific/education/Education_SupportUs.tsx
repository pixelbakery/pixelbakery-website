import { H2 } from '@typography'

const Education_SupportUs = () => {
  return (
    <section className='py-16 my-4 bg-blue'>
      <div className='grid grid-cols-1 px-4 md:grid-cols-2'>
        <div className='col-span-1 pb-12'>
          <div className='max-w-md mx-auto'>
            <H2 className='pt-0 mt-0' color='cream'>
              Support Us
            </H2>
            <p className='max-w-lg text-xl font-medium text-cream'>
              If this project file helped you at all, feel free to give us a tip.
            </p>
          </div>
        </div>
        <div className='flex flex-col justify-center col-span-1 '>
          <div className='relative h-fit'>
            <iframe
              scrolling='no'
              className='inline-block w-full bg-transparent'
              id='kofiframe'
              src='https://ko-fi.com/pixelbakery/?hidefeed=true&widget=true&embed=true&preview=true&transparent-background=true'
              style={{
                border: 'none',
                width: '100%',
                padding: '4px',
                background: 'rgba(0,0,0,0) !important',
              }}
              height='800'
              title='pixelbakery'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education_SupportUs
