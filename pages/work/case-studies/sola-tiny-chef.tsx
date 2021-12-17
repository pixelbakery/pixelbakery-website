import React from 'react'
import GridCols from '../../../components/Helpers/gridCols'

import Link from 'next/link'
import Image from 'next/image'
import Vimeo from '@u-wave/react-vimeo'
import { Sola } from '../../../components/Images/ClientLogos'
import Pill from '../../../components/parts/Pill'
import Card_Rounded from '../../../components/parts/Card_Rounded'
import ButtonFilled from '../../../components/parts/Button_Filled'

function SolaTinyChef() {
  return (
    <main className=''>
      <section className='pb-12 pt-48  my-4  bg-white' id=''>
        <div className='mx-auto max-w-6xl'>
          <div>Sola</div>
          <h1>Tiny Chef Magic</h1>
          <p>
            How animation brought to life a Tiny Chef with the ability to create keto-friendly,
            carb-conscious deliciousness that is SOLA bread.safas
          </p>
          <div className='relative block'>
            <Vimeo video='640466563' autoplay={false} showPortrait responsive={true} />
          </div>
          <div>
            <Sola />
          </div>
          <h2>Bringing a Tiny Chef with big, keto-friendly ideas to life.</h2>
          <p>
            The SOLA Company is a low-carb, low-sugar, keto-friendly brand that came to Pixel Bakery
            looking to make an animated explainer video showcasing their bread. We had previously
            worked with SOLA in the live-action realm and were extremely excited to see what we
            could do for them within another specialty of ours – animation.
          </p>
        </div>
      </section>

      <section className='my-4 py-12'>
        <div className='mx-auto md:max-w-6'>
          <h3>here&apos;s what we did</h3>
          <ul className='relative block'>
            <li>
              <Link href='/' passHref>
                <Pill
                  text={'creative concepting'}
                  bgColor={undefined}
                  textColor={undefined}
                  size={undefined}
                />
              </Link>
            </li>
            <li>
              <Link href='/' passHref>
                <Pill
                  text={'2d animation'}
                  bgColor={undefined}
                  textColor={undefined}
                  size={undefined}
                />
              </Link>
            </li>
            <li>
              <Link href={'/'} passHref>
                <Pill
                  text={'scripting & storyboarding'}
                  bgColor={undefined}
                  textColor={undefined}
                  size={undefined}
                />
              </Link>
            </li>

            <li>
              <Link href='/' passHref>
                <Pill
                  text={'video production'}
                  bgColor={undefined}
                  textColor={undefined}
                  size={undefined}
                />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className='my-4'>
        <div className='mx-auto md:max-w-6xl'>
          <GridCols columns={6} gap={4} />
          <h2>Description 02 / pull quote /testimonial</h2>
          <p>
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
          <div className='w-full  flex justify-between'>
            <div className='w-2/5'>
              <h2>connecting & pre-production</h2>
            </div>
            <div className='w-1/2'>
              <p className=''>
                Energistically deliver client-focused models with sustainable markets.
                Enthusiastically maximize prospective networks and parallel value. Holisticly extend
                error-free applications vis-a-vis corporate services. Interactively initiate
                impactful process improvements vis-a-vis value-added ROI. Enthusiastically synergize
                magnetic markets before enabled human capital.
              </p>
            </div>
          </div>
        </div>
        <div className='w-full'>
          <h2>STORYBOARDS GO HERE</h2>
        </div>
      </section>
      <section className='my-4 py-12'>
        <div className='mx-auto md:max-w-6xl'>
          <h2 className='text-center'> Production</h2>
          <p>
            The live-action portion of this project consisted of hiring a production crew to assist
            in bringing the Tiny Chef Magic to life. The video production team included a director,
            gaffer, grip, assistant camera, and a FOOD STYLIST (how legit). Maria Smal, Pixel
            Bakery’s social media manager, was pegged as the perfect candidate to be cast as the
            homeowner for the video.
          </p>
        </div>

        <div className='mx-auto max-w-6xl grid grid-cols-12 gap-4'>
          <div className='col-span-8 col-start-3  drop-shadow-xl'>
            <div className='relative'>
              <Image
                src='/img/case-studies/sola-tiny-chef/pixel-bakery_SOLA_TinyChef_BTS_01.png'
                layout='responsive'
                width='2176px'
                height='1632px'
                className='object-center rounded-md '
              />
            </div>
          </div>
          <div className='col-span-6 mt-16 drop-shadow-lg'>
            <div className='relative drop-shadow-lg'>
              <Image
                src='/img/case-studies/sola-tiny-chef/pixel-bakery_SOLA_TinyChef_BTS_02.png'
                layout='responsive'
                width='2176px'
                height='1632px'
                className='object-center rounded-md drop-hadow-sm '
              />
            </div>
          </div>
          <div className='col-span-5 col-end-13 mt-16 pt-64'>
            <div className='relative'>
              <Image
                src='/img/case-studies/sola-tiny-chef/pixel-bakery_SOLA_TinyChef_BTS_03.png'
                layout='responsive'
                width='2176px'
                height='1632px'
                className='object-center rounded-md shadow-lg'
              />
            </div>
          </div>
          <div className='col-span-6 col-start-3 mt-16 '>
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
      <section className='my-4'>
        <div className='absolute z-10 w-full h-full overflow-hidden saturate-200 blur-md'></div>
        <div className='mx-auto md:max-w-6xl'>
          <h2>Post-Production</h2>
          <p>
            Energistically reconceptualize accurate methods of empowerment and efficient platforms.
            Credibly envisioneer scalable solutions before team building action items. Rapidiously
            predominate magnetic convergence whereas efficient content. Intrinsicly streamline
            interactive products via cross functional processes. Continually target excellent
            opportunities after customer directed.
          </p>
          <video
            controls={false}
            autoPlay
            muted
            playsInline
            className='aspect-w-16 aspect-h-9 w-full '
          >
            <source src='/img/case-studies/sola-tiny-chef/SOLA_TinyChefAlpha_v01.mp4' />
          </video>
        </div>
      </section>
      <section className='my-4'>
        <div className='mx-auto max-w-6xl'>
          <h2> credits</h2>
          <div className='grid grid-cols-12 '>
            <div className='col-span-5 col-start-3'>
              <ul className='list-none text-wine text-md text-opacity-75 '>
                <li className='my-3'>Maria Smal - Main Actress </li>
                <li className='my-3'>Jordan Lambrecht - Director </li>
                <li className='my-3'>Michael Hennings - Director of Photography </li>
                <li className='my-3'> Karley Johnson - Producer </li>
                <li className='my-3'>Cody Jones - First Assistant Camera </li>
                <li className='my-3'> Madeline Christensen – scriptwriter</li>
              </ul>
            </div>
            <div className='col-span-5'>
              <ul className='list-none text-wine text-md text-opacity-75 '>
                <li className='my-3'>Maria Smal - Main Actress </li>
                <li className='my-3'>Jordan Lambrecht - Director </li>
                <li className='my-3'>Michael Hennings - Director of Photography </li>
                <li className='my-3'> Karley Johnson - Producer </li>
                <li className='my-3'>Cody Jones - First Assistant Camera </li>
                <li className='my-3'> Madeline Christensen – scriptwriter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='my-4 bg-yellow'>
        <div className='mx-auto max-w-6xl'>
          <h2> other sola projects</h2>
          <div className='grid grid-cols-3 gap-24'>
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
      <section className='mb-4 mt-24 py-16 bg-pink'>
        <div className='mx-auto max-w-6xl'>
          <h2>Get your work on our site</h2>
          <p>
            Schedule a meeting with Jordan and he’ll buy you a beer or take you out for coffee. We
            believe in building long-term relationships with our clients, so we’re never pushy or
            “car salesman-y”.
          </p>
          <ButtonFilled text={'Become a Client'} link={'/onboarding'} color={'pink-light'} />
        </div>
      </section>
    </main>
  )
}
export default SolaTinyChef
