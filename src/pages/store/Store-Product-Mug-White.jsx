import React, { useEffect } from "react";
import { gsap } from "gsap";

import ProductShotWebm from "../../img/store/pixelbakery-mug-white.webm";
import ProductShot from "../../img/store/pixelbakery-mug-white.png";
function WhiteMug() {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <main id='' className='my-4 lander bg-white '>
      <section className='pt-48 mx-auto max-w-6xl h-full grid grid-cols-1 md:grid-cols-2 gap-16'>
        <div className='col-span-1 flex flex-col justify-top'>
          <div className=' aspect-w-4 aspect-h-3 rounded-md overflow-hidden'>
            <video
              muted
              autoPlay
              loop
              poster={ProductShot}
              src={ProductShotWebm}
              className='object-cover object-center w-full h-full rounded-md'
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
            show that it loves you. Holds 3/4ths of a pint of Ben & Jerry's.
          </p>
          <form>
            <input type='number' value='' />
            <input type='submit' value='Add to Cart' />
          </form>
        </div>
      </section>
    </main>
  );
}

export default WhiteMug;
