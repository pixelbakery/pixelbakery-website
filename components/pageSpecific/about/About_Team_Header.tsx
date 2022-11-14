import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H1 from '@typography/H1'
import Lead from '@typography/Lead'
import { MDXRemote } from 'next-mdx-remote'
import SocialLinks from '@images/Icons_Social/SocialLinks'
import Image from 'next/image'
import Head from 'next/head'
import Obfuscate from 'react-obfuscate'
import Shimmer from '@lib/Shimmer'
//CSS imports
import markdownStyles from '@styles/markdown-styles.module.css'
import Loading from '@utility/Loading'

const About_Team_Header = ({ source, frontMatter }) => {
  const socialList = frontMatter.socials

  const components = {
    Head,
  }
  const ImgPrefix = process.env.NEXT_PUBLIC_IMG_PREFIX
  return (
    <PageSection color='cream' id={'bio-header'}>
      <InnerWrapper className='mt-24'>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-12 xl:gap-x-24  gap-y-8'>
          <div className='col-span-1 relative w-full aspect-3/4'>
            <div className='relative max-w-lg aspect-w-3 aspect-h-4'>
              <Image
                placeholder='blur'
                width={1280}
                height={1920}
                blurDataURL={`${Shimmer(1280, 1920)}`}
                src={`${ImgPrefix}${frontMatter.headshotFun}`}
                className={'object-cover w-full h-full'}
                alt={`${frontMatter.name}, ${frontMatter.title} at Pixel Bakery Design Studio`}
                // className={'bg-blue'}
              />
            </div>
            <Loading />
          </div>
          <div className='col-span-1'>
            <div>
              <H1 color='blue' className='mb-2 pb-0 2xl:mb-2'>
                {frontMatter.name}
              </H1>
              <Lead color='wine' className='mb-2 lg:mb-4 pb-0'>
                {frontMatter.title}
              </Lead>
            </div>
            <div className='pb-8'>
              {frontMatter.email ? (
                <Obfuscate
                  linkText={'mailto:no@no.com'}
                  email={frontMatter.email}
                  className={'block italic text-peach cursor-pointer text-left'}
                />
              ) : (
                ''
              )}
              {frontMatter.phone ? (
                <a
                  href={`tel:${frontMatter.phone}`}
                  className='block italic text-peach cursor-pointer'
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
                      <SocialLinks
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
