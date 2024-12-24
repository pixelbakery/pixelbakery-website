import { services } from '@data'
import { H3 } from '@typography'
import { Footer_UI_SmallLinkList } from '@footer'

const Footer_Objects_ServicesNavigation = () => {
  return (
    <div className='hidden md:pr-4 lg:block'>
      <div className='hidden max-w-xs mx-auto mb-4 ml-0 border-b-4 lg:block border-cream md:pr-4'>
        <H3
          className='mt-0 text-3xl font-extrabold leading-none text-center md:text-left'
          color='cream'
        >
          Services
        </H3>
      </div>
      <nav className=''>
        <ul className='grid grid-cols-1 mt-3 mb-0 lg:grid-cols-1 w-fit align-center gap-y-2 gap-x-3'>
          {services
            .filter(
              (s) =>
                s.service !== 'Educational Content' &&
                s.service !== 'Creative Concepting & Strategy',
            )
            .map((navitem, i) => (
              <Footer_UI_SmallLinkList key={i} text={navitem.service} url={navitem.url} />
            ))}
        </ul>
      </nav>
    </div>
  )
}

export default Footer_Objects_ServicesNavigation
