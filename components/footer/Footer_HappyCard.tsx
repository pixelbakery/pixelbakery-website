import React from 'react'
import happyItem from '../../data/wordsOfEncouragement'

export default function HappyCard() {
  const randomQuote = () => {
    let randomIndex = Math.floor(Math.random() * happyItem.length)
    return happyItem[randomIndex].text
  }

  return (
    <div suppressHydrationWarning>
      <p suppressHydrationWarning className='text-6xl italic font-black text-cream'>
        {randomQuote()}
      </p>
    </div>
  )
}
