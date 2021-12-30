import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const projectDirectory = join(process.cwd(), '_projects')

export function getProjectSlugs() {
  console.log(fs.readdirSync(projectDirectory))
  return fs.readdirSync(projectDirectory)
}

export function getProjectBySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.tsx$/, '')
  const fullPath = join(projectDirectory, `${realSlug}.tsx`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  // console.log(fileContents)
  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
      console.log('field slug', realSlug)
    }
    if (field === 'content') {
      items[field] = content
      console.log('field content', content)
    }

    if (typeof data[field] !== 'undefined') {
      console.log('field undefined')

      items[field] = data[field]
    }
  })

  return items
}

export function getAllProjects(fields: string[] = []) {
  const slugs = getProjectSlugs()
  console.log(slugs)
  const projects = slugs.map((slug) => getProjectBySlug(slug, fields))
  // sort posts by date in descending order
  // .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return projects
}
