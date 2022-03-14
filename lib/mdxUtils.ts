import fs from 'fs'
import path from 'path'

// POSTS
// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), '_posts')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path))

// JOBS

export const JOBS_PATH = path.join(process.cwd(), '_jobs')
export const jobFilePaths = fs.readdirSync(JOBS_PATH).filter((path) => /\.mdx?$/.test(path))

// CASE STUDIES

export const CASESTUDIES_PATH = path.join(process.cwd(), '_caseStudies')
export const caseStudyFilePaths = fs
  .readdirSync(CASESTUDIES_PATH)
  .filter((path) => /\.mdx?$/.test(path))
