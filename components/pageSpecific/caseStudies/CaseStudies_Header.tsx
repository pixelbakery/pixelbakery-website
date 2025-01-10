import { H1 } from '@typography'
import { Pill } from '@parts'
import Link from 'next/link'
import { Video } from '@parts'
import { CaseStudyData } from '@/types/caseStudies'

interface CaseStudiesHeaderProps {
  client: CaseStudyData['client']
  website?: CaseStudyData['website']
  projectName: CaseStudyData['title']
  tags: CaseStudyData['tags']
  heroVideo?: CaseStudyData['vimeoID']
  poster?: string
}

function CaseStudies_Header({
  client,
  website,
  projectName,
  tags,
  heroVideo,
  poster,
}: CaseStudiesHeaderProps) {
  let videoPoster = undefined
  if (poster) {
    videoPoster = `/img/work/${poster}.jpg`
  }
  const preprocessHeroVideo = (heroVideo?: string) => {
    if (!heroVideo) return ''
    return /^\d+$/.test(heroVideo) ? `https://vimeo.com/${heroVideo}` : heroVideo
  }
  console.log('Prepended video: ', preprocessHeroVideo(heroVideo))
  return (
    <section
      className='relative px-6 pt-40 pb-12 my-4 lg:pb-24 md:px-8 pt-lg:pt-48 bg-cream'
      id='topOfPage'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='mb-6'>
          <H1 color='blue-dark' className='mb-4 2xl:mb-4 '>
            <Link hrefLang={'en-US'} href={`${website}`}>
              <div className='pb-0 mb-0 text-2xl font-extrabold text-pink'>{client} </div>
            </Link>

            {projectName}
          </H1>
          <div className='mt-12'>
            <div className='flex flex-row flex-wrap max-w-3xl gap-3 justify-left'>
              {tags.map((tag: string, index: number) => {
                return (
                  <Pill
                    key={tag}
                    text={tag.toString()}
                    bgColor={'blue'}
                    textColor={'egg'}
                    size={'sm'}
                    className={`${index > 2 ? 'hidden md:inline' : ''}`}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <div className='w-full mx-auto mt-20 2xl:px-24 max-w-8xl'>
        <div className='w-full aspect-w-16 aspect-h-9'>
          <Video
            url={preprocessHeroVideo(heroVideo)}
            autoPlay={false}
            poster={videoPoster}
            posterAsPlaceholderOnly={true}
            enableTracking={true}
            eventName='Case Studies Video Plays'
            title={`${projectName} for ${client}`}
          />
        </div>
      </div>
    </section>
  )
}
export default CaseStudies_Header
