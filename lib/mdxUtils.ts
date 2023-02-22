import fs from 'fs'
import path from 'path'

// POSTS
export const POSTS_PATH = path.join(process.cwd(), '_posts')
export const postFilePaths = fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path))

// JOBS
export const JOBS_PATH = path.join(process.cwd(), '_jobs')
export const jobFilePaths = fs.readdirSync(JOBS_PATH).filter((path) => /\.mdx?$/.test(path))

// CASE STUDIES
export const CASESTUDIES_PATH = path.join(process.cwd(), '_caseStudies')
export const caseStudyFilePaths = fs
  .readdirSync(CASESTUDIES_PATH)
  .filter((path) => /\.mdx?$/.test(path))

//MADE TO ORDER TUTORIALS
export const MADETOORDER_PATH = path.join(process.cwd(), '_madeToOrder')
export const madeToOrderFilePaths = fs
  .readdirSync(MADETOORDER_PATH)
  .filter((path) => /\.mdx?$/.test(path))

//PEOPLE (Team Bios)
export const PEOPLE_PATH = path.join(process.cwd(), '_people')
export const peopleFilePaths = fs.readdirSync(PEOPLE_PATH).filter((path) => /\.mdx?$/.test(path))

//PROJECT FILES
export const PROJECTFILE_PATH = path.join(process.cwd(), '_projectFiles')
export const projectFilesFilePaths = fs
  .readdirSync(PROJECTFILE_PATH)
  .filter((path) => /\.mdx?$/.test(path))
