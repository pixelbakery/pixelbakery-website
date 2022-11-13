import Link from 'next/link'
import { ChevronRightIcon } from '@images/UI_Icons/index'

function BackLink({ text, href }) {
  return (
    <Link
      hrefLang={'en-US'}
      href={href}
      passHref
      className='mt-0 -mb-2 py-0 text-blue font-extrabold text-lg  border-b-2 w-max inline-flex cursor-pointer hover:scale-99 duration-200 ease-in-out'
      legacyBehavior>

        <i className='-ml-2 mx-0 px-0 self-center h-8 w-8 flex flex-col justify-center rotate-180 text-blue '>
          <ChevronRightIcon />
        </i>
        <span className='self-center pr-2'>{text}</span>

      </Link>
  );
}
export default BackLink
