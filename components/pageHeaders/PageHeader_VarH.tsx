import { useEffect, useState } from 'react'
import PageHeader_VarH_Content from '@pageHeaders/PageHeader_VarH_Content'
import { RandomArrayItem } from '@lib/helpers'
import cn from 'classnames'
import PageHeader_TextBox from '@pageHeaders/PageHeader_TextBox'

interface Props {
  header: string
  subheader: string
}

const loadingTheme = {
  primaryColor: 'egg',
  accentColor: 'egg',
  subheaderColor: 'egg',
}
const themes = [
  {
    primaryColor: 'blue',
    accentColor: 'blue-dark',
    subheaderColor: 'blue',
  },
  {
    primaryColor: 'blue-dark',
    accentColor: 'blue',
    subheaderColor: 'blue-dark',
  },
  {
    primaryColor: 'cream',
    accentColor: 'peach',
    subheaderColor: 'blue-dark',
  },
  {
    primaryColor: 'pink',
    accentColor: 'pink-lighter',
    subheaderColor: 'pink-lighter',
  },
  {
    primaryColor: 'pink-lighter',
    accentColor: 'pink',
    subheaderColor: 'blue-dark',
  },
  {
    primaryColor: 'peach',
    accentColor: 'egg',
    subheaderColor: 'egg',
  },
]

const PageHeader_VarH = ({ header, subheader }: Props) => {
  // const [selectedTheme] = useState(wizards[RandomArrayItem(wizards.length)])

  const [selectedTheme, setShuffled] = useState(loadingTheme)
  const [loading, setLoading] = useState(true) // anyting you want !!!

  useEffect(() => {
    if (loading) {
      const x = themes[RandomArrayItem(themes.length)]
      setShuffled(x)
      setLoading(false)
    }
  }, [loading])
  return (
    <header className='bg-cream relative overflow-hidden lander-variableHeight my-4'>
      <div
        className={cn(
          'absolute overflow-hidden w-full h-full transition delay-150 duration-700 opacity-0',
          `bg-${selectedTheme.accentColor}`,
          { ['opacity-0']: loading },
          { ['opacity-100 ']: !loading },
        )}
        id='topOfPage'
      >
        {loading ? '' : <PageHeader_VarH_Content primaryColor={selectedTheme.primaryColor} />}
      </div>
      <PageHeader_TextBox
        loading={loading}
        header={header}
        primaryColor={selectedTheme.primaryColor}
        accentColor={selectedTheme.accentColor}
        subheader={subheader}
        subheaderColor={selectedTheme.subheaderColor}
      />
    </header>
  )
}
export default PageHeader_VarH
