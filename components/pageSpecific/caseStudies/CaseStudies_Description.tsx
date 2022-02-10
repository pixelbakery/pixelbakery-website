import PropTypes from 'prop-types'
import React, { ReactNode, PropsWithChildren } from 'react'
import cn from 'classnames'
// CaseStudies_Description.propTypes = {
//   header: PropTypes.string.isRequired,
//   headerColor: PropTypes.string,
//   bgColor: PropTypes.string,
//   textColor: PropTypes.string,
//   bodyCopy: PropTypes.string.isRequired,
//   children: propTypes.ReactNode,
//   props: PropTypes.any,
// }
type Props = {
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
    headerColor = 'pink-light'
  } else headerColor = props.headerColor
  return (
    <section className={cn('py-16 my-4', `bg-${bgColor}`)}>
      <div className={cn('mx-auto px-8  sm:max-w-sm md:max-w-6xl')}>
        {/* <GridCols columns={6} gap={4} /> */}
        <h2 className={cn(' text-left mt-0 pt-0 text-4xl max-w-md', `text-${props.headerColor}`)}>
          {props.header}
        </h2>
        <div className={cn(`text-${props.textColor}`)}>{children}</div>
      </div>
    </section>
  )
}
export default CaseStudies_Description
