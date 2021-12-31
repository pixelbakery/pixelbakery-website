import React from 'react'
import happyItem from '../../data/wordsOfEncouragement'

export default function HappyCard() {
  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * happyItem.length)
    return happyItem[randomIndex].text
  }

  return (
    <div suppressHydrationWarning>
      <p suppressHydrationWarning className='text-4xl lg:text-6xl italic font-black text-cream'>
        {randomQuote()}
      </p>
    </div>
  )
}
