import happyItem from '@data/wordsOfEncouragement'
import { useState } from 'react'
import { RandomArrayItem } from '@lib/helpers'
export default function HappyCard() {
  const randomIndex = RandomArrayItem(happyItem.length)
  const quote = happyItem[randomIndex].text

  const [happyCard] = useState(quote)

  return (
    <div suppressHydrationWarning>
      <p
        suppressHydrationWarning
        className='text-xl md:text-4xl leading-none xl:text-6xl italic font-black text-cream py-0 my-0'
      >
        {happyCard}
      </p>
    </div>
  )
}
