import { ChevronRightIcon } from 'components/icons/Icons_UI/index'
import { H3 } from '@typography'
import Link from 'next/link'
type Props = {
  service: string
  url: string
}
export default function Work_Services_Card({ service, url }: Props) {
  return (
    <Link hrefLang={'en-US'} href={url}>
      <div className='w-full h-24 px-8 py-2 overflow-hidden duration-300 rounded-lg cursor-pointer bg-egg hover:scale-99 sm:h-28 xl:h-32 ease-in-outdrop-shadow-md hover:drop-shadow-sm'>
        <div className='flex flex-row justify-between h-full gap-4 '>
          <div className='self-center'>
            <span className='my-1 text-lg font-semibold leading-none md:my-3 lg:font-bold xl:text-2xl font-Heading text-blue'>
              {service}
            </span>
          </div>
          <div className='self-center -mb-1'>
            <i className=''>
              <ChevronRightIcon className='w-4 h-4 ml-auto lg:h-8 lg:w-8 text-blue-dark' />
            </i>
          </div>
        </div>
      </div>
    </Link>
  )
}
