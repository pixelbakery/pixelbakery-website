import Lead from '@typography/Lead'
import PageHeader_TextBox from './PageHeader_TextBox'

function PageHeader_LoadingContent({ header, subheader }) {
  return (
    <header className='bg-cream relative overflow-hidden lander-variableHeight my-4'>
      <section className='relative overflow-hidden w-full h-full bg-blue'>
        <PageHeader_TextBox
          primaryColor={'blue-dark'}
          header={header}
          accentColor={'blue'}
          subheader={subheader}
          subheaderColor={'cream'}
        />

        <div className='absolute w-full h-full flex flex-col justify-center'>
          <Lead color='cream' className='self-center text-center'>
            Loading...
          </Lead>
        </div>
      </section>
    </header>
  )
}

export default PageHeader_LoadingContent
