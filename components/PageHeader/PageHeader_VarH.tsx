import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import PropTypes from 'prop-types'

const PageHeader_VarH_Peach = dynamic(() => import('./PageHeader_VarH_Peach'), { ssr: true })
const PageHeader_VarH_Pink = dynamic(() => import('./PageHeader_VarH_Pink'), { ssr: true })
const PageHeader_VarH_Pink_Light = dynamic(() => import('./PageHeader_VarH_Pink_Light'), {
  ssr: true,
})
const PageHeader_VarH_Blue = dynamic(() => import('./PageHeader_VarH_Blue'), { ssr: true })
const PageHeader_VarH_Blue_Dark = dynamic(() => import('./PageHeader_VarH_Blue_Dark'), {
  ssr: true,
})
const PageHeader_VarH_Cream = dynamic(() => import('./PageHeader_VarH_Cream'), { ssr: true })
// const PageHeader_VarH_Blue_Dark_YellowAlt = dynamic(
//   () => import('./PageHeader_VarH_Blue_Dark_YellowAlt'),
//   { ssr: true },
// )
const PageHeader_VarH_Yellow = dynamic(() => import('./PageHeader_VarH_Yellow'), { ssr: true })

PageHeader_VarH.propTypes = {
  header: PropTypes.string,
  subheader: PropTypes.string,
  playFrames: PropTypes.array,
}
const patterns = [
  PageHeader_VarH_Peach,
  PageHeader_VarH_Pink,
  PageHeader_VarH_Pink_Light,
  PageHeader_VarH_Blue,
  PageHeader_VarH_Blue_Dark,
  PageHeader_VarH_Cream,
  // PageHeader_VarH_Blue_Dark_YellowAlt,
  PageHeader_VarH_Yellow,
]

function PageHeader_VarH({ header, subheader }) {
  const [randomNumber] = useState(Math.floor(Math.random() * patterns.length))

  const ThisPattern = patterns[randomNumber]

  return (
    <section>
      <ThisPattern header={header} subheader={subheader} />
    </section>
  )
}
export default PageHeader_VarH
