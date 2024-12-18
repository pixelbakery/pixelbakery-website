'use client'

import React, { useState, useEffect } from 'react'

/**
 * Type definition for words of encouragement.
 * @typedef {Object} Encouragement
 * @property {string} text - The text of the encouragement.
 */

type Encouragement = {
  text: string
}

const fallbackWord: Encouragement = { text: '🖖 live long and prosper' }

const HappyCard = () => {
  const [word, setWord] = useState<Encouragement | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchRandomWord()
  }, [])

  const fetchRandomWord = async () => {
    try {
      const response = await fetch('/api/words')
      if (!response.ok) throw new Error('Network response was not ok')

      const data = await response.json()
      setWord(data) // API always returns a single word
    } catch (error) {
      console.error('Error fetching random word:', error)
      setWord(fallbackWord) // Set fallback word on error
      setError(null) // Clear error since fallback is provided
    }
  }

  return (
    <div className='my-0 text-xl italic font-bold leading-none md:text-4xl xl:text-6xl md:font-extrabold text-cream md:py-0'>
      {error ? error : word ? word.text : 'Loading...'}
    </div>
  )
}

export default HappyCard
