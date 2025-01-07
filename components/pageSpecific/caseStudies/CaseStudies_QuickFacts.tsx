/* CaseStudies_QuickFacts.tsx */

import Link from 'next/link'
import { NorthEastArrowIcon, ChevronRightIcon } from '@icons'
import { PageSection, InnerWrapper } from '@parts'
import { H2, H3 } from '@typography'
import cn from 'classnames'

interface QuickFactsProps {
  client: string
  website?: string
  quickfacts?: {
    awards?: string[]
    service_types?: string[]
    industry?: string
  }
}

export default function CaseStudies_QuickFacts({ client, website, quickfacts }: QuickFactsProps) {
  // 1. Prepare Industry Data
  // 'id': { emoji, label, link }
  const INDUSTRIES: Record<string, { emoji: string; label: string; link?: string }> = {
    corporate: {
      emoji: '🏢',
      label: 'Corporate & Retail',
      link: '/industries/corporate-video-production',
    },
    cpg: {
      emoji: '🧃',
      label: 'Consumer Packaged Goods',
      link: '/industries/cpg-video-production',
    },
    nonprofit: {
      emoji: '❤️',
      label: 'Non-Profit & Government',
      link: '/industries/nonprofit-video',
    },
    education: {
      emoji: '📚',
      label: 'Education & Learning',
      link: '/industries/education-video-production',
    },
    advertising: {
      emoji: '🖊️',
      label: 'Advertising/Production Agency',
      link: '/industries/agency-video-production',
    },
    tech: {
      emoji: '💻',
      label: 'Saas & Tech Industry',
      link: '/industries/saas-video-production',
    },
    other: {
      emoji: '❓',
      label: 'Other',
    },
  }

  // 2. Prepare Service Data
  // 'id': { emoji, label, link? }
  const SERVICES: Record<string, { emoji: string; label: string; link?: string }> = {
    'motion-design': {
      emoji: '🎞️',
      label: 'Animation & Motion Design',
      link: '/services/animation',
    },
    'video-production': {
      emoji: '🎥',
      label: 'Commercial Video Production',
      link: '/services/video-production',
    },
    'explainer-videos': {
      emoji: '💡',
      label: 'Animated Explainer Videos',
      link: '/services/animated-explainer-videos',
    },
    'product-photography': {
      emoji: '📸',
      label: 'Product Photography',
      link: '/services/product-photography',
    },
    'logo-animation': {
      emoji: '🚀',
      label: 'Logo Animation',
      link: '/services/logo-animation',
    },
    'creative-concepting': {
      emoji: '🧠',
      label: 'Creative Concepting & Strategy',
      link: '/services/creative-strategy',
    },
    'social-media': {
      emoji: '📱',
      label: 'Social Media Video Content',
      link: '/services/social-media',
    },
    'emerging-media': {
      emoji: '🌐',
      label: 'Emerging Media',
      link: '/services/emerging-media',
    },
    other: {
      emoji: '❓',
      label: 'Other',
    },
  }

  const industryID = quickfacts?.industry || 'other'
  const industryEntry = INDUSTRIES[industryID] || INDUSTRIES['other']

  const serviceTypes = quickfacts?.service_types || []

  // Awards array
  const awardsList = quickfacts?.awards || []

  return (
    <PageSection
      color='blue'
      className='px-6 py-12 md:px-8 2xl:px-12'
      id={'quick-facts'}
      disableSpacing
    >
      <InnerWrapper>
        <H2 noMargins color='cream'>
          Quick Facts
        </H2>
        <div className='grid w-full grid-cols-6 xl:grid-cols-7 gap-y-8 gap-x-8 lg:gap-x-12 xl:gap-x-16 '>
          {/* CLIENT */}
          {client && (
            <div className='col-span-6 sm:col-span-3 lg:col-span-3 xl:col-span-2 2xl:col-span-2'>
              <H3 className='text-lg uppercase lg:mb-4' color='cream' overrideSizes>
                Client
              </H3>
              {website ? (
                <Link
                  href={website}
                  target='_blank'
                  className='w-full py-2 text-lg duration-300 ease-in-out opacity-100 text-wrap lg:text-xl font-geologica hover:opacity-50 text-blue-darker'
                >
                  <span className='inline-block'>
                    {client} <NorthEastArrowIcon className='inline ml-1' />
                  </span>
                </Link>
              ) : (
                <p className='py-2 text-2xl font-geologica text-blue-darker'>{client}</p>
              )}
            </div>
          )}

          {/* INDUSTRY */}
          {industryEntry && (
            <div className='col-span-6 sm:col-span-3 lg:col-span-3 xl:col-span-2'>
              <H3 className='text-lg uppercase lg:mb-4' color='cream' overrideSizes>
                Industry
              </H3>
              {industryEntry.link ? (
                <Link
                  href={industryEntry.link}
                  className='flex flex-row justify-start max-w-lg py-2 text-lg duration-300 ease-in-out lg:text-xl xl:justify-between font-geologica hover:opacity-60 text-blue-darker'
                >
                  <span className='hidden pr-2 md:block text-blue-darker'>{industryEntry.emoji}</span>
                  <span className='flex-grow inline text-blue-darker'> {industryEntry.label}</span>
                  <span className='self-center inline ml-1 text-sm leading-tight lg:-mb-1 lg:ml-0 justify-self-start text-blue-darker'>
                    <ChevronRightIcon />
                  </span>
                </Link>
              ) : (
                <p className='py-2 text-xl font-geologica text-blue-darker'>
                  {industryEntry.emoji} {industryEntry.label}
                </p>
              )}
            </div>
          )}

          {/* SERVICES */}
          {serviceTypes.length > 0 && (
            <div className='col-span-6 md:col-span-3 xl:col-span-3 2xl:pl-12 '>
              <H3 className='text-lg uppercase lg:mb-4' color='cream' overrideSizes>
                Service(s)
              </H3>
              <ul
                className={cn(
                  'justify-between w-full flex flex-col py-2 my-0 text-lg lg:text-xl list-none list-outside divide-y divide-solid divide-blue-darker font-geologica text-blue-darker',
                )}
              >
                {serviceTypes.map((serviceID) => {
                  const srv = SERVICES[serviceID] || SERVICES['other']
                  return (
                    <li
                      key={serviceID}
                      className='w-full pt-1 mb-1 lg:pt-3 lg:mb-3 first:pt-0 last:mb-0 text-blue-darker'
                    >
                      {srv.link ? (
                        <Link
                          href={srv.link}
                          className='flex flex-row justify-between w-full my-0 duration-300 ease-in-out hover:opacity-60 text-blue-darker'
                        >
                          <span className='hidden mr-2 md:block text-blue-darker'>{srv.emoji}</span>
                          <span className='flex-grow inline text-blue-darker'> {srv.label}</span>
                          <span className='self-center text-sm justify-self-end place-self-end text-blue-darker'>
                            <ChevronRightIcon />
                          </span>
                        </Link>
                      ) : (
                        <span className='flex flex-row align-start gap-x-4 lg:gap-x-12 text-blue-darker'>
                          {srv.emoji} {srv.label}
                        </span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
          {/* AWARDS */}
          {awardsList.length > 0 && (
            <div className='col-span-6 space-y-1 xl:col-span-7 '>
              <H3 className='text-lg uppercase lg:mb-4' color='cream' overrideSizes>
                Awards
              </H3>
              <ul
                className={cn(
                  'w-full flex flex-col py-0 my-0 text-xl list-none list-outside divide-y divide-solid divide-blue-darker font-geologica text-blue-darker',
                )}
              >
                {awardsList.map((award, idx) => (
                  <li key={idx} className='w-full pt-1 mb-1 lg:pt-3 lg:mb-3 first:pt-0 last:mb-0 text-blue-darker'>
                    {award}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
