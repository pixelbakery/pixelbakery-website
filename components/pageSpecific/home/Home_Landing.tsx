import Link from 'next/link'
import Button_Filled from '@parts/Button_Filled'
import dynamic from 'next/dynamic'
import nav_main from '@data/nav_main'
import Logo_Primary from '@images/logo_primary'
import Nav_SocialLinks from '@nav/Nav_SocialLinks'
import PixelBakery_EasyBakeOven from '@data/lottie_misc/PixelBakery_EasyBakeOven.json' assert { type: 'json' }
import { m, Variants } from 'framer-motion'
import { LazyMotion, domAnimation } from 'framer-motion'

const LottiePlayer = dynamic(() => import('@parts/LottiePlayer'), {
  ssr: false,
})
const LottiePatternPlayer = dynamic(() => import('@parts/LottiePatternPlayer'), {
  ssr: false,
})

const item: Variants = {
  offscreen: {
    display: 'hidden',
    opacity: 0,
    transition: {
      duration: 0.33,
      ease: 'easeInOut',
    },
  },
  onscreen: {
    opacity: 100,
    // display: 'block',
    transition: {
      duration: 0.33,
      ease: 'easeInOut',
    },
  },
}

const section: Variants = {
  offscreen: {
    transition: {
      staggerDirection: -1,
      delayChildren: 0.125,
      staggerChildren: 0.125,
      ease: 'easeInOut',
    },
  },
  onscreen: {
    // display: 'block',
    transition: {
      staggerDirection: 1,
      staggerChildren: 0.125,
      when: 'beforeChildren',
      delayChildren: 0.125,
      ease: 'easeInOut',
    },
  },
}
function Home_Landing() {
  return (
    <section className='lander overflow-hidden w-full my-4 flex'>
      <LazyMotion features={domAnimation}>
        <m.nav
          variants={section}
          initial='offscreen'
          whileInView='onscreen'
          viewport={{ once: true, amount: 0.5 }}
          className='w-2/5 xl:w-1/3 max-w-lg bg-egg h-full hidden lg:flex flex-col justify-center py-10 px-16 '
        >
          <m.div variants={item} className='w-24 xl:w-32 2xl:w-52 -mb-6'>
            <div className=' w-full  text-pink fill-current '>
              <Logo_Primary />
            </div>
          </m.div>
          <div className='w-fit '>
            <div className='h-full w-full flex flex-col justify-center ' id='homepage-main-nav'>
              <ul className='relative grid grid-cols-1 gap-y-1 xl:gap-y-2  text-3xl 2xl:text-5xl  lowercase font-bold 2xl:font-extrabold text-pink'>
                {nav_main.map((navItem) => {
                  return (
                    <m.li
                      variants={item}
                      key={navItem.text}
                      className='relative block my-0 py-0 leading-none cursor-pointer duration-150 ease-in-out hover:scale-98 hover:animate-pulse'
                    >
                      <Link hrefLang={'en-US'} href={navItem.url}>
                        {navItem.text}
                      </Link>
                    </m.li>
                  )
                })}
              </ul>
            </div>
          </div>
          <div className=''>
            <m.div variants={item} className='flex justify-center w-full xl:my-2'>
              <Button_Filled
                center={true}
                text={'Start A Project'}
                link={'/onboarding'}
                className={'w-full hover:animate-pulse'}
                bgColor={'peach'}
                textColor={'pink-lighter'}
                chevronDirection='right'
              />
            </m.div>
            <m.div variants={item} className='mx-auto w-full '>
              <Nav_SocialLinks color={'peach'} textSize={'text-xl xl:text-3xl'} />
            </m.div>
          </div>
        </m.nav>
        <m.div
          variants={item}
          className='relative flex-grow bg-blue h-full overflow-hidden player-wrapper'
        >
          <m.div
            className=' z-0 absolute  top-0 left-0 w-full h-full overflow-hidden lottie-blue-dark'
            id='lottie'
            variants={item}
          >
            <LottiePatternPlayer />
          </m.div>
          <m.div variants={item} className=' flex justify-center h-full w-full'>
            <div className='block  self-center w-2/3 lg:w-1/2 max-w-3xl '>
              <LottiePlayer anim={PixelBakery_EasyBakeOven} />
            </div>
          </m.div>
        </m.div>
      </LazyMotion>
    </section>
  )
}
export default Home_Landing
