import React, {useEffect} from "react";
import servicesList from "../../data/services";
import ServiceCard from "./home-services-card";
import gsap from "gsap";


export default function Services(){
    useEffect(() => {
        let mixerTL = gsap.timeline( { defaults: {  
            y: -30, 
            rotation: gsap.utils.random(0, -15),                        
            stagger: .1,
            ease: "sine.inOut",
          }, repeat:-1, yoyo:true } );

          mixerTL.to('#home-mixer', {
                y: 30,
                rotation: gsap.utils.random(-1, 15),
                duration:4
            },
          );
          
        return () => {};
    }, [])
    return(
        <section className="relative py-16 bg-blue overflow-hidden" id="home-services">
                <div className="relative max-w-6xl mx-auto z-10">
                    <div className=" w-full flex flex-col ">
                        <div className="w-1/2 mb-16">
                            <h2 className="text-blue-dark font-bold">And we're the best at what we do. </h2>
                            <p className="lead text-cream">This is our craft. Our hobbies are our profession.</p>
                        </div>
                        <div className="mx-auto w-full flex flex-wrap justify-between  -mt-2 mb-16">
                            { servicesList.map(services=>(
                                <ServiceCard service={services} key={services.service} />
                            ))}
                        </div>
                        
                        
                    </div>
                </div>
                <div className="absolute w-full max-w-md z-0 top-14 right-10" id="home-mixer">
                    <img
                        src="./src/img/icons/abs/pixelbakery_icon_mixer_abs.svg"
                        id=""
                        className=""
                        alt=""
                    />
                </div>
        </section>

    );
}




