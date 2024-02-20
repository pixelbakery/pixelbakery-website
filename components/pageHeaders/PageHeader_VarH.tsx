import { useEffect, useState } from 'react'
import PageHeader_VarH_Content from '@pageHeaders/PageHeader_VarH_Content'
import { RandomArrayItem } from '@lib/helpers'
import cn from 'classnames'
import PageHeader_TextBox from '@pageHeaders/PageHeader_TextBox'
import { backgroundColorVariants, backgroundColorVariant, TextColorVariant } from '@lib/colorHelper'

interface Props {
  header: string
  subheader: string
}

const loadingTheme = {
  objectColor: 'egg',
  backgroundColor: 'egg',
  textboxColor: 'egg',
  headerColor: 'egg',
  subheaderColor: 'egg',
}
const themes = [
  {
    objectColor: 'blue',
    backgroundColor: 'blue-dark',
    textboxColor: 'blue',
    headerColor: 'blue-dark',
    subheaderColor: 'blue',
  },
  {
    objectColor: 'blue-dark',
    backgroundColor: 'blue',
    textboxColor: 'blue-dark',
    headerColor: 'blue',
    subheaderColor: 'blue-dark',
  },
  {
    objectColor: 'cream',
    backgroundColor: 'peach',
    textboxColor: 'cream',
    headerColor: 'peach',
    subheaderColor: 'blue-dark',
  },
  {
    objectColor: 'pink',
    backgroundColor: 'pink-lighter',
    textboxColor: 'pink',
    headerColor: 'pink-lighter',
    subheaderColor: 'pink-lighter',
  },
  {
    objectColor: 'pink-lighter',
    backgroundColor: 'pink',
    textboxColor: 'pink-lighter',
    headerColor: 'pink',
    subheaderColor: 'blue-dark',
  },
  {
    objectColor: 'peach',
    backgroundColor: 'egg',
    textboxColor: 'peach',
    headerColor: 'egg',
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
          `${backgroundColorVariants[selectedTheme.backgroundColor as backgroundColorVariant]}`,
          { ['opacity-0']: loading },
          { ['opacity-100 ']: !loading },
        )}
        id='topOfPage'
      >
        {loading ? '' : <PageHeader_VarH_Content objectColor={selectedTheme.objectColor} />}
      </div>
      <PageHeader_TextBox
        loading={loading}
        header={header}
        headerColor={`${selectedTheme.headerColor}` as TextColorVariant}
        backgroundColor={`${selectedTheme.textboxColor}` as backgroundColorVariant}
        subheader={subheader}
        subheaderColor={`${selectedTheme.subheaderColor}` as TextColorVariant}
      />
    </header>
  )
}
export default PageHeader_VarH
