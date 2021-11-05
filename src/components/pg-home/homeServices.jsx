import React from "react";
import servicesList from "./src/data/services";
import ServiceCard from "../components/pg-services/serviceCard";


export default function Services(){
    return(
        <section className=" py-8 bg-blue" id="whatwemake">
                    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-4 lg:py-16 grid grid-cols-1 md:gap-x-8 md:grid-cols-2 lg:gap-16 xl:grid-cols-1">
                        <div className="cols-span-full md:col-span-1 xl:max-w-xl">
                            <h2 className="text-blue-dark">And we're the best at what we do. </h2>
                            <p className="lead text-cream">This is our craft. Our hobbies are our profession.</p>
                        </div>
                        <div className="cols-span-full md:cols-span-1 xl:grid xl:grid-cols-4 xl:gap-6">
                        { servicesList.map(service=>(
                            <ServiceCard service={service} key={service.service} />
                            ))}
                            
                        </div>
                        
                        
                    </div>
        </section>

    );
}




