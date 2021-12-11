import React from 'react'
import Link from 'next'
import Btn from '../components/parts/button-filled'
import Pill from '../components/parts/pill'

export default function Recipe() {
  return (
    <main className=' mt-44'>
      <article className='' id='blog-body'>
        <section className='md:max-w-3xl mx-auto '>
          <div className='' id='blog-body-intro'>
            <div className='mb-6'>
              <Pill text={'Announcements'} className=' my-6' />
              <h1 className='text-blue-dark text-6xl'>
                Recipe for Success: Mix Adaptability and Confidence (together, in a medium sized
                bowl)
              </h1>
              <div
                className='my-3 inline-block text-xl font-semibold text-wine opacity-80'
                role='doc-subtitle '
              >
                a guide to becoming an after effects master
              </div>
            </div>
            <div className='w-full flex mt-12 mb-8'>
              <Link href={'/jordan_lambrecht'}>
                <img
                  className='rounded-full h-16 w-16 flex items-center justify-center'
                  src='./src/img/author2.png'
                  alt=''
                />
              </Link>
              <div className='ml-8 h-16 flex flex-col justify-center'>
                <div className='text-sm text-wine'>
                  November 12, 2021 <span className='mx-4'>|</span>Read Time: 4 minutes
                </div>
                <div className='text-sm text-wine'>
                  Written by the one and only{' '}
                  <Link href='/' className='text-peach'>
                    Bergen Johnston
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className=' mb-24 md:max-w-6xl mx-auto  '>
          <img className='apsect-w-16 aspect-h-9' src='./src/img/blogheader.png' alt='' />
        </div>

        <section className='my-12 md:max-w-3xl mx-auto' id='blog-body-guts '>
          <p className='text-lg text-wine my-3 pb-3'>
            When I decided at eighteen years old what I should probably do with the rest of my life,
            I settled on a career as a journalist. Fast forward a year, and I decided that really
            wasn’t the thing for me–I wanted to design, too. Down the graphic design rabbit hole I
            blindly fell, but I drifted towards projects entailing ambient, (slightly weird)
            immersive video, music, and finally, my last semester of college, I took an Adobe After
            Effects introductory class. Only ten short months ago I applied at Pixel Bakery with
            very little experience animating, but something about motion design clicked with me. It
            felt like something I could obsessively throw myself into. That’s always a good feeling.
          </p>

          <p className='text-lg text-wine my-3 pb-3'>
            Now, I work with motion design almost daily at our little studio. I animate for hours on
            end and only *sometimes* want to pull my hair out and thwack my head against the desk in
            frustration. Trust me, it wasn’t always this way!
          </p>

          <p className='text-lg text-wine my-3 pb-3'>
            Here are ten tips for anyone wanting to plunge into the daunting, fascinating,
            infuriating, yet always rewarding world of Adobe After Effects and motion design.
          </p>

          <h2 className='text-wine text-4xl pt-6'>Set a goal.</h2>

          <p className='text-lg text-wine my-3 pb-3'>
            This is easy if you’re learning on the job–you probably have a project you need to
            complete. But if you’re learning on your own time, it’s important to have a goal in
            mind. Something like animating a character you designed to walk across the screen and
            wave, or creating a moving logo reveal for your brand. Don’t give up until you’re
            satisfied with the end result!
          </p>

          <h2 className='text-wine text-4xl pt-6'>Be patient with yourself.</h2>

          <p className='text-lg text-wine my-4 pb-3'>
            Learning something new takes time. Even if you’re a whiz at other Adobe programs, you
            might not intuitively understand everything right away when it comes to animating in
            Adobe After Effects. Let yourself be a beginner, and don’t let frustration or confusion
            overwhelm you from giving up on your goal.
          </p>

          <h2 className='text-wine text-4xl pt-6'>Take things one step at a time.</h2>

          <p className='text-lg text-wine my-3 pb-3'>
            You’re going to have to start somewhere. Make a list of the things you need to learn or
            do in order to finish your goal project and start at the top. You might be surprised how
            quickly you can tick off each smaller task within the larger project–you can find a
            tutorial online for even the most specific questions. Tackling each element one by one
            is the best way to learn Adobe After Effects–you’ll start to notice that the skills you
            learn along the way will start building on each other, just like learning an instrument
            or a language.
          </p>
        </section>
      </article>
      <section className='my-4 py-12 max-w-3xl mx-auto'>
        <h3 className='text-blue font-semibold text-3xl'>Tags</h3>
        <ul className='list-none my-4 pb-8 '>
          <li className='inline text-pink bg-pink-light px-2 py-2 rounded mr-2'>adobe</li>
          <li className='inline text-pink bg-pink-light px-2 py-2 rounded mx-2'>after effects</li>
          <li className='inline text-pink bg-pink-light px-2 py-2 rounded mx-2'>education</li>
        </ul>
        <Btn link={'/recipes'} text='we got more' color={'bg-blue'} className='my-6' />
      </section>
      <section className='py-8' id='blog-comments '>
        <div className='max-w-3xl mx-auto p'>
          <h2 className='text-blue my-3 text-4xl'>Thoughts</h2>
          Comment section goes here
        </div>
      </section>
      <section className='bg-cream py-12 my-4' id='blog-related'>
        <div className='md:max-w-6xl mx-auto'>
          <h3 className='text-pink text-4xl'>Related Posts</h3>
          <div className='grid grid-cols-3 gap-8 my-8 '>
            <Link href={'/'}>
              <article className='bg-white w-full aspect-h-4 pb-6 rounded transform hover:scale-95'>
                <div className=' w-full aspect-h-9 p-2 mb-4 rounded-md overflow-hidden'>
                  <img
                    src='./src/img/blogheader.png'
                    className='w-full h-full object-cover object-center rounded'
                  />
                </div>
                <h3 className='text-wine text-4xl px-4'>Other Post</h3>
                <h4 className='text-wine opacity-60 px-4 mt-4'>This is a subheader</h4>
                <p className='text-wine my-4 py-2 px-4'>
                  yasdgasd asdfas df asdf asdfasdfj lakhw asdfasdfga{' '}
                </p>
              </article>
            </Link>
            <Link href={'/'}>
              <article className='bg-white w-full aspect-h-4 pb-6 rounded '>
                <div className=' w-full aspect-h-9 p-2 mb-4 rounded-md overflow-hidden'>
                  <img
                    src='./src/img/blogheader.png'
                    className='w-full h-full object-cover object-center rounded'
                  />
                </div>
                <h3 className='text-wine text-4xl px-4'>Other Post</h3>
                <h4 className='text-wine opacity-60 px-4 mt-4'>This is a subheader</h4>
                <p className='text-wine my-4 py-2 px-4'>
                  yasdgasd asdfas df asdf asdfasdfj lakhw asdfasdfga{' '}
                </p>
              </article>
            </Link>
            <Link href={'/'}>
              <article className='bg-white w-full aspect-h-4 pb-6 rounded '>
                <div className=' w-full aspect-h-9 p-2 mb-4 rounded-md overflow-hidden'>
                  <img
                    src='./src/img/blogheader.png'
                    className='w-full h-full object-cover object-center rounded'
                  />
                </div>
                <h3 className='text-wine text-4xl px-4'>Other Post</h3>
                <h4 className='text-wine opacity-60 px-4 mt-4'>This is a subheader</h4>
                <p className='text-wine my-4 py-2 px-4'>
                  yasdgasd asdfas df asdf asdfasdfj lakhw asdfasdfga{' '}
                </p>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
