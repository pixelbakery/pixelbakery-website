import React from 'react'

import Intro from '../../components/pg-about/about-intro'
import Team from '../../components/pg-about/about-team'
import Values from '../../components/pg-about/about-values'
import StudioViews from '../../components/pg-about/about-studioViews'

import Twitch from '../../components/pg-about/about-twitch'
import FAQ from '../../components/pg-about/about-faq'

// import TwitchStream from "../components/about-twitch";
function About() {
  return (
    <main className='bg-egg'>
      <section className='lander my-4 bg-blue'>lander</section>
      <Intro />
      <Team />
      <Values />
      <StudioViews />
      <Twitch />
      <FAQ />
    </main>
  )
}

export default About
