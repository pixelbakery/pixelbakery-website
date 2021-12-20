import React from 'react'

import PropTypes from 'prop-types'
CaseStudies_Description.propTypes = {
  header: PropTypes.string.isRequired,
  headerColor: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  bodyCopy: PropTypes.string.isRequired,
  props: PropTypes.any,
}

function CaseStudies_Description({ ...props }) {
  let bgColor, textColor, headerColor
  if (props.bgColor == undefined) {
    bgColor = 'bg-blue-dark'
  } else bgColor = props.bgColor
  if (props.textColor == undefined) {
    textColor = 'text-pink'
  } else textColor = props.textColor
  if (props.headerColor == undefined) {
    headerColor = 'text-pink-light'
  } else headerColor = props.headerColor
  return (
    <section className={'py-16 my-4 ' + bgColor}>
      <div className='mx-auto px-8  sm:max-w-sm md:max-w-6xl'>
        {/* <GridCols columns={6} gap={4} /> */}
        <h2 className={' text-left mt-0 pt-0 text-4xl max-w-md  ' + headerColor}>{props.header}</h2>
        <p className={'mx-auto font-semibold text-lg md:text-xl ' + textColor}>{props.bodyCopy}</p>
      </div>
    </section>
  )
}
export default CaseStudies_Description
