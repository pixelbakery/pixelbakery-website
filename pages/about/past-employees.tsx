import { peopleFilePaths, PEOPLE_PATH } from '@lib/mdxUtils'
import InnerWrapper from '@parts/InnerWrapper'
import fs from 'fs'
import PageSection from '@parts/PageSection'
import matter from 'gray-matter'
import path from 'path'
import Image from 'next/image'
const ImgPrefix = process.env.NEXT_PUBLIC_IMG_PREFIX
import Shimmer from '@lib/Shimmer'
import Loading from '@utility/Loading'
import Link from 'next/link'
import H2 from '@typography/H2'
import { BreadcrumbJsonLd, NextSeo } from 'next-seo'
import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import Layout_Defaualt from 'components/layouts/Layout_Default'
import type { ReactElement } from 'react'

const Page_PastEmployees = ({ allPeople }) => {
  return (
    <>
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
            {allPeople.map((p, index) => {
              return (
                <div className='col-span-1' key={index}>
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

      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'About',
            item: 'https://pixelbakery.com/about',
          },
          {
            position: 2,
            name: `Past Employees – Gone, But Certainly Not Forgotten`,
            item: `https://pixelbakery.com/about/past-employees`,
          },
        ]}
      />
      <NextSeo
        title='Past Employees – Gone, But Certainly Not Forgotten'
        description='Change is constant, even among our dedicated team members. Embrace the journey. These are all of the employees that have passed through our doors.'
        canonical='https://pixelbakery.com/about/past-employees'
        openGraph={{
          title: `Past Employees`,
          type: 'website',
          description: `Change is constant, even among our dedicated team members. Embrace the journey.`,
          url: `https://pixelbakery.com/about/past-employees`,
          images: [
            {
              url: `${process.env.NEXT_PUBLIC_IMG_PREFIX}/img/pixelbakery-thumbnail.jpg`,
              alt: `Pixel Bakery Design Studio (PBDS) is a multidisciplinary production studio focused on animation, animated explainer videos, motion design, and commercial film production`,
            },
          ],
        }}
      />
    </>
  )
}
//Set page layout
Page_PastEmployees.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Defaualt>{page}</Layout_Defaualt>
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
