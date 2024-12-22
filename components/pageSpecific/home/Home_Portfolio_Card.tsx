import Pill from '@parts/Pill'
import Link from 'next/link'

import cn from 'classnames'
import H3 from '@typography/H3'
import { VideoJsonLd } from 'next-seo'

interface Props {
  bgColor: string
  bgPosition: string
  project: any
}
const IMAGE_PREFIX = process.env.NEXT_PUBLIC_IMG_PREFIX || ''
const Home_Portfolio_Card = ({ bgColor, bgPosition, project }: Props) => {
  const datePostedISO = new Date(project.data.date).toISOString()

  return (
    <article className='w-full px-1 lg:w-3/5 2xl:w-full'>
      <div
        className={cn(
          'relative home-portfolio rounded-md  aspect-w-16 aspect-h-9 z-10',
          bgColor,
          bgPosition,
        )}
      >
        <div className='absolute block w-full h-full overflow-hidden rounded-md'>
          <Link
            as={`/work/case-studies/${project.filePath.replace(/\.mdx?$/, '')}`}
            href={`/work/case-studies/[slug]`}
            hrefLang={'en-US'}
            className='cursor-pointer'
            aria-label={project.data.title}
          >
            <video
              muted
              playsInline
              preload='true'
              loop
              autoPlay={true}
              poster={`${IMAGE_PREFIX}/img/work/${project.data.vimeoPreview}.jpg`}
              className='relative block object-cover w-full h-full overflow-hidden shadow-xl scale-101'
            >
              <source
                src={`${IMAGE_PREFIX}/img/work/${project.data.vimeoPreview}.mp4`}
                type='video/mp4'
              />
            </video>
          </Link>
        </div>
      </div>
      <Link
        as={`/work/case-studies/${project.filePath.replace(/\.mdx?$/, '')}`}
        href={`/work/case-studies/[slug]`}
      >
        <div className='pt-4 mt-6 cursor-pointer lg:mt-12'>
          <span className='pb-0 mb-0 text-2xl font-bold leading-none text-pink'>
            {project.data.client}
          </span>
          <H3 className='text-wine'>{project.data.title}</H3>
          <p className='pt-2 pb-2 font-medium leading-snug text-wine opacity-60 text-md lg:w-2/3'>
            {project.data.excerpt}
          </p>
          <div className='flex flex-wrap justify-start gap-2 mt-6'>
            {Object.entries(project.data.tags)
              .slice(0, 3)
              .map(([index, tag]) => {
                return (
                  <Pill
                    key={index}
                    text={tag as string}
                    bgColor={'blue'}
                    textColor={'cream'}
                    size={'sm'}
                  />
                )
              })}
          </div>
        </div>
      </Link>
      <VideoJsonLd
        name={`${project.data.client}: ${project.data.title}`}
        description={project.data.excerpt}
        embedUrl={`http://player.vimeo.com/video/${project.data.vimeoID}`}
        uploadDate={`${datePostedISO}`}
        thumbnailUrls={[
          `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${project.data.vimeoPreview}.jpg`,
        ]}
      />
    </article>
  )
}
export default Home_Portfolio_Card
