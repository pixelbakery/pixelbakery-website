import React from 'react'
import next from 'next'

import About_Intro from '../../components/About/About_Intro'
import About_Team from '../../components/About/About_Team'
import About_Values from '../../components/About/About_Valuess'
import About_StudioViews from '../../components/About/About_StudioViews'

import About_Twitch from '../../components/About/About_Twitch'
import About_Faq from '../../components/About/About_Faq'

// import TwitchStream from "../components/about-twitch";
function About() {
  return (
    <main className='bg-egg'>
      <section className='lander my-4 bg-blue'>lander</section>
      <About_Intro />
      <About_Team />
      <About_Values />
      <About_StudioViews />
      <About_Twitch />
      <About_Faq />
    </main>
  )
}

export default About
