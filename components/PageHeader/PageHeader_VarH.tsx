import React, { useState } from 'react'
import PageHeader_VarH_Peach from './PageHeader_VarH_Peach'
import PageHeader_VarH_Pink from './PageHeader_VarH_Pink'
import PageHeader_VarH_Pink_Light from './PageHeader_VarH_Pink_Light'
import PageHeader_VarH_Blue from './PageHeader_VarH_Blue'

import PropTypes from 'prop-types'

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
]

function PageHeader_VarH({ header, subheader }) {
  const [randomNumber] = useState(Math.floor(Math.random() * patterns.length))

  const ThisPattern = patterns[randomNumber]

  return (
    <div>
      <ThisPattern header={header} subheader={subheader} />
    </div>
  )
}
export default PageHeader_VarH

/* <PageHeader_VarH_Peach header={header} subheader={subheader} />
      <PageHeader_VarH_Pink header={header} subheader={subheader} />
      <PageHeader_VarH_Pink_Light header={header} subheader={subheader} />
      <PageHeader_VarH_Blue header={header} subheader={subheader} />
      <PageHeader_VarH_Blue_Dark header={header} subheader={subheader} />
      <PageHeader_VarH_Cream header={header} subheader={subheader} />
      <PageHeader_VarH_Blue_Dark_YellowAlt header={header} subheader={subheader} />
      <PageHeader_VarH_Yellow header={header} subheader={subheader} /> */
