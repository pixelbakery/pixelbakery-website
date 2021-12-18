import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper core and required modules
import SwiperCore, { EffectCards } from 'swiper'
SwiperCore.use([EffectCards])

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-cards'
import 'swiper/css/scrollbar'
// import GridCols from '../../../components/Helpers/gridCols'

import Link from 'next/link'
import Image from 'next/image'
import Vimeo from '@u-wave/react-vimeo'

import Pill from '../../../components/parts/Pill'
import Card_Rounded from '../../../components/parts/Card_Rounded'
import ButtonFilled from '../../../components/parts/Button_Filled'

function Carousel() {
  return (
    <Swiper
      pagination={{ clickable: true }}
      slidesPerView={1}
      autoHeight={true}
      grabCursor={true}
      className='max-w-md lg:max-w-5xl  aspect-22/17 '
      navigation
      //  loop={true}
      effect={'cards'}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      //  onSlideChange={() => console.log('slide change')}
      //  onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_01.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_02.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_03.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_04.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_05.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_06.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_07.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_08.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_09.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='relative'>
          <Image
            src='/img/case-studies/sola-tiny-chef/Pixel-Bakery_Sola_TinyChef_Storyboards_10.jpg'
            layout='responsive'
            width={'2016px'}
            height={'1224px'}
            quality={100}
            blurDataURL='true'
            //   objectFit='contain'
            alt='SOLA animation storyboards'
          />
        </div>
      </SwiperSlide>
    </Swiper>
  )
}

