import Pill from '@parts/Pill'
import Link from 'next/link'
import Image from 'next/image'
import PropTypes from 'prop-types'
import cn from 'classnames'
Home_Portfolio_Card.propTypes = {
  bgColor: PropTypes.string,
  bgPosition: PropTypes.string,
  client: PropTypes.string,
  title: PropTypes.string,
  tags: PropTypes.array,
  description: PropTypes.string,
  previewImg: PropTypes.string,
  link: PropTypes.string,
  video: PropTypes.string,
}
function Home_Portfolio_Card({ bgColor, bgPosition, project }) {
  return (
    <article className='w-full  lg:w-3/5 2xl:w-full px-1'>
      <div
        className={cn('relative home-portfolio aspect-w-16 aspect-h-9 z-10', bgColor, bgPosition)}
      >
        <div className='absolute w-full h-full rounded overflow-hidden'>
          <Link
            as={`/work/case-studies/${project.filePath.replace(/\.mdx?$/, '')}`}
            href={`/work/case-studies/[slug]`}
            passHref
          >
            <a className='cursor-pointer'>
              <video
                muted
                playsInline
                preload='true'
                loop
                autoPlay={true}
                poster={`https://cdn.pixelbakery.com/img/work/${project.data.vimeoPreview}.jpg`}
                className='object-cover w-full h-full'
              >
                <source src={`/img/work/${project.data.vimeoPreview}.webm`} type='video/webm' />

                <source src={`/img/work/${project.data.vimeoPreview}.mp4`} type='video/mp4' />
              </video>
            </a>
          </Link>
        </div>
      </div>
      <Link
        as={`/work/case-studies/${project.filePath.replace(/\.mdx?$/, '')}`}
        href={`/work/case-studies/[slug]`}
        passHref
      >
        <div className='mt-6 pt-4 lg:mt-12 cursor-pointer'>
          <h3 className='text-pink text-2xl font-bold mb-0 pb-0 leading-none'>
            {project.data.client}
          </h3>
          <h4 className='text-wine font-extrabold text-4xl lg:text-6xl leading-none mt-0 pt-0'>
            {project.data.title}
          </h4>
          <p className='text-wine opacity-60 text-md font-semibold lg:font-bold lg:w-2/3 leading-snug pt-6 pb-2'>
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
    </article>
  )
}
export default Home_Portfolio_Card
