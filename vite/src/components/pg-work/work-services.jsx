import React from "react";
import ServiceCard from "./work-services-card";
import serviceOfferings from "../../data/services";

export default function Services(){
    return(
        <section className=" py-8" id="whatwemake">
                    <div className="max-w-md md:max-w-6xl mx-auto grid grid-cols-2 gap-12">
                        <div className="col-span-2 md:col-span-1 flex flex-col justify-center">
                            <h2 className="text-blue-dark pr-8">We're a specialized team</h2>
                            <div className="lead text-2xl my-12 text-pink max-w-sm font-extrabold" >
                                <p className="my-6"> we do a few things and we do it well.</p>
                                <p className="my-6">we're like a scalpel;<br/>we operate with precision and intent.</p>
                                <p className="my-6">but, like, keyframes instead of open heart surgery.</p>
                            </div>
                            
                        </div>
                        <div className="col-span-2 md:col-span-1 flex flex-wrap -mt-2 ">
                            { serviceOfferings.map(service=>(
                                <ServiceCard service={service} key={service.service} />
                            ))}
                        </div>
                        {/* <div class="col-span-1 flex flex-wrap -m-2">
                            <div class="h-12 m-2 w-1/2 rounded-md text-white bg-pink-light flex items-center justify-center text-2xl font-semibold ">1</div>
                            <div class="h-12 m-2 w-1/2 rounded-md text-white bg-pink-light flex items-center justify-center text-2xl font-semibold ">2</div>
                            <div class="h-12 m-2 w-1/2 rounded-md text-white bg-pink-light flex items-center justify-center text-2xl font-semibold ">3</div>
                        </div> */}
                        
                        
                    </div>
        </section>

    );
}