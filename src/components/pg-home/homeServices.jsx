import React from "react";
import servicesList from "../../data/services";
import ServiceCard from "./home-services-card";


export default function Services(){
    return(
        <section className="py-16 bg-blue " id="services">
                <div className="max-w-6xl mx-auto">
                    <div className=" w-full flex flex-col ">
                        <div className="w-1/2 mb-16">
                            <h2 className="text-blue-dark">And we're the best at what we do. </h2>
                            <p className="lead text-cream">This is our craft. Our hobbies are our profession.</p>
                        </div>
                        <div className="mx-auto w-full flex flex-wrap justify-between  -mt-2 mb-16">
                            { servicesList.map(services=>(
                                <ServiceCard service={services} key={services.service} />
                            ))}
                        </div>
                        
                        
                    </div>
                </div>
        </section>

    );
}




