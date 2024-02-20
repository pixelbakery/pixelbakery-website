import Link from 'next/link'
import { ChevronRightIcon } from 'components/icons/Icons_UI/index'
import Lead from '@typography/Lead'

type Props = {
  header: string
  subheader: string
  inpageLink: string
}
function ComponentName({ header, subheader, inpageLink }: Props) {
  return (
    <Link hrefLang={'en-US'} href={inpageLink} scroll={false}>
      <div className='px-6 lg:px-12 py-12 sm:py-14 h-20 my-3 md:my-4 cursor-pointer  border-2 lg:border-4 border-pink rounded-xl flex flex-col justify-center transition duration-400 ease-in-out transform hover:scale-101'>
        <Lead color={'pink'} className='mb-0 pb-0 lg:mb-0' noMargins={true}>
          {header}
        </Lead>
        <div className='flex flex-row w-full justify-between max-w-9/11'>
          <p className='flex-grow self-center text-wine-200 font-medium text-md lg:text-lg md:text-xl pt-0 my-0  pb-0 leading-none'>
            {subheader}
          </p>

          <i className='text-xl p-2 text-pink self-center'>
            <ChevronRightIcon />
          </i>
        </div>
      </div>
    </Link>
  )
}

export default ComponentName
