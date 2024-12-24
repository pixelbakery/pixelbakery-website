import Link from 'next/link'

interface SmallLinkItem {
  url: string
  text: string
}

interface FooterUISmallListProps {
  navitem: SmallLinkItem
  i?: number
}

export default function Footer_UI_LargeLinkList({ navitem, i }: FooterUISmallListProps) {
  return (
    <li key={i}>
      <Link
        hrefLang={'en-US'}
        href={navitem.url}
        className='block text-center duration-200 ease-in-out cursor-pointer font-geologica text-cream hover:scale-98 lg:text-left'
      >
        {navitem.text}
      </Link>
    </li>
  )
}
