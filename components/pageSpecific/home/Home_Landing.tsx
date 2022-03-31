import Link from 'next/link'
import Button_Filled from '@parts/Button_Filled'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import nav_main from '@data/nav_main'
import Logo_Primary from '@images/logo_primary'
import Nav_SocialLinks from '@nav/Nav_SocialLinks'
const Lottie_Blue_Dark = dynamic(() => import('@pageHeaders/Lottie_Blue_Dark'), { ssr: true })

function Home_Landing() {
  return (
    <section className='lander overflow-hidden w-full my-4 flex'>
      <nav className='w-2/5 xl:w-1/3 max-w-lg bg-egg h-full hidden lg:flex flex-col justify-center py-10 px-16 '>
        <div className='w-24 xl:w-32 2xl:w-52 -mb-6'>
          <div className=' w-full  text-pink fill-current '>
            <Logo_Primary className='' />
          </div>
        </div>
        <div className='w-fit '>
          <div className='h-full w-full flex flex-col justify-center ' id='homepage-main-nav'>
            <ul className='grid grid-cols-1 gap-y-1 xl:gap-y-2  text-3xl 2xl:text-5xl  lowercase font-bold 2xl:font-extrabold text-pink'>
              {nav_main.map((navItem) => {
                return (
                  <li
                    key={navItem.text}
                    className='block my-0 py-0 leading-none cursor-pointer duration-150 ease-in-out hover:scale-98'
                  >
                    <Link href={navItem.url}>
                      <a className=' '>{navItem.text}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className=''>
          <div className='flex justify-center w-full xl:my-2'>
            <Button_Filled
              center={true}
              text={'Start something wonderful'}
              link={'/onboarding'}
              bgColor={'peach'}
              textColor={'pink-light'}
              chevronDirection='right'
            />
          </div>
          <div className='mx-auto w-full '>
            <Nav_SocialLinks color={'peach'} textSize={'text-xl xl:text-3xl'} />
          </div>
        </div>
      </nav>
      <div className='relative flex-grow bg-blue h-full overflow-hidden'>
        <div
          className=' z-0 absolute  top-0 left-0 w-full h-full overflow-hidden lottie'
          id='lottie'
        >
          <Lottie_Blue_Dark />
        </div>
        <div className=' flex flex-col justify-center h-full w-full '>
          <div className='relative  self-center w-full max-w-3xl h-full'>
            <div className=''>
              <Image
                layout='fill'
                objectFit='contain'
                blurDataURL='true'
                src={'/img/pixelbakery_boxlogo.svg'}
                alt='Pixel Bakery Design Studio'
                className='object-enter'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Home_Landing
