import { useEffect, useState } from 'react'
// import PageHeader_VarH_Content from '@pageHeaders/PageHeader_VarH_Content'
import { RandomArrayItem } from '@lib/helpers'
import cn from 'classnames'
import PageHeader_TextBox from '@pageHeaders/PageHeader_TextBox'
import dynamic from 'next/dynamic'

const PageHeader_VarH_Content = dynamic(() => import('@pageHeaders/PageHeader_VarH_Content'), {
  ssr: false,
  loading: () => (
    <PageHeader_TextBox
      header={''}
      primaryColor={'blue'}
      accentColor={'cream'}
      subheader={''}
      subheaderColor={'blue'}
    />
  ),
})

interface Props {
  header: string
  subheader: string
}

const loadingTheme = {
  primaryColor: 'wine',
  accentColor: 'cream',
  subheaderColor: 'wine',
}
const themes = [
  {
    primaryColor: 'blue',
    accentColor: 'blue-dark',
    subheaderColor: 'cream',
  },
  {
    primaryColor: 'blue-dark',
    accentColor: 'blue',
    subheaderColor: 'cream',
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
        className={cn('absolute overflow-hidden w-full h-full', [
          `bg-${selectedTheme.accentColor}`,
        ])}
        id='topOfPage'
      >
        {loading ? '' : <PageHeader_VarH_Content primaryColor={selectedTheme.primaryColor} />}
      </div>
      <PageHeader_TextBox
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
