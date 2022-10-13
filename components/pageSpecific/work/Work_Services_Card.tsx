import { ChevronRightIcon } from '@images/UI_Icons/index'
import Link from 'next/link'
type Props = {
  service: string
  url: string
}
export default function Work_Services_Card({ service, url }: Props) {
  return (
    <Link hrefLang={'en-US'} href={url} passHref>
      <a className='bg-egg overflow-hidden rounded-lg  w-full hover:scale-99 cursor-pointer px-8 py-2  h-24 sm:h-28 xl:h-32 duration-300  ease-in-outdrop-shadow-md hover:drop-shadow-sm'>
        <div className='  flex flex-row  justify-between gap-4 h-full'>
          <div className='self-center'>
            <h3 className=' my-1 md:my-3 font-semibold lg:font-bold text-lg leading-none xl:text-2xl font-Heading text-blue'>
              {service}
            </h3>
          </div>
          <div className='self-center -mb-1'>
            <i className=' '>
              <ChevronRightIcon className=' h-10 w-10 lg:h-12 lg:w-12 text-blue-dark ml-auto' />
            </i>
          </div>
        </div>
      </a>
    </Link>
  )
}
