import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from 'next/link'
import socialLinks from '../../data/socialLinks'

function SocialLinks({ color }) {
  return (
    <div className='flex justify-between max-w-xs mx-auto px-8'>
      {socialLinks.map((social) => (
        <Link href={social.url} key={social.name} passHref>
          <a className={'mx-1 socialIcons ' + color} target='_blank' rel='noopener'>
            <i className={'block bi ' + social.icon} role='img' aria-label={social.name}></i>
          </a>
        </Link>
      ))}
    </div>
  )
}
export default SocialLinks
