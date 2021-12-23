import React from 'react'
import next from 'next'
import PageHeader_VariableHeight from '../../components/PageHeader_VariableHeight'
import About_Intro from '../../components/About/About_Intro'
import About_Team from '../../components/About/About_Team'
import About_Values from '../../components/About/About_Values'
import About_StudioViews from '../../components/About/About_StudioViews'
// import About_Twitch from '../../components/About/About_Twitch'
import About_Faq from '../../components/About/About_Faq'

function About() {
  return (
    <main className='bg-egg'>
      <PageHeader_VariableHeight header='About' subheader='copy copy copy ' />
      <About_Team />
      <About_Values />
      <About_StudioViews />
      {/* <About_Twitch /> */}
      <About_Faq />
    </main>
  )
}

export default About
