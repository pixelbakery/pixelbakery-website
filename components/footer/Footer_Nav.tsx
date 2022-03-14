import Link from 'next/link'

export default function FooterNav({ navitem }) {
  return (
    <li className=''>
      <Link href={navitem.url}>
        <a className='text-cream'>{navitem.text}</a>
      </Link>
    </li>
  )
}
