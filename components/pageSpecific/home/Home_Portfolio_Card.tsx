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
const Home_Portfolio_Card = ({ bgColor, bgPosition, project }: Props) => {
  const datePostedISO = new Date(project.data.date).toISOString()

  return (
    <article className='w-full  lg:w-3/5 2xl:w-full px-1'>
      <div
        className={cn(
          'relative home-portfolio rounded-md  aspect-w-16 aspect-h-9 z-10',
          bgColor,
          bgPosition,
        )}
      >
        <div className='absolute block w-full h-full rounded-md overflow-hidden'>
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
              poster={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${project.data.vimeoPreview}.jpg`}
              className='block relative object-cover w-full h-full scale-101 shadow-xl overflow-hidden'
            >
              <source
                src={`${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/work/${project.data.vimeoPreview}.mp4`}
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
        <div className='mt-6 pt-4 lg:mt-12 cursor-pointer'>
          <span className='text-pink text-2xl font-bold mb-0 pb-0 leading-none'>
            {project.data.client}
          </span>
          <H3 className='text-wine'>{project.data.title}</H3>
          <p className='text-wine opacity-60 text-md font-medium lg:w-2/3 leading-snug pt-2 pb-2'>
            {project.data.excerpt}
          </p>
          <div className='flex justify-start gap-2 flex-wrap mt-6'>
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
