/* eslint-disable react/prop-types */

import Image from 'next/image'
import Link from 'next/link'
import Pill from '@parts/Pill'
import cn from 'classnames'
//PROPS:
// link={'/'} head={''} subhead={''} aspectW={''} aspectY={''} img={''} imgAlt={''} tags={["something", "something else"]} tagBgColor={"bg-cream"} tagTextColor={'text-wine'}

function CaseStudies_OtherProjects_Card({ project }) {
  return (
    <Link
      as={`/work/case-studies/${project.filePath.replace(/\.mdx?$/, '')}`}
      href={`/work/case-studies/[slug]`}
      passHref
    >
      <article
        className={cn(
          'bg-blue cursor-pointer rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-99',
          `aspect-w-4`,
          `aspect-h-3`,
        )}
      >
        <Image
          alt={project.data.client + ' ' + project.data.name + ' ' + project.data.tags[0]}
          src={`/img/work/${project.data.vimeoPreview}.jpg`}
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={`/img/work/${project.data.vimeoPreview}.jpg`}
          quality={33}
          className=''
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

          <div className=''>
            <div className='text-sm text-white'>{project.data.client}</div>
            <h3 className='text-2xl text-white'>{project.data.title}</h3>
          </div>
        </div>
      </article>
    </Link>
  )
}
export default CaseStudies_OtherProjects_Card
