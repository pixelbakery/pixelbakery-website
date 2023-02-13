import Image from 'next/image'
import Link from 'next/link'
import Pill from '@parts/Pill'
import cn from 'classnames'

function CaseStudies_OtherProjects_Card({ project }) {
  return (
    <div className='flex flex-col'>
      <Link
        as={`/work/case-studies/${project.filePath.replace(/\.mdx?$/, '')}`}
        href={`/work/case-studies/[slug]`}
        aria-label={`${project.data.client} - ${project.data.title}`}
      >
        <article
          className={cn(
            ' bg-blue cursor-pointer rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-99',
            `aspect-w-4`,
            `aspect-h-3`,
          )}
        >
          <Image
            alt={project.data.client + ' ' + project.data.title + ' ' + project.data.tags[0]}
            src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${project.data.vimeoPreview}.jpg`}
            width={854}
            height={480}
            className='object-cover object-center w-full h-full'
            placeholder='blur'
            blurDataURL={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${project.data.vimeoPreview}.jpg`}
            quality={35}
          />
          <div className={'absolute w-100 h-100 bg-gradient-to-r from-blue-dark  opacity-25'}></div>
          <div
            className={
              'absolute w-100 h-100 bg-gradient-to-t via-transparent from-blue-dark  opacity-25'
            }
          ></div>
          <div className=' z-20 h-100 p-6 flex flex-col justify-between'>
            <div className='-py-3 flex flex-wrap flex-row  gap-2'>
              {project.data.tags.slice(0, 1).map((tag) => (
                <Pill text={tag} bgColor={'blue'} textColor={'cream'} size='xs' key={tag} />
              ))}
            </div>
          </div>
        </article>
      </Link>
      <Link
        as={`/work/case-studies/${project.filePath.replace(/\.mdx?$/, '')}`}
        href={`/work/case-studies/[slug]`}
      >
        <div className='mt-4 cursor-pointer hover:scale-99 duration-300 ease-in-out'>
          <div className='text-sm text-blue-dark'>{project.data.client}</div>
          <h3 className='text-2xl text-blue-dark leading-none'>{project.data.title}</h3>
        </div>
      </Link>
    </div>
  )
}
export default CaseStudies_OtherProjects_Card
