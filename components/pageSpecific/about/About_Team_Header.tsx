import { InnerWrapper, PageSection } from '@parts'
import { H1, Lead } from '@typography'

import { MDXRemote } from 'next-mdx-remote'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { SocialIcon } from '@SocialIcons/SocialIcon'
import Image from 'next/image'
import Head from 'next/head'
import { Shimmer } from '@lib'
import { Person } from '@/types/people'
import markdownStyles from '@styles/markdown-styles.module.css'
import { Loading } from '@utility'
import Link from 'next/link'


interface AboutTeamHeaderProps {
  source: MDXRemoteSerializeResult
  frontMatter: Pick<
    Person,
    'name' | 'title' | 'headshotFun' | 'email' | 'phone' | 'socials'
  >
}

const About_Team_Header = ({ source, frontMatter }: AboutTeamHeaderProps) => {
  const socialList = frontMatter.socials

  const components = {
    Head,
  }
  // const ImgPrefix = process.env.NEXT_PUBLIC_IMG_PREFIX
  return (
    <PageSection color='cream' id={'bio-header'}>
      <InnerWrapper className='mt-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-12 xl:gap-x-24 gap-y-8'>
          <div className='relative w-full col-span-1 aspect-3/4'>
            <div className='relative max-w-lg aspect-w-3 aspect-h-4'>
              <Image
                placeholder='blur'
                width={1280}
                height={1920}
                blurDataURL={`${Shimmer(1280, 1920)}`}
                src={`${frontMatter.headshotFun}`}
                className={'object-cover w-full h-full'}
                alt={`${frontMatter.name}, ${frontMatter.title} at Pixel Bakery Design Studio`}
              />
            </div>
            <Loading />
          </div>
          <div className='col-span-1'>
            <div>
              <H1 color='blue' className='pb-0 mb-2 2xl:mb-2'>
                {frontMatter.name}
              </H1>
              <Lead color='wine' className='pb-0 mb-2 lg:mb-4'>
                {frontMatter.title}
              </Lead>
            </div>
            <div className='pb-8'>
              {frontMatter.email ? (
                <Link
                  href={`mailto:${frontMatter.email}`}
                  className={'block italic text-peach cursor-pointer text-left'}
                >
                  {frontMatter.email}
                </Link>
              ) : (
                ''
              )}
              {frontMatter.phone ? (
                <a
                  href={`tel:${frontMatter.phone}`}
                  className='block italic cursor-pointer text-peach'
                >
                  {frontMatter.phone}
                </a>
              ) : (
                ''
              )}
            </div>
            <div className={markdownStyles['markdown']}>
              <MDXRemote {...source} components={components} />
            </div>
            {socialList != undefined ? (
              <div className='flex flex-row justify-start gap-x-5'>
                {socialList.map((s) => {
                  return (
                    <div key={Object.values(s).toString()}>
                      <SocialIcon
                        color='blue'
                        size={'3xl'}
                        iconName={Object.keys(s).toString()}
                        href={Object.values(s).toString()}
                      />
                    </div>
                  )
                })}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default About_Team_Header
