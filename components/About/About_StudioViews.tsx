import React from 'react'

import Image from 'next/image'
import photos from '../../data/about-studioviews'

// const flickityOptions = {
//   wrapAround: true,
//   pageDots: true,
//   lazyLoad: true,
//   autoPlay: 5000,
//   pauseAutoPlayOnHover: false,
// }

class Carousel extends React.Component {
  render() {
    return (
      <section className='w-full h-screen overflow-hidden my-4 '>
        <div className='relative h-full w-full bg-blue'>
          <Image
            src={'/img/pixel-bakery-office.jpeg'}
            layout='fill'
            objectFit='cover'
            alt="pixel bakery's studio in lincoln, nebraska"
          />
        </div>
      </section>
    )
  }
}

export default Carousel
