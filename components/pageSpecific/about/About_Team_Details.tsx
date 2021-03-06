import { CamelCaseToSentence } from '@lib/helpers'
import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import Lead from '@typography/Lead'

function About_Team_Details({ frontMatter }) {
  const details = frontMatter.details

  return (
    <PageSection>
      <InnerWrapper>
        <div className='grid grid-cols-2 2xl:grid-cols-5 gap-y-6 gap-12 lg:gap-x-24 w-fit mx-auto'>
          {details.map((s) => {
            return (
              <div className='col-span-1 w-fit' key={s}>
                <Lead className='mb-1 lg:mb-1 lg:pb-0' color='peach'>
                  {CamelCaseToSentence(Object.keys(s).toString())}
                </Lead>
                <p className='text-md text-wine'>{Object.values(s).toString()}</p>
              </div>
            )
          })}
          {frontMatter.signs != undefined ? (
            <div className='col-span-1 w-fit'>
              <Lead className='mb-1 lg:mb-1 lg:pb-0' color='peach'>
                Signs
              </Lead>
              <ul className='flex flex-col gap-x-4 text-md text-wine'>
                <li>☉ {frontMatter.signs.sun}</li>
                <li>↑ {frontMatter.signs.rising}</li>
                <li>☽ {frontMatter.signs.moon}</li>
              </ul>
            </div>
          ) : (
            ''
          )}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default About_Team_Details
