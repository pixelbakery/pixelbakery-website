import React from 'react'
import Button_Filled from '../parts/Button_Filled'

import Home_Portfolio_Card from './Home_Portfolio_Card'

function Home_Portfolio() {
  return (
    <section id='home-portfolio' className='bg-white py-8 my-4 px-6'>
      <div className='max-w-md md:max-w-2xl xl:max-w-6xl 2xl:max-w-full 2xl:px-12 mx-auto'>
        <div>
          <h2 className='text-blue-dark my-0 py-12'>our best hits</h2>
        </div>
        <div className='flex flex-wrap justify-between '>
          <div className='w-full flex px-5 2xl:w-5/12 2xl:px-12 2xl:pr-0 justify-start mt-12  mb-0 '>
            <Home_Portfolio_Card
              bgPosition={'block-right'}
              bgColor={'bg-pink'}
              link={'/'}
              image={'https://pixelbakery.co/wp-content/uploads/PB/2020/07/KN_ECommPromo_End.gif'}
              client={'The Sola Company'}
              title='Tiny Chef Magic'
              tags={['2d animation', 'creative concepting', 'storyboarding']}
              description={
                'Proactively redefine state of the art information rather than bricks-and-clicks technology.'
              }
            />
          </div>

          <div className='w-full 2xl:w-5/12 flex justify-end my-24 2xl:mt-96'>
            <Home_Portfolio_Card
              bgPosition={'block-left'}
              bgColor={'bg-yellow'}
              link={'/'}
              image={'https://pixelbakery.co/wp-content/uploads/PB/2020/07/KN_ECommPromo_End.gif'}
              client={'SoulPancake'}
              title='The Price of Free'
              tags={['2d animation', 'creative concepting', 'storyboarding']}
              description={
                'Proactively redefine state of the art information rather than bricks-and-clicks technology.'
              }
            />
          </div>

          <div className='w-full flex justify-start mt-16 2xl:w-5/12  2xl:-mt-40'>
            <Home_Portfolio_Card
              bgPosition={'block-right-up'}
              bgColor={'bg-peach'}
              link={'/'}
              image={'https://pixelbakery.co/wp-content/uploads/PB/2020/07/KN_ECommPromo_End.gif'}
              client={'SoulPancake'}
              title='The Price of Free'
              tags={['2d animation', 'creative concepting', 'storyboarding']}
              description={
                'Proactively redefine state of the art information rather than bricks-and-clicks technology.'
              }
            />
          </div>

          <div className='w-full flex 2xl:w-5/12 justify-end mt-32 2xl:mt-60'>
            <Home_Portfolio_Card
              bgPosition={'block-left-2'}
              bgColor={'bg-blue'}
              link={'/'}
              image={'https://pixelbakery.co/wp-content/uploads/PB/2020/07/KN_ECommPromo_End.gif'}
              client={'SoulPancake'}
              title='The Price of Free'
              tags={['2d animation', 'creative concepting', 'storyboarding']}
              description={
                'Proactively redefine state of the art information rather than bricks-and-clicks technology.'
              }
            />
          </div>
        </div>
      </div>
      <div className=' px-4  mx-auto max-w-md justify-center mt-16 py-5'>
        <Button_Filled text="that's just a taste" link='/work' textColor='cream' bgColor='peach' />
      </div>
    </section>
  )
}
export default Home_Portfolio
