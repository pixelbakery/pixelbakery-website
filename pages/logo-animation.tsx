import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Lottie from 'react-lottie-player'
import animationData from '../data/patterns_darkblue.json'

function LogoAnimation() {
  const PatternBlue = () => {
    return (
      <Lottie
        loop
        animationData={animationData}
        play
        renderer={'svg'}
        container={'#lottie'}
        style={{ width: '125%' }}
      />
    )
  }
  return (
    <main>
      <section className='relative bg-blue  lander my-4'>
        <div className='z-0 absolute left-0 top-0 w-full h-full overflow-hidden lottie' id='lottie'>
          <PatternBlue className={'z-0 w-full right-0 top-0 bottom-0 object-cover object-center'} />
        </div>
        <h1>asgsdgansgs</h1>
      </section>
    </main>
  )
}
export default LogoAnimation
