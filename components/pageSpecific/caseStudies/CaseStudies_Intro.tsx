import InnerWrapper from '@parts/InnerWrapper'
import PageSection from '@parts/PageSection'
import cn from 'classnames'
import H2 from '@typography/H2'

export default function CaseStudiesIntro({ children, ...props }) {
  return (
    <PageSection className={cn('lg:py-12')} id={'intro'}>
      <InnerWrapper className={cn('flex justify-center')}>
        <article className='grid grid-cols-1 lg:grid-cols-5 gap-x-16 xl:gap-x-24'>
          <div className='col-span-1 lg:col-span-2 mt-3'>
            <H2 color={'blue'}>{props.title}</H2>
          </div>
          <div className='col-span-1 lg:col-span-3  text-left text-lg mt-0 pt-0'>{children}</div>
        </article>
      </InnerWrapper>
    </PageSection>
  )
}
