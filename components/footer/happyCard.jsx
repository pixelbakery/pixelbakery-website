import React from 'react'

export default function HappyCard({ happyitem }) {
  let len = happyitem.length
  let randItem = Math.floor(Math.random() * len)
  return (
    <div>
      <p className='text-6xl italic font-black text-cream'>{happyitem[randItem].text}</p>
    </div>
  )
}
