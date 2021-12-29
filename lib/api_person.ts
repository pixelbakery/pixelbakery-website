import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const peopleDirectory = join(process.cwd(), '_people')

export function getPeopleSlugs() {
  return fs.readdirSync(peopleDirectory)
}

export function getPersonBySlug(slug: string, fields: string[] = []) {
  console.log('debug')
  const realSlug = slug.replace(/\.md$/, '')
  console.log('real slug:', realSlug)
  console.log('debug2')
  const fullPath = join(peopleDirectory, `${realSlug}.md`)
  console.log('debug3')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  console.log('debug4')
  const { data, content } = matter(fileContents)
  console.log('debug5')

  type Items = {
    [key: string]: string
  }
  console.log('debug')
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
function shuffle(arr) {
  let j, x, index
  for (index = arr.length - 1; index > 0; index--) {
    j = Math.floor(Math.random() * (index + 1))
    x = arr[index]
    arr[index] = arr[j]
    arr[j] = x
  }
  return arr
}
export function getAllPeople(fields: string[] = []) {
  const slugs = getPeopleSlugs()
  const people = slugs.map((slug) => getPersonBySlug(slug, fields))
  shuffle(people)
  // sort people by date in descending order
  // .sort((person1, person2) => (person1.date > person2.date ? -1 : 1))
  return people
}
