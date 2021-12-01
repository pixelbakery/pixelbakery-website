import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Link from 'next/link'
import socialLinks from '../../data/socialLinks'

export default function SocialLinks({ color }) {
  return (
    <div className='flex justify-between max-w-xs mx-auto px-8'>
      {socialLinks.map((social) => (
        <Link href={social.url} target='_blank' rel='noopener' key={social.name}>
          <a className={'mx-1 socialIcons ' + color}>
            <i className={'block bi ' + social.icon} role='img' aria-label='Vimeo'></i>
          </a>
        </Link>
      ))}
    </div>
  )
}
