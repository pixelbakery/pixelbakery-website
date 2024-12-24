import Link from 'next/link'

interface FooterUISmallListProps {
  url: string
  text?: string
}
const Footer_UI_SmallList = ({ url, text }: FooterUISmallListProps) => {
  return (
    <li className='relative py-0 my-0 leading-none text-center duration-100 ease-in-out origin-left cursor-pointer lg:text-left text-cream text-md hover:scale-98 hover:opacity-95'>
      <Link
        hrefLang={'en-US'}
        href={url}
        className='relative py-0 my-0 leading-none hover-98 hover-shadow-none'
      >
        {text}
      </Link>
    </li>
  )
}

export default Footer_UI_SmallList
