import React from "react";

export default function WhatWeMake(){
    return(
        <section className=" py-8" id="whatwemake">
            <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto">
                <div className="grid grid-cols-1 gap-x-2 lg:grid-cols-2 py-8 px-8 lg:px-12 lg:py-16" >
                    <div className="lg:pr-3">
                        <h2 className=" text-pb-blue-dark mt-0 pt-0">We build beautifuly immersive worlds </h2>
                    </div>
                    <div className="">
                        <p className="lead  text-wine">Dynamically reconceptualize business schemas whereas ethical meta-services. Monotonectally develop premier synergy and resource maximizing value. Competently redefine extensive information.</p>
                    </div>
                </div>

            </div>   
        </section>
    );
}