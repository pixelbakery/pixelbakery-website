/*!
 * reading-time
 * Copyright (c) Nicolas Gryman <ngryman@gmail.com>
 * MIT Licensed
 */

type Options = {
  wordBound?: (char: string) => boolean
  wordsPerMinute?: number
}

type ReadingTimeStats = {
  time: number // Time in milliseconds
  minutes: number // Rounded minutes
  text: string // Formatted time, e.g., "2 min read"
}

type WordCountStats = {
  total: number // Total word count
  text: string // Formatted word count
}

type ReadingTimeResult = ReadingTimeStats & {
  words: WordCountStats
}

type WordBoundFunction = (char: string) => boolean

// Utility to check if a character code is within specified ranges
function codeIsInRanges(number: number, ranges: [number, number][]): boolean {
  return ranges.some(([start, end]) => number >= start && number <= end)
}

// Determines if a character is CJK
const isCJK: WordBoundFunction = (char) => {
  if (!char) return false
  const charCode = char.charCodeAt(0)
  return codeIsInRanges(charCode, [
    [0x3040, 0x309f], // Hiragana
    [0x4e00, 0x9fff], // CJK Unified Ideographs
    [0xac00, 0xd7a3], // Hangul
    [0x20000, 0x2ebe0], // CJK Extensions
  ])
}

// Determines if a character is a word boundary (ANSI standard)
const isAnsiWordBound: WordBoundFunction = (char) => ' \n\r\t'.includes(char)

// Counts the number of words in a given text
function countWords(text: string, options: Options = {}): WordCountStats {
  let words = 0
  const { wordBound = isAnsiWordBound } = options

  // Normalize text and add a trailing word boundary
  const normalizedText = `${text}\n`
  let start = 0

  while (start < normalizedText.length) {
    // Skip non-word characters
    while (start < normalizedText.length && wordBound(normalizedText[start])) {
      start++
    }

    // Count words
    if (
      start < normalizedText.length &&
      (isCJK(normalizedText[start]) || !wordBound(normalizedText[start]))
    ) {
      words++
    }

    // Move to the next potential word
    while (
      start < normalizedText.length &&
      !wordBound(normalizedText[start]) &&
      !isCJK(normalizedText[start])
    ) {
      start++
    }
  }

  return {
    total: words,
    text: `${words} words`,
  }
}

// Calculates reading time based on word count
function readingTimeWithCount(words: WordCountStats, options: Options = {}): ReadingTimeStats {
  const { wordsPerMinute = 200 } = options
  const minutes = words.total / wordsPerMinute
  const time = Math.ceil(minutes * 60 * 1000)

  return {
    minutes: Math.ceil(minutes),
    time,
    text: `${Math.ceil(minutes)} min read`,
  }
}

// Main function to calculate reading time
export default function readingTime(text: string, options: Options = {}): ReadingTimeResult {
  const words = countWords(text, options)
  const stats = readingTimeWithCount(words, options)

  return {
    ...stats,
    words,
  }
}
