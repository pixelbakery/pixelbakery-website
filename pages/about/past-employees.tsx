import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import Image from 'next/image'
import Link from 'next/link'
import type { ReactElement } from 'react'

import { BreadcrumbJsonLd, NextSeo } from 'next-seo'

import { PageSection, InnerWrapper } from '@parts'
import { peopleFilePaths, PEOPLE_PATH } from '@lib/mdxUtils'
import { Shimmer } from '@lib'
import { Layout_Default } from '@layouts'
import { Loading } from '@utility'
import { H2 } from '@typography'
import PageHeader_VarH from '@pageHeaders/PageHeader_VarH'
import type { PersonWithFilePath } from '@/types/people'



interface PagePastEmployeesProps {
  allPeople: PersonWithFilePath[]
}

const Page_PastEmployees = ({ allPeople }: PagePastEmployeesProps) => {
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
          <div className='grid w-full grid-cols-2 mt-12 md:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-8'>
            {allPeople.map((p, index) => (
              <div className='col-span-1' key={index}>
                <Link
                  hrefLang={'en-US'}
                  as={`/about/${p.slug}`}
                  href={`/about/[slug]`}
                  className='relative block w-full col-span-1 overflow-hidden rounded-lg bg-blue hover-98'
                >
                  <div className=''>
                    <Image
                      src={`${p.headshotFun}`}
                      width={1280}
                      height={1920}
                      placeholder={'blur'}
                      blurDataURL={`${Shimmer(1280, 1920)}`}
                      className={'w-full h-auto relative'}
                      alt={`${p.name} was a ${p.title} at Pixel Bakery Design Studio`}
                    />
                    <Loading />
                  </div>
                </Link>
                <Link
                  hrefLang={'en-US'}
                  as={`/about/${p.slug}`}
                  href={`/about/[slug]`}
                  className='relative block mt-6'
                >
                  <h3 className='font-semibold leading-none text-md md:text-xl text-wine line-clamp-3'>
                    {p.name}
                  </h3>
                  <p className='pt-0 mt-1 text-sm italic'>{p.title}</p>
                </Link>
              </div>
            ))}
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
              url: `/img/pixelbakery-thumbnail.jpg`,
              alt: `Pixel Bakery Design Studio (PBDS) is a multidisciplinary production studio focused on animation, animated explainer videos, motion design, and commercial film production`,
            },
          ],
        }}
      />
    </>
  )
}

// Set page layout
Page_PastEmployees.getLayout = function getLayout(page: ReactElement) {
  return <Layout_Default>{page}</Layout_Default>
}

export default Page_PastEmployees

export function getStaticProps() {
  const allPeople: PersonWithFilePath[] = peopleFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(PEOPLE_PATH, filePath), 'utf8')
      const { data } = matter(source)

      return {
        ...data,
        filePath,
        slug: data.slug || filePath.replace(/\.mdx?$/, ''),
        bioLink: `/about/${data.slug || filePath.replace(/\.mdx?$/, '')}`,
      } as PersonWithFilePath
    })
    .filter((person) => !person.active)
    .sort(() => Math.random() - 0.5)

  return { props: { allPeople } }
}