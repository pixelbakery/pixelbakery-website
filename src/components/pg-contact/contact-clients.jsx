import React from "react";
import Button from "../parts/button-filled"
import {Link} from 'react-router-dom';  

function Onboarding(){
     return(


          <section className=" my-4 bg-pink py-32  " id="onboarding">
               <div className="max-w-5xl mx-auto ">
                    <h2 className=" text-pink-light">Become a client</h2>
                    <div className="w-full py-6 flex justify-end ">
                         
                         <div className=" mr-48 w-2/5">
                              <p className=" text-peach py-4 font-bold text-xl">Schedule a meeting with Jordan and he’ll buy you a beer or take you out for coffee. We believe in building long-term relationships with our clients, so we’re never pushy or “car salesman-y”.</p>
                         </div>
                         
                       
                    </div>
                    <div className="my-3 w-full flex justify-end">
                              <Link className="bg-pink-light py-4 px-12 font-bold text-3xl text-peach rounded-md"to={"/onboarding"}>start a project</Link>
                         </div>
               </div>
          </section>
     )
}
export default Onboarding