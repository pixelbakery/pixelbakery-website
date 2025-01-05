import { InnerWrapper, PageSection } from '@parts'
import H2 from '@typography/H2'
import Link from 'next/link'
import type { CaseStudiesCreditsProps } from '@types'

function CaseStudies_Credits({ credits }: CaseStudiesCreditsProps) {
  const firstcolumn = Math.floor(credits.length / 2)

  const innerHtml = (name: string, title: string) => {
    return (
      <span>
        {name} <span className='hidden lg:inline'> – </span>
        <br className='lg:hidden' /> <span className='italic'>{title}</span>
      </span>
    )
  }

  const setCreditColumn = (start: number, end: number) => {
    return (
      <div className='mx-auto w-max'>
        <ul className='mx-auto text-xs text-opacity-75 list-none text-wine sm:text-sm lg:text-md '>
          {credits.slice(start, end).map((credit) => {
            return (
              <li className='my-3' key={credit.name}>
                {credit.website != undefined ? (
                  <Link
                    hrefLang={'en-US'}
                    href={`${credit.website}`}
                    className='underline decoration-dotted'
                  >
                    {innerHtml(credit.name, credit.title)}
                  </Link>
                ) : (
                  innerHtml(credit.name, credit.title)
                )}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }

  return (
    <PageSection className='px-6 py-12 my-4' id='credits'>
      <InnerWrapper>
        <H2 className='max-w-md pt-0 mt-0 text-4xl text-left '> Credits</H2>
        <div className='flex justify-center mx-auto '>
          {setCreditColumn(0, firstcolumn)}
          {setCreditColumn(firstcolumn, credits.length)}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default CaseStudies_Credits
