import React from 'react';

// import Swiper core and required modules

// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export default () => {
  return (
    <section className=" mb-4 px-4  mx-auto py-8 max-h-screen bg-blue" id="awards">
        <div className="container grid grid-cols-1 md:grid-cols-3 mx-auto py-4 max-w-7xl">
            <div className="col-span-1">
                <h2 className="text-blue-dark">awards and recognition</h2>
                <h4 className=" text-2xl text-cream font-extrabold">swoosh.</h4>
            </div>
            <div className="col-span-2 flex flex-col justify-between mx-auto w-full gap-12">
                <div className="mx-4 px-4">
                    <div>
                        <ul className="text-cream font-body font-extrabold text-xl relative awardslist" id="awardslist1">
                            <li className="my-2 relative award"><a href="">SoulPancake / Price of Free Animation / Silver AIGA Show</a></li>
                            <li className="my-2 award"><a href="">KANEKO / Reality Animation / Gold ADDY</a></li>
                            <li className="my-2 award"><a href=""> Lincoln Calling / Space Traffic Original Song / Silver ADDY</a></li>
                            <li className="my-2 award"><a href="">New Company Entrepreneur Award</a></li>
                            <li className="my-2 award"><a href="">KANEKO / Light / Gold AIGA Show</a></li>
                            <li className="my-2 award"><a href="">Prosper Lincoln Step Up Award 2018 Recipient
    </a></li>
                            <li className="my-2 award"><a href="">Red Roots Yoga / Illustration / Gold ADDY</a></li>
                            <li className="my-2 award"><a href="">Pixel Bakery / Web Design / Gold ADDY
    </a></li>
                            <li className="my-2 award"><a href="">Yoni Gill Photography / Branded Elements / Gold AIGA Show
    </a></li>
                            <li className="my-2 award"><a href="">Red Roots Yoga / Web Design / Silver ADDY</a></li>
                            <li className="my-2 award"><a href="">American Advertising Federation / Music & Sound Design / Silver ADDY
    </a></li>
                            <li className="my-2 award"><a href="">HopCat / Animation / Silver ADDY</a></li>
                            <li className="my-2 award"><a href="">HopCat / Music & Sound Design / Silver ADDY</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mx-auto">
                    <input type="radio" id="awards1" name="awardstab" value="1" />
                    <input type="radio" id="awards1" name="awardstab" value="2" />
                </div>
                

            </div>
    </div>




</section>
    // <Swiper
    //   // install Swiper modules

    //   modules={[ Pagination, Navigation, Scrollbar, A11y]}
    //   spaceBetween={50}
    //   slidesPerView={3}
    //   navigation
    //   pagination={{ clickable: true }}
    //   scrollbar={{ draggable: true }}
    //   onSwiper={(swiper) => console.log(swiper)}
    //   onSlideChange={() => console.log('slide change')}
    // >
    //   <SwiperSlide>Slide 1</SwiperSlide>
    //   <SwiperSlide>Slide 2</SwiperSlide>
    //   <SwiperSlide>Slide 3</SwiperSlide> 
    //   <SwiperSlide>Slide 4</SwiperSlide>
    //   ...
    // </Swiper>
  );
};