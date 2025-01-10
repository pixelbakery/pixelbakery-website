import { ReactNode } from 'react'
import cn from 'classnames'
import { H2 } from '@typography'
import { InnerWrapper, PageSection } from '@parts'
import type { TextColorVariant } from '@lib'

interface Props {
  children?: ReactNode
  bgColor?: string
  textColor?: string
  header: string
  headerColor?: string
  color?: string
  id?: string
  className?: string
  props?: any
}

function CaseStudies_Description({ children, ...props }: Props) {
  const bgColor = props.bgColor || 'blue-dark'
  const textColor = props.textColor || 'pink'
  const headerColor = props.headerColor || 'pink-lighter'

  return (
    <PageSection color={bgColor} id={'description'}>
      <InnerWrapper>
        <div className='w-full grid grid-cols-5 md:grid-cols-5'>
          <div className='col-span-1 md:col-span-2'>
            <H2
              className={cn('text-left mt-0 pt-0 text-4xl max-w-md')}
              color={headerColor as TextColorVariant}
            >
              {props.header}
            </H2>
          </div>
          <div className='col-span-1 md:col-span-3'>
            <div className={cn(`max-w-lg text-${textColor}`)}>{children}</div>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}

export default CaseStudies_Description
