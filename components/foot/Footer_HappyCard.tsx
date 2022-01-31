import happyItem from '@data/wordsOfEncouragement'
import { useState } from 'react'

export default function HappyCard() {
  const randomIndex = Math.floor(Math.random() * happyItem.length)
  const quote = happyItem[randomIndex].text

  const [happyCard] = useState(quote)

  return (
    <div suppressHydrationWarning>
      <p
        suppressHydrationWarning
        className='text-xl md:text-4xl leading-none lg:text-6xl italic font-black text-cream'
      >
        {happyCard}
      </p>
    </div>
  )
}
