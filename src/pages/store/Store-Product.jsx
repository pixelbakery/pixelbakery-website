import React, { useEffect } from "react";
import { gsap } from "gsap";
import Carousel from "../../components/parts/photoCarousel";
import photos from "../../data/about-studioviews";

function ComponentName() {
  useEffect(() => {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
      output.innerHTML = this.value;
    };
    return () => {};
  }, []);

  return (
    <main id='' className='my-4 lander bg-white '>
      <section className='pt-48 mx-auto max-w-6xl h-full grid grid-cols-1 md:grid-cols-2 gap-32'>
        <div className='col-span-1 flex flex-col justify-top px-12'>
          <div className='w-full aspect-h-6'>
            <img
              src='../src/img/pixelbakery-mug-iloveyou.png'
              className='object-cover object-center w-full h-full'
            />
          </div>
          {/* <Carousel
            className='self-center aspect-w-4  aspect-h-9'
            photos={photos}
          /> */}
        </div>
        <div className='col-span-1 flex flex-col justify-top '>
          <h1 className='mt-0 pt-0 mb-3 text-blue-dark leading-none'>
            i love you mug
          </h1>
          <div className='my-3 text-blue font-bold text-3xl'> $14</div>
          <p className='my-3 text-wine text-xl text-opacity-90 leading-relaxed'>
            It’s a mug. It’s a pretty big mug. It says “hi, i love you” on the
            front of it. Or the back of it. It really depends how you hold your
            mug. We’re not here to mug shame you. Maybe you want to show your
            pals that you love them, and maybe some days you need the mug to
            show that it loves you. Holds 3/4ths of a pint of Ben & Jerries.
          </p>
          <div className=''>
            <div class='slidecontainer'>
              <input
                type='range'
                min='1'
                max='100'
                value='50'
                class='slider'
                id='myRange'
              />
              <p>
                Value: <span id='demo'></span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ComponentName;
