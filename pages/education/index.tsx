import { getAllProjectFiles } from '@lib/api_projectFile'
import Education_Header from '@education/Education_Header'
import Education_MadeToOrder from '@education/Education_MadeToOrder'
import Education_FromScratch from '@education/Education_FromScratch'
import Education_ProjectFiles from '@education/Education_ProjectFiles'
import Education_TutorialRequests from '@education/Education_TutorialRequests'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'
import H2 from '@typography/H2'
import Main from '@parts/Main'
import fs from 'fs'
import { NextSeo } from 'next-seo'
import { madeToOrderFilePaths, MADETOORDER_PATH } from '@lib/mdxUtils'
import matter from 'gray-matter'
import path from 'path'

function EducationPage({ allProjectFiles, allMadeToOrders }) {
  return (
    <Main className='max-w-screen overflow-x-hidden' id='educationPage'>
      <NextSeo
        noindex={false}
        title='Education'
        description={`Our success is a direct result of the people that we meet, whether that be our employees, our clients, or community members. As such, we believe in giving back to our community through education.`}
        openGraph={{
          url: `https://pixelbakery.com/education`,
          title: 'Pixel Bakery Design Studio',
          description: `Our success is a direct result of the people that we meet, whether that be our employees, our clients, or community members. As such, we believe in giving back to our community through education.`,
          images: [
            {
              url: 'https://cdn.pixelbakery.com/img/pixelbakery-thumbnail.jpg',
              width: 1200,
              height: 900,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://cdn.pixelbakery.com/img/pixel-bakery-office.jpg',
              width: 1080,
              height: 810,
              alt: 'Pixel Bakery Design Studio is a multi-disciplinary production studio focused on animation, motion design, and commercial film production.',
            },
            {
              url: 'https://cdn.pixelbakery.com/img/pixel-bakery-samee-dan-1200x900.png',
              width: 1080,
              height: 810,
              alt: 'Daniel Hinz and Samee Callahan, two Pixel Bakery employees in Lincoln, Nebraska',
            },
          ],
        }}
      />
      <Education_Header />
      <PageSection>
        <InnerWrapper>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <H2>Why?</H2>
            <div className='max-w-xl'>
              <p>
                Our success is a direct result of the people that we meet, whether that be our
                employees, our clients, or community members. As such, we believe in giving back to
                our community through education. <br />
                <br />
                We are proponents of breaking down any barriers (e.g. monetary costs) that prevent
                creativity and believe that everyone should have access to high-quality educational
                experiences and resources.
              </p>
            </div>
          </div>
        </InnerWrapper>
      </PageSection>
      {/* <Store_Maintenance /> */}
      <Education_ProjectFiles projectFiles={allProjectFiles} />
      {/* <Education_Recent /> */}
      <Education_FromScratch />
      <Education_MadeToOrder allMadeToOrders={allMadeToOrders} />
      <Education_TutorialRequests />
    </Main>
  )
}
export default EducationPage

export const getStaticProps = async () => {
  // Made to Order (new system)
  const allMadeToOrders = madeToOrderFilePaths
    .map((filePath) => {
      const source = fs.readFileSync(path.join(MADETOORDER_PATH, filePath))
      const { content, data } = matter(source)

      return {
        content,
        data,
        filePath,
      }
    })
    .sort((mto1, mto2) => (mto1.data.date > mto2.data.date ? -1 : 1))

  // Project Files (old system)
  const allProjectFiles = getAllProjectFiles([
    'slug',
    'title',
    'active',
    'subtitle',
    'coverImage',
    'videoCoverImage',
    'category',
  ])

  return {
    props: { allProjectFiles, allMadeToOrders },
  }
}
