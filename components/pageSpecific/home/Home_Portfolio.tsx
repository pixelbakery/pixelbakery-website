import Button_Filled from '@parts/Button_Filled'
import portfolio from '@data/portfolio'
import Home_Portfolio_Card from './Home_Portfolio_Card'

function Home_Portfolio() {
  const featuerd = portfolio.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  const featuredProj01 = featuerd[0]
  const featuredProj02 = featuerd[1]
  const featuredProj03 = featuerd[2]
  const featuredProj04 = featuerd[3]
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
              link={featuredProj01.slug}
              previewImg={featuredProj01.previewImg}
              video={featuredProj01.hoverVideo}
              client={featuredProj01.client}
              title={featuredProj01.title}
              tags={featuredProj01.tags}
              description={featuredProj01.description}
            />
          </div>

          <div className='w-full 2xl:w-5/12 flex justify-end my-24 2xl:mt-96'>
            <Home_Portfolio_Card
              bgPosition={'block-left'}
              bgColor={'bg-yellow'}
              link={featuredProj02.slug}
              previewImg={featuredProj02.previewImg}
              video={featuredProj02.hoverVideo}
              client={featuredProj02.client}
              title={featuredProj02.title}
              tags={featuredProj02.tags}
              description={featuredProj02.description}
            />
          </div>

          <div className='w-full flex justify-start mt-16 2xl:w-5/12  2xl:-mt-40'>
            <Home_Portfolio_Card
              bgPosition={'block-right-up'}
              bgColor={'bg-peach'}
              link={featuredProj03.slug}
              previewImg={featuredProj03.previewImg}
              video={featuredProj03.hoverVideo}
              client={featuredProj03.client}
              title={featuredProj03.title}
              tags={featuredProj03.tags}
              description={featuredProj03.description}
            />
          </div>

          <div className='w-full flex 2xl:w-5/12 justify-end mt-32 2xl:mt-60'>
            <Home_Portfolio_Card
              bgPosition={'block-left-2'}
              bgColor={'bg-blue'}
              link={featuredProj04.slug}
              previewImg={featuredProj04.previewImg}
              video={featuredProj04.hoverVideo}
              client={featuredProj04.client}
              title={featuredProj04.title}
              tags={featuredProj04.tags}
              description={featuredProj04.description}
            />
          </div>
        </div>
      </div>
      <div className=' px-4  mx-auto max-w-md justify-center mt-16 py-5'>
        <Button_Filled
          text="that's just a taste"
          link='/work'
          textColor='cream'
          bgColor='peach'
          center={true}
          chevronDirection='right'
        />
      </div>
    </section>
  )
}
export default Home_Portfolio
