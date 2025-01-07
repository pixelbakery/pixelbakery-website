import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import { Pill } from '@parts'

interface ProjectData {
  client: string
  title: string
  tags: string[]
  vimeoPreview: string
}

interface Project {
  filePath: string
  data: ProjectData
}

interface Props {
  project: Project
}

function CaseStudies_OtherProjects_Card({ project }: Props) {
  return (
    <div className='flex flex-col'>
      <Link
        as={`/work/case-studies/${project.filePath.replace(/\.mdx?$/, '')}`}
        href={`/work/case-studies/[slug]`}
        aria-label={`${project.data.client} - ${project.data.title}`}
      >
        <article
          className={cn(
            'bg-blue cursor-pointer rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-99',
            `aspect-w-4`,
            `aspect-h-3`,
          )}
        >
          <Image
            alt={`${project.data.client} ${project.data.title} ${project.data.tags[0]}`}
            src={`/img/work/${project.data.vimeoPreview}.jpg`}
            width={854}
            height={480}
            className='object-cover object-center w-full h-full'
            placeholder='blur'
            blurDataURL={`/img/work/${project.data.vimeoPreview}.jpg`}
            quality={35}
          />
          <div className='absolute opacity-25 w-100 h-100 bg-gradient-to-r from-blue-dark'></div>
          <div className='absolute opacity-25 w-100 h-100 bg-gradient-to-t via-transparent from-blue-dark'></div>
          <div className='z-20 flex flex-col justify-between p-6 h-100'>
            <div className='flex flex-row flex-wrap gap-2 -py-3'>
              {project.data.tags.slice(0, 1).map((tag) => (
                <Pill text={tag} bgColor='blue' textColor='cream' size='xs' key={tag} />
              ))}
            </div>
          </div>
        </article>
      </Link>
      <Link
        as={`/work/case-studies/${project.filePath.replace(/\.mdx?$/, '')}`}
        href={`/work/case-studies/[slug]`}
      >
        <div className='mt-4 duration-300 ease-in-out cursor-pointer hover:scale-99'>
          <div className='text-sm text-blue-dark'>{project.data.client}</div>
          <h3 className='text-2xl leading-none text-blue-dark'>{project.data.title}</h3>
        </div>
      </Link>
    </div>
  )
}

export default CaseStudies_OtherProjects_Card
