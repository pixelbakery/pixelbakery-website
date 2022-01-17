import fs from 'fs'
import { join } from 'path'

const projectDirectory = join(process.cwd(), '/pages/work/projects')

export function getProjectSlugs() {
  return fs.readdirSync(projectDirectory)
}

export function getProjectBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.tsx$/, '')
  const fullPath = join(projectDirectory, `${realSlug}.tsx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const content = fileContents
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
  })

  return items
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getProjectSlugs()
  const projects = slugs.map((slug) => getProjectBySlug(slug, fields))
  // sort posts by date in descending order
  // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return projects
}
