import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const projectFilesDirectory = join(process.cwd(), '_projectFiles')

export function getProjectFilesSlugs() {
  return fs.readdirSync(projectFilesDirectory)
}

export function getProjectFileBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(projectFilesDirectory, `${realSlug}.mdx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllProjectFiles(fields: string[] = []) {
  const slugs = getProjectFilesSlugs()
  const projectFiles = slugs
    .map((slug) => getProjectFileBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return projectFiles
}