function SolaTinyChef() {
  return (
    <main className='overflow-x-hidden'>
      <section className='pb-12 px-8 pt-40 pt-lg:pt-48  my-4  bg-white' id=''>
        <div className='mx-auto max-w-6xl'>
          <div className='font-extrabold text-pink text-2xl mb-0 pb-0'>SOLA</div>
          <h1 className='text-blue-dark text-6xl leading-none mb-5 mt-0 pt-0'>Tiny Chef Magic</h1>
          <p className='py-6  mb-6 text-wine text-xl max-w-xs font-medium text-opacity-50'>
            How animation brought to life a Tiny Chef with the ability to create keto-friendly,
            carb-conscious deliciousness that is SOLA bread.
          </p>
          <div className='relative block'>
            <Vimeo video='640466563' autoplay={false} showPortrait responsive={true} />
          </div>
          <div className='mx-auto w-40 opacity-75 mt-20 mb-6'>
            <Image
              src={'/img/client-logos/Black-Sola-Logo.png'}
              layout='responsive'
              width={'850px'}
              blurDataURL='true'
              height={'208px'}
            />
          </div>
          <h2 className='mt-0 pt-0 mx-auto text-4xl max-w-sm text-center'>
            Bringing a Tiny Chef with big, keto-friendly ideas to life.
          </h2>
          <p className='mx-auto py-4  mb-4 text-wine text-md max-w-sm text-opacity-75'>
            The SOLA Company is a low-carb, low-sugar, keto-friendly brand that came to Pixel Bakery
            looking to make an animated explainer video showcasing their bread. We had previously
            worked with SOLA in the live-action realm and were extremely excited to see what we
            could do for them within another specialty of ours – animation.
          </p>
        </div>
      </section>

      <section className=' my-4 py-12'>
        <div className='mx-auto md:max-w-6'>
          <h3 className='text-center text-2xl text-pink mb-3'>here&apos;s what we did</h3>
          <div className='flex flex-row justify-center gap-3 flex-wrap'>
            <div className='flex-grow'>
              <Link href='/' passHref>
                <Pill
                  text={'creative concepting'}
                  bgColor={'blue-light'}
                  textColor={'blue-dark'}
                  size={'md'}
                />
              </Link>
            </div>
            <div className='flex-grow'>
              <Link href='/' passHref>
                <Pill
                  text={'2d animation'}
                  bgColor={'blue-light'}
                  textColor={'blue-dark'}
                  size={'md'}
                />
              </Link>
            </div>

            <Link href={'/'} passHref>
              <Pill
                text={'scripting & storyboarding'}
                bgColor={'blue-light'}
                textColor={'blue-dark'}
                size={'md'}
              />
            </Link>

            <Link href='/' passHref>
              <Pill
                text={'video production'}
                bgColor={'blue-light'}
                textColor={'blue-dark'}
                size={'md'}
              />
            </Link>
          </div>
        </div>
      </section>

      <section className='bg-blue-dark py-16 my-4'>
        <div className='mx-auto max-w-sm md:max-w-6xl'>
          {/* <GridCols columns={6} gap={4} /> */}
          <h2 className=' text-pink-light'>Description</h2>
          <p className='mx-auto text-pink font-semibold text-xl'>
            The live-action portion of this project consisted of hiring a production crew to assist
            in bringing the Tiny Chef Magic to life. The video production team included a director,
            gaffer, grip, assistant camera, and a FOOD STYLIST (how legit). Maria Smal, Pixel
            Bakery’s social media manager, was pegged as the perfect candidate to be cast as the
            homeowner for the video.
          </p>
        </div>
      </section>

      <section className='my-4 py-12'>
        <div className='mx-auto md:max-w-6xl'>
          <div className='w-full  lg:flex justify-between'>
            <div className='w-full lg:w-2/5'>
              <h2 className='text-center lg:text-left mt-0 pt-0 mx-auto text-4xl max-w-sm '>
                concepting & pre-production
              </h2>
            </div>
            <div className='w-full lg:w-1/2'>
              <p className='mx-auto py-4  mb-4 text-wine text-md max-w-sm text-opacity-75'>
                Energistically deliver client-focused models with sustainable markets.
                Enthusiastically maximize prospective networks and parallel value. Holisticly extend
                error-free applications vis-a-vis corporate services. Interactively initiate
                impactful process improvements vis-a-vis value-added ROI. Enthusiastically synergize
                magnetic markets before enabled human capital.
              </p>
            </div>
          </div>
        </div>
        <div className=''>
          <Carousel />
        </div>
      </section>

      <section className='my-4 py-12'>
        <div className='mx-auto md:max-w-6xl'>
          <h2 className='text-center lg:text-left mt-0 pt-0 mx-auto text-4xl max-w-sm '>
            {' '}
            Production
          </h2>
          <p className='mx-auto py-4  mb-4 text-wine text-md max-w-sm text-opacity-75'>
            The live-action portion of this project consisted of hiring a production crew to assist
            in bringing the Tiny Chef Magic to life. The video production team included a director,
            gaffer, grip, assistant camera, and a FOOD STYLIST (how legit). Maria Smal, Pixel
            Bakery’s social media manager, was pegged as the perfect candidate to be cast as the
            homeowner for the video.
          </p>
        </div>

        <div className='mx-auto max-w-6xl grid grid-cols-12 gap-4'>
          <div className='col-span-10 col-start-2 lg:col-span-8 lg:col-start-3  drop-shadow-xl'>
            <div className='relative'>
              <Image
                src='/img/case-studies/sola-tiny-chef/pixel-bakery_SOLA_TinyChef_BTS_01.png'
                layout='responsive'
                width='2176px'
                height='1632px'
                blurDataURL='true'
                className='object-center rounded-md '
              />
            </div>
          </div>
          <div className='col-span-8 mt-8 lg:mt-16 drop-shadow-lg'>
            <div className='relative drop-shadow-lg'>
              <Image
                src='/img/case-studies/sola-tiny-chef/pixel-bakery_SOLA_TinyChef_BTS_02.png'
                layout='responsive'
                width='2176px'
                height='1632px'
                className='object-center rounded-md drop-hadow-sm '
                blurDataURL='true'
              />
            </div>
          </div>
          <div className='col-span-7 lg:col-span-6 col-end-12 lg:col-end-13 mt-8 lg:mt-16 lg:pt-64'>
            <div className='relative'>
              <Image
                src='/img/case-studies/sola-tiny-chef/pixel-bakery_SOLA_TinyChef_BTS_03.png'
                layout='responsive'
                width='2176px'
                height='1632px'
                blurDataURL={'true'}
                className='object-center rounded-md shadow-lg'
              />
            </div>
          </div>
          <div className='col-span-7 lg:col-span-6 col-start-3 mt-10 lg:mt-16 '>
            <div className='relative'>
              <Image
                src='/img/case-studies/sola-tiny-chef/pixel-bakery_SOLA_TinyChef_BTS_04.png'
                layout='responsive'
                width='2176px'
                height='1632px'
                className='object-center rounded-md shadow-md'
              />
            </div>
          </div>
        </div>
      </section>
      <section className='relative my-4 bg-white pt-12 pb-8'>
        <div className='mx-auto md:max-w-6xl h-full '>
          <div className='pt-8 absolute top-0 left-0 w-full'>
            <h2 className=' text-center lg:text-left mt-0  mx-auto text-6xl max-w-sm '>
              Post-Production
            </h2>
          </div>

          <div className='relative top-0'>
            <video muted autoPlay loop preload='true' className='scale-110 '>
              <source
                type='video/mp4; codecs="hvc1"'
                src='/img/case-studies/sola-tiny-chef/SOLA_TinyChef_WalkOff-1.mov'
              />
              <source
                type='video/webm'
                src='/img/case-studies/sola-tiny-chef/SOLA_TinyChef_WalkOff_VP9.webm'
              />
            </video>
          </div>
        </div>
        <div className='mx-auto md:max-w-6xl h-full'>
          <p className='mx-auto py-4  mb-4 text-wine text-md max-w-sm text-opacity-75'>
            Energistically reconceptualize accurate methods of empowerment and efficient platforms.
            Credibly envisioneer scalable solutions before team building action items. Rapidiously
            predominate magnetic convergence whereas efficient content. Intrinsicly streamline
            interactive products via cross functional processes. Continually target excellent
            opportunities after customer directed.
          </p>
          <div className='w-full mx-auto my-12'>
            <video autoPlay playsInline muted loop className='mx-auto max-w-3xl'>
              <source
                src={'/img/case-studies/sola-tiny-chef/pixel-bakery_sola-tiny-chef-animation.mp4'}
              />
            </video>
          </div>
        </div>
      </section>
      <section className='my-4 py-12'>
        <div className='mx-auto max-w-md   lg:max-w-6xl'>
          <h2 className='text-left mt-0 pt-0 text-4xl max-w-md '> credits</h2>
          <div className=' lg:mx-0 flex lg:grid lg:grid-cols-12 max-w-md lg:max-w-full '>
            <div className='mx-auto  w-1/2 lg:w-full  lg:col-span-5 lg:col-start-3'>
              <ul className='hidden lg:block list-none text-wine text-sm lg:text-md text-opacity-75 '>
                <Link href={'https://www.imdb.com/name/nm10696864/'}>
                  <a className='underline'>
                    Maria Smal –<span className='italic '> Disgruntled Baker</span>{' '}
                  </a>
                </Link>
                <li className='my-3'>Jordan Lambrecht - Director </li>
                <li className='my-3'>Michael Hennings - Director of Photography </li>
                <li className='my-3'> Karley Johnson - Producer </li>
                <li className='my-3'>Cody Jones - First Assistant Camera </li>
                <li className='my-3'> Madeline Christensen – scriptwriter</li>
              </ul>
              <ul className='mx-auto lg:hidden w-content list-none text-wine text-sm lg:text-md text-opacity-75 '>
                <li className='my-3'>
                  <Link href={'https://www.imdb.com/name/nm10696864/'}>
                    <a className='underline'>
                      Maria Smal <br />
                    </a>
                  </Link>
                  <span className='italic '> Disgruntled Baker</span>{' '}
                </li>
                <li className='my-3'>
                  Jordan Lambrecht <br /> <span className='italic'>Director</span>{' '}
                </li>
                <li className='my-3'>
                  Michael Hennings <br /> <span className='italic'>Director of Photography</span>{' '}
                </li>
                <li className='my-3'>
                  Karley Johnson <br /> <span className='italic'>Executive Producer</span>{' '}
                </li>
                <li className='my-3'>
                  Cody Jones <br /> <span className='italic'>First Camera Assistant</span>{' '}
                </li>
                <li className='my-3'>
                  Madeline Christensen <br /> <span className='italic'>Scriptwriter</span>{' '}
                </li>
              </ul>
            </div>
            <div className='mx-auto flex-shrink w-1/2 lg:w-full lg:col-span-5 lg:col-start-3'>
              <ul className='hidden lg:block list-none text-wine text-sm lg:text-md text-opacity-75 '>
                <Link href={'https://www.imdb.com/name/nm10696864/'}>
                  <a className='underline'>
                    Maria Smal –<span className='italic '> Disgruntled Baker</span>{' '}
                  </a>
                </Link>
                <li className='my-3'>
                  Daniel Hinz - <span className='italic'>Animation Lead </span>
                </li>
                <li className='my-3'>
                  Aaron Smith -<span className='italic'> Gaffer</span>{' '}
                </li>
                <li className='my-3'>
                  Scott Pittock - <span className='italic'>Grip</span>{' '}
                </li>
                <li className='my-3'>
                  Melissa Young - <span className='italic'>Food Stylist</span>{' '}
                </li>
                <li className='my-3'>
                  Hannah Klemme - <span className='italic'>Producction Asssistant</span>{' '}
                </li>
                <li className='my-3'>
                  Miranda Hussey – <span className='italic'>Production Assisstant</span>
                </li>
              </ul>
              <ul className='mx-auto w-fit lg:hidden list-none text-wine text-sm lg:text-md text-opacity-75 '>
                <li className='my-3'>
                  Daniel Hinz <br />
                  <span className='italic'>Animation Lead </span>
                </li>
                <li className='my-3'>
                  Aaron Smith <br />
                  <span className='italic'>Gaffer </span>
                </li>
                <li className='my-3'>
                  Scott Pittock <br />
                  <span className='italic'>Grip</span>
                </li>
                <li className='my-3'>
                  Melissa Young <br />
                  <span className='italic'>Food Stylist</span>
                </li>
                <li className='my-3'>
                  Hannah Klemme <br />
                  <span className='italic'>Production Assistant</span>
                </li>
                <li className='my-3'>
                  Miranda Hussey
                  <br />
                  <span className='italic'>Production Assistant</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='my-4 bg-yellow pt-12'>
        <div className='mx-auto max-w-md lg:max-w-6xl'>
          <h2 className='text-left mt-0 pt-0 text-4xl max-w-md '> other sola projects</h2>
          <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-24'>
            <div className='-mb-12 drop-shadow-md rounded-sm overflow-hidden'>
              <Card_Rounded
                link={'/'}
                aspectW={'16'}
                aspectY={'9'}
                img={'/img/placeholder01.png'}
                imgAlt={'SOLA Rideshare Overshare Video Production'}
                tags={['video production']}
                head={'Rideshare Overshare'}
                subhead={'SOLA'}
                tagBgColor={'cream'}
                tagTextColor={'wine'}
              />
            </div>
          </div>
        </div>
      </section>
      <section className='mb-4 mt-24 py-16 bg-pink-light'>
        <div className='mx-auto max-w-md lg:max-w-6xl'>
          <h2 className='text-center lg:text-left mt-0 pt-0 text-4xl max-w-md '>
            Get a fancy case study page like this
          </h2>
          <p className='mx-auto py-4  mb-4 text-wine text-md max-w-sm text-opacity-75'>
            Schedule a meeting with Jordan and he’ll buy you a beer or take you out for coffee. We
            believe in building long-term relationships with our clients, so we’re never pushy or
            “car salesman-y”.
          </p>
          <div className='my-8 py-3  flex flex-row justify-center'>
            <ButtonFilled
              text={'Become a Client'}
              link={'/onboarding'}
              textColor={'text-pink-light'}
              bgColor={'bg-pink'}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
export default SolaTinyChef
