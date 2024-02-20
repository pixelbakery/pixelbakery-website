import Link from 'next/link'
import Button_Filled from '@parts/Button_Filled'
import dynamic from 'next/dynamic'
import nav_main from '@data/nav_main'
import Logo_Primary from '@images/logo_primary'
import Nav_SocialLinks from '@nav/Nav_SocialLinks'
import PixelBakery_EasyBakeOven from '@data/lottie_misc/PixelBakery_EasyBakeOven.json' assert { type: 'json' }

// import('@data/lottie_misc/PixelBakery_EasyBakeOven.json', { assert: { type: 'json' } }).then(
//   (module) => module.default,
// )
// const PixelBakery_EasyBakeOven = dynamic(
//   () => import('@data/lottie_misc/PixelBakery_EasyBakeOven.json').then((module) => module.default),
//   {
//     ssr: false,
//   },
// )
// const PixelBakery_EasyBakeOven = import('@data/lottie_misc/PixelBakery_EasyBakeOven.json').then(
//   ({ default: PixelBakery_EasyBakeOven }) => PixelBakery_EasyBakeOven,
// )

const LottiePlayer = dynamic(() => import('@parts/LottiePlayer'), {
  ssr: false,
})
const LottiePatternPlayer = dynamic(() => import('@parts/LottiePatternPlayer'), {
  ssr: false,
})

function Home_Landing() {
  // import('@data/lottie_misc/PixelBakery_EasyBakeOven.json', { assert: { type: 'json' } }).then(
  //   (PixelBakery_EasyBakeOven) => PixelBakery_EasyBakeOven.default,
  // )
  // const test = '@data/lottie_misc/PixelBakery_EasyBakeOven.json'
  // const DynamicComponent = dynamic(() => import(`${test}`))
  // const jsonModule = await import('@data/lottie_misc/PixelBakery_EasyBakeOven.json', {
  //   assert: { type: 'json' },
  // })
  // console.log(jsonModule)
  return (
    <section className='lander overflow-hidden w-full my-4 flex'>
      <nav className='w-2/5 xl:w-1/3 max-w-lg bg-egg h-full hidden lg:flex flex-col justify-center py-10 px-16 '>
        <div className='w-24 xl:w-32 2xl:w-52 -mb-6'>
          <div className=' w-full  text-pink fill-current '>
            <Logo_Primary />
          </div>
        </div>
        <div className='w-fit '>
          <div className='h-full w-full flex flex-col justify-center ' id='homepage-main-nav'>
            <ul className='relative grid grid-cols-1 gap-y-1 xl:gap-y-2  text-3xl 2xl:text-5xl  lowercase font-bold 2xl:font-extrabold text-pink'>
              {nav_main.map((navItem, index) => {
                return (
                  <li
                    key={index}
                    className='relative block my-0 py-0 leading-none cursor-pointer duration-150 ease-in-out hover:scale-98 hover:animate-pulse'
                  >
                    <Link hrefLang={'en-US'} href={navItem.url}>
                      {navItem.text}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div>
          <div className='flex justify-center w-full xl:my-2'>
            <Button_Filled
              center={true}
              text={'Start A Project'}
              link={'/onboarding'}
              className={'w-full hover:animate-pulse'}
              bgColor={'peach'}
              textColor={'pink-lighter'}
              chevronDirection='right'
            />
          </div>
          <div className='mx-auto w-full '>
            <Nav_SocialLinks color={'peach'} textSize={'2xl'} />
          </div>
          <div className='mt-2 pt-1 mx-auto relative w-full flex justify-center'>
            <Link
              href={'https://clients.pixelbakery.com'}
              className='relative inline-block text-peach no-underline text-center text-lg font-semibold duration-100 hover:scale-98 origin-center ease-in-out hover:opacity-95 center'
            >
              Client Portal ↗
            </Link>
          </div>
        </div>
      </nav>
      <div className='relative flex-grow bg-blue h-full overflow-hidden player-wrapper'>
        <div
          className=' z-0 absolute  top-0 left-0 w-full h-full overflow-hidden lottie-blue-dark'
          id='lottie'
        >
          <LottiePatternPlayer />
        </div>
        <div className=' flex justify-center h-full w-full'>
          <div className='block  self-center w-2/3 lg:w-1/2 max-w-3xl '>
            <LottiePlayer anim={PixelBakery_EasyBakeOven} />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home_Landing
