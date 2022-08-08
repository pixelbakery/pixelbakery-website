import { ChevronRightIcon } from '@images/UI_Icons/index'
import Link from 'next/link'

function Services_AllServices_Card({ service }) {
  return (
    <Link href={service.url} passHref>
      <article className='cursor-pointer border-4 border-pink overflow-hidden rounded-lg  w-full hover:opacity-90 hover:scale-98 duration-300 flex flex-row'>
        <div className='flex-grow flex flex-col justify-center px-8 py-2 h-32 xl:h-40'>
          <h4 className='my-auto md:mt-2 md:mb-4 font-bold text-xl font-Heading text-pink'>
            {service.service}
          </h4>
        </div>
        <div className='self-center lg:self-end p-2'>
          <i className=' '>
            <ChevronRightIcon className=' h-12 w-12 text-pink ml-auto' />
          </i>
        </div>
      </article>
    </Link>

    // <a href="#" className="">
    //     <article className="w-1/2 flex flex-col bg-pink-light rounded-lg text-pink" id="serviceAnimation">
    //         <h3 className="flex-grow">{service.service}</h3>
    //     </article>
    // </a>
  )
}
export default Services_AllServices_Card
