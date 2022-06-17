import { useState } from 'react'
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
]

function PageHeader_VarH({ header, subheader }): JSX.Element {
  const [randomNumber] = useState(Math.floor(Math.random() * patterns.length))

  const ThisPattern = patterns[randomNumber]

  return (
    <>
      <header className='bg-blue'>
        <ThisPattern header={header} subheader={subheader} />
      </header>
    </>
  )
}
export default PageHeader_VarH
