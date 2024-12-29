import services from '@data/services'
import { H3 } from '@typography/index'
import Link from 'next/link'
interface ServicesLinksProps {
  update: () => void
}
const ServicesLinks = ({ update }: ServicesLinksProps) => {
  return (
    <div className='hidden pb-0 mt-4 mb-0 xl:pt-4 md:pr-4 lg:block'>
      <div className='hidden max-w-xs mx-auto mb-4 border-b-4 lg:block lg:mt-4 border-blue-dark md:pr-4'>
        <H3
          className='mt-0 text-3xl font-extrabold leading-none text-center md:text-left'
          color='blue-dark'
        >
          Services
        </H3>
      </div>
      <nav>
        <ul className='grid grid-cols-1 mt-3 mb-0 lg:grid-cols-1 w-fit align-center gap-y-2 gap-x-3'>
          {services
            .filter((s) => s.service !== 'Educational Content')
            .filter((s) => s.service !== 'Creative Concepting & Strategy')
            .map((service, i) => (
              <li
                key={i}
                className='relative py-0 my-0 leading-none text-left duration-100 ease-in-out origin-left cursor-pointer text-blue-dark text-md hover:scale-98 hover:opacity-95'
              >
                <Link
                  hrefLang='en-US'
                  href={service.url}
                  className='relative py-0 my-0 leading-none hover-98 hover-shadow-none'
                  onClick={update}
                >
                  {service.service}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  )
}

export default ServicesLinks
