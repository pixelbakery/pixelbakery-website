import next from 'next'
import Link from 'next/link'
import { ChevronRightIcon } from '@images/UI_Icons/index'
import H3 from '@typography/H3'
import Lead from '@typography/Lead'

type Props = {
  header: string
  subheader: string
  inpageLink: string
}
function ComponentName({ header, subheader, inpageLink }: Props) {
  return (
    <Link href={inpageLink} scroll={false} passHref>
      <div className='px-6 lg:px-12 py-12 sm:py-14 h-20 my-3 md:my-4 cursor-pointer  border-2 border-pink rounded-xl flex flex-col justify-center transition duration-400 ease-in-out transform hover:scale-101'>
        <Lead color={'pink'} className='mb-0 pb-0 lg:mb-0'>
          {header}
        </Lead>
        <div className='flex flex-row w-full justify-between max-w-9/11'>
          <p className='self-center text-wine-200 font-medium text-md lg:text-lg md:text-xl pt-0 my-0  pb-0 leading-none'>
            {subheader}
          </p>

          <ChevronRightIcon className='-mr-4 md:mr-0 -mb-1 lg:-mb-2 mt-0 py-0 w-8 h-8 md:w-12 md:h-12 text-pink mx-1 self-center justify-self-end' />
        </div>
      </div>
    </Link>
  )
}

export default ComponentName
