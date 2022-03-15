import Link from 'next/link'

export default function FooterNav({ navitem }) {
  return (
    <li className=''>
      <Link href={navitem.url}>
        <a className='block text-cream cursor-pointer duration-200 ease-in-out hover:scale-98'>
          {navitem.text}
        </a>
      </Link>
    </li>
  )
}
