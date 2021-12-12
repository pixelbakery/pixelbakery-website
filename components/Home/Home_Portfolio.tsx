import React from 'react'

import Home_Portfolio_Card from './Home_Portfolio_Card'

function Home_Portfolio() {
  return (
    <section id='home-portfolio' className='bg-white py-16 my-4'>
      <div className='max-w-6xl mx-auto'>
        <div>
          <h2 className='text-blue-dark'>our best hits</h2>
        </div>
        <div>
          <div className='w-full flex justify-start my-24'>
            <Home_Portfolio_Card
              bgPosition={'block-right'}
              bgColor={'bg-pink'}
              link={'/'}
              image={'https://pixelbakery.co/wp-content/uploads/PB/2020/07/KN_ECommPromo_End.gif'}
              client={'Karma Nuts'}
              title='Get Your Nuts'
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

          <div className='w-full flex justify-end my-24'>
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
    </section>
  )
}
export default Home_Portfolio
