// /pages/api/words.ts

import { NextApiRequest, NextApiResponse } from 'next'
import wordsOfEncouragement from '@data/wordsOfEncouragement'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const randomIndex = Math.floor(Math.random() * wordsOfEncouragement.length)
    const randomWord = wordsOfEncouragement[randomIndex]

    res.status(200).json(randomWord)
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve a word of encouragement' })
  }
}
