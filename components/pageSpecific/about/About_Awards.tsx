import { InnerWrapper, PageSection } from '@parts'
import awards from '@data/awards'
import { H2AndLead } from '@typography'
import Link from 'next/link'

const About_Awards = () => {
  return (
    <PageSection color={'blue'} id='awards'>
      <InnerWrapper>
        <div className='grid grid-cols-1 gap-2 xl:grid-cols-3 md:gap-12 xl:gap-32'>
          <div className='col-span-1'>
            <H2AndLead
              headerColor='blue-dark'
              leadColor='cream'
              headerText='Awards and Recognition*'
              leadText='Swoosh.'
            />

            <p className='max-w-lg pb-0 mt-6 mb-0 text-xs font-medium text-cream'>
              *Awards are stupid and meaningless, but idk, I guess everything is though. Might as
              well smoke &apos;em if you got &apos;em, right?
            </p>
          </div>
          <div className='flex flex-col justify-between w-full col-span-1 mx-auto lg:col-span-2 '>
            <ul
              className='relative text-sm font-medium lg:self-end w-fit text-cream font-poppins sm:text-sm md:text-lg md:font-medium awardsList'
              id='awardsList1'
            >
              {awards.map((award, index) => {
                return (
                  <li
                    key={index + award.project}
                    className='pb-2 my-4 border-b-2 border-blue-dark text-blue-dark'
                  >
                    {award.award != '' ? (
                      <span className='text-2xl font-geologica'>{award.award}</span>
                    ) : (
                      ''
                    )}
                    <p className='pt-0 my-0 ml-8 leading-none text-blue-dark'>
                      {award.category != '' ? `${award.category}, ` : ''}
                      {award.project != '' ? (
                        award.projectLink ? (
                          <>
                            <Link
                              href={award.projectLink}
                              className='underline hover:text-blue-light text-blue-dark'
                            >
                              {award.project}
                            </Link>
                            ,
                          </>
                        ) : (
                          `${' '}${award.project},`
                        )
                      ) : null}
                      {award.client != '' && `${' '}${award.client}`}
                    </p>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default About_Awards
