import H2 from '@typography/H2'

const Education_SupportUs = () => {
  return (
    <section className='my-4 py-16 bg-blue'>
      <div className='grid grid-cols-1 md:grid-cols-2 px-4'>
        <div className='col-span-1 pb-12'>
          <div className='max-w-md mx-auto'>
            <H2 className='mt-0 pt-0' color='cream'>
              Support Us
            </H2>
            <p className='max-w-lg text-cream font-medium text-xl'>
              If this project file helped you at all, feel free to give us a tip.
            </p>
          </div>
        </div>
        <div className=' col-span-1  flex flex-col justify-center'>
          <div className='relative h-fit'>
            <iframe
              scrolling='no'
              className='w-full  inline-block bg-transparent'
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
