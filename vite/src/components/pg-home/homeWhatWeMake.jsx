import React from "react";

export default function WhatWeMake(){
    return(
        <section className=" py-24" id="whatwemake">
            <div className="h-full max-w-md sm:max-w-xl lg:max-w-6xl mx-auto">
                <div className="flex justify-between h-full my-16" >
                    <div className="h-full w-1/3">
                        <h2 className=" text-pb-blue-dark mt-0 pt-0">We build beautifuly immersive worlds </h2>
                    </div>
                    <div className="w-3/5 pl-16 flex flex-col  justify-center">
                        <p className="lead  text-wine">Dynamically reconceptualize business schemas whereas ethical meta-services. Monotonectally develop premier synergy and resource maximizing value. Competently redefine extensive information.</p>
                    </div>
                </div>

            </div>   
        </section>
    );
}