import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import H2 from '@typography/H2'
import Link from 'next/link'

function CaseStudies_Credits({ credits }) {
  const firstcolumn = Math.floor(credits.length / 2)

  const innerHtml = (name, title) => {
    return (
      <span>
        {name} <span className='hidden lg:inline'> – </span>
        <br className='lg:hidden' /> <span className='italic'>{title}</span>
      </span>
    )
  }

  const setCreditColumn = (start, end) => {
    return (
      <div className='mx-auto  w-max'>
        <ul className='mx-auto list-none text-wine text-xs sm:text-sm lg:text-md text-opacity-75 '>
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
    <PageSection className='px-6 my-4 py-12' id='credits'>
      <InnerWrapper>
        <H2 className='text-left mt-0 pt-0 text-4xl max-w-md '> Credits</H2>
        <div className=' mx-auto flex justify-center'>
          {setCreditColumn(0, firstcolumn)}
          {setCreditColumn(firstcolumn, credits.length)}
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default CaseStudies_Credits
