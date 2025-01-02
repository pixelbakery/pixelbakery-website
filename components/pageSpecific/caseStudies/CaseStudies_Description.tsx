/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react'
import cn from 'classnames'
import H2 from '@typography/H2'
import PageSection from '@parts/PageSection'
import InnerWrapper from '@parts/InnerWrapper'

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
  let bgColor, textColor, headerColor
  if (props.bgColor == undefined) {
    bgColor = 'blue-dark'
  } else bgColor = props.bgColor
  if (props.textColor == undefined) {
    textColor = 'pink'
  } else textColor = props.textColor
  if (props.headerColor == undefined) {
    headerColor = 'pink-lighter'
  } else headerColor = props.headerColor

  return (
    <PageSection color={bgColor} id={'description'}>
      <InnerWrapper>
        <div className='grid grid-cols-1 lg:grid-cols-5'>
          <div className='col-span-1 lg:col-span-2'>
            <H2
              className={cn(' text-left mt-0 pt-0 text-4xl max-w-md', `text-`)}
              color={props.headerColor}
            >
              {props.header}
            </H2>
          </div>
          <div className='col-span-1 lg:col-span-3'>
            {' '}
            <div className={cn(`max-w-lg text-${props.textColor}`)}>{children}</div>
          </div>
        </div>
      </InnerWrapper>
    </PageSection>
  )
}
export default CaseStudies_Description
