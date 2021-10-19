import React from "react";


export default function App(){
    return(
     




        <div><section className=" my-4 py-8 bg-cream flex justify-around overflow-hidden mx-auto clients">
            <div className="px-12 mx-auto lg:px-24 py-4 lg:py-16 grid  grid-cols-6">
                <div className="col-span-2">
                    <h1 className="text-peach inline-block align-text-bottom">Our lovely clients</h1>
                </div>
                <div className="col-span-4  flex justify-between">
                    <div className=" w-auto wrapper-clients overflow-hidden">

                        <div className="boxes " id="boxCol">

                            <div className="box absolute w-full ">
                                <div className="client-box-img h-full overflow-hidden ">
                                    <img src="./src/img/cclients/pixelbakery_client_daake.png" className="object-contain object-center h-full mx-auto" />
                                </div>
                            </div>
                        
                            <div className="box absolute w-full ">
                                <div className="client-box-img h-full overflow-hidden ">
                                    <img src="./src/img/cclients/pixelbakery_client_firsthoney.png" className="object-contain object-center h-full mx-auto" />
                                </div>
                            </div>
                      
                            <div className="box absolute w-full ">
                                <div className="client-box-img h-full overflow-hidden ">
                                    <img src="./src/img/cclients/pixelbakery_client_hudl.png" className="object-contain object-center h-full mx-auto" />
                                </div>
                            </div>
                     
                            <div className="box absolute w-full ">
                                <div className="client-box-img h-full overflow-hidden ">
                                    <img src="./src/img/cclients/pixelbakery_client_kaneko.png" className="object-contain object-center h-full mx-auto" />
                                </div>
                            </div>
              
                            <div className="box absolute w-full ">
                                <div className="client-box-img h-full overflow-hidden ">
                                    <img src="./src/img/cclients/pixelbakery_client_kelty.png" className="object-contain object-center h-full mx-auto" />
                                </div>
                            </div>
            
                            <div className="box absolute w-full ">
                                <div className="client-box-img h-full overflow-hidden ">
                                    <img src="./src/img/cclients/pixelbakery_client_pupbox.png" className="object-contain object-center h-full mx-auto" />
                                </div>
                            </div>
                        </div>
                        <div className="scrim"> </div>
                    </div>
                </div>
            </div>


        </section>
        </div> 

);
}
