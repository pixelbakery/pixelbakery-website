import { peopleFilePaths, PEOPLE_PATH } from '@lib/mdxUtils'
import PageHeader_LoadingContent from '@pageHeaders/PageHeader_LoadingContent'
import InnerWrapper from '@parts/InnerWrapper'
import Main from '@parts/Main'
import fs from 'fs'
import PageSection from '@parts/PageSection'
import matter from 'gray-matter'
import dynamic from 'next/dynamic'
import path from 'path'
import Image from 'next/image'
const ImgPrefix = process.env.NEXT_PUBLIC_IMG_PREFIX
import Shimmer from '@lib/Shimmer'
import Loading from '@utility/Loading'
import Link from 'next/link'
import H2 from '@typography/H2'
import { NextSeo } from 'next-seo'
const PageHeader_VarH = dynamic(() => import('@pageHeaders/PageHeader_VarH'), {
  loading: () => (
    <PageHeader_LoadingContent header={'Hall of Legends'} subheader={'Gone But Not Forgotten'} />
  ),
  ssr: false,
})
const Page_PastEmployees = ({ allPeople }) => {
  return (
    <Main>
      <NextSeo
        title='Past Employees'
        description='Nothing lasts forever, and that holds true for our employees.'
      />
      <PageHeader_VarH header={'Past Employees'} subheader={'Gone But Not Forgotten'} />
      <PageSection id='pastEmployees'>
        <InnerWrapper>
          <H2>We miss them very very very very much.</H2>
          <p>
            Nothing lasts forever, and that holds true for our employees. Every single employee that
            has left Pixel Bakery has moved on to greener pastures with the tools they learned
            during their tenure here. We couldn't be more proud of them and their achievements.
          </p>
          <div className='w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8 mt-12'>
            {allPeople.map((p) => {
              return (
                <div className='col-span-1'>
                  <Link
                    hrefLang={'en-US'}
                    as={`/about/${p.filePath.replace(/\.mdx?$/, '')}`}
                    href={`/about/[slug]`}
                    className='block relative w-full  col-span-1 bg-blue hover-98 overflow-hidden rounded-lg'
                  >
                    <>
                      <div className=''>
                        <Image
                          src={`${ImgPrefix}${p.data.headshotFun}`}
                          width={1280}
                          height={1920}
                          placeholder={'blur'}
                          blurDataURL={`${Shimmer(1280, 1920)}`}
                          className={'w-full h-auto relative'}
                          alt={`${p.data.name} was a ${p.data.title} at Pixel Bakery Design Studio`}
                        />
                        <Loading />
                      </div>
                    </>
                  </Link>
                  <Link
                    hrefLang={'en-US'}
                    as={`/about/${p.filePath.replace(/\.mdx?$/, '')}`}
                    href={`/about/[slug]`}
                    className='block relative mt-6'
                  >
                    <h3 className='text-md md:text-xl text-wine font-semibold leading-none line-clamp-3'>
                      {p.data.name}
                    </h3>
                    <p className='mt-1 pt-0 italic text-sm'>{p.data.title}</p>
                  </Link>
                </div>
              )
            })}
          </div>
        </InnerWrapper>
      </PageSection>
    </Main>
  )
}

export default Page_PastEmployees

export function getStaticProps() {
  const allPeople = peopleFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(PEOPLE_PATH, filePath))
      const { data } = matter(source)

      return {
        data,
        filePath,
      }
    })
    .filter((person) => !person.data.active)
    .sort(() => Math.random() - 0.5)

  return { props: { allPeople } }
}
