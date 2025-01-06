import Link from 'next/link'
import { ChevronRightIcon } from '@icons'
import { Lead } from '@typography'

type Props = {
  header: string
  subheader: string
  inpageLink: string
}
function ComponentName({ header, subheader, inpageLink }: Props) {
  return (
    <Link hrefLang={'en-US'} href={inpageLink} scroll={false}>
      <div className='flex flex-col justify-center h-20 px-6 py-12 my-3 transition ease-in-out transform border-2 cursor-pointer lg:px-12 sm:py-14 md:my-4 lg:border-4 border-pink rounded-xl duration-400 hover:scale-101'>
        <Lead color={'pink'} className='pb-0 mb-0 lg:mb-0' noMargins={true}>
          {header}
        </Lead>
        <div className='flex flex-row justify-between w-full max-w-9/11'>
          <p className='self-center flex-grow pt-0 pb-0 my-0 font-medium leading-none text-wine-200 text-md lg:text-lg md:text-xl'>
            {subheader}
          </p>

          <i className='self-center p-2 text-xl text-pink'>
            <ChevronRightIcon />
          </i>
        </div>
      </div>
    </Link>
  )
}

export default ComponentName
