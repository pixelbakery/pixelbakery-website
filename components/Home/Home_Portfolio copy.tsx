import React from 'react'
import Button_Filled from '../parts/Button_Filled'

import Home_Portfolio_Card from './Home_Portfolio_Card'

function Home_Portfolio() {
  return (
    <section id='home-portfolio' className='bg-white py-8 my-4 px-6'>
      <div className='max-w-6xl mx-auto'>
        <div>
          <h2 className='text-blue-dark pb-0 my-0'>our best hits</h2>
        </div>
        <div>
          <div className='flex px-5  justify-start mt-12 mb-24'>
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

          <div className='w-full flex justify-end my-24'>
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

          <div className='w-full flex justify-start my-24'>
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

          <div className='w-full flex justify-end my-22'>
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
        <div className='mt-8 py-5'>
          <Button_Filled
            text="that's just a taste"
            link='/work'
            textColor='cream'
            bgColor='peach'
          />
        </div>
      </div>
    </section>
  )
}
export default Home_Portfolio
