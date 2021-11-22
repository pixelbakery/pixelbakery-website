import React, { useEffect } from 'react'
import { gsap,  } from 'gsap';
import { Link } from 'react-router-dom'
 
 
function Casting(){
     useEffect(() => {
         
         return () => { }
    }, [])
 
    return (
         <section id='' className='my-4 bg-white py-20' id="careers-casting">
               <div className='mx-auto max-w-6xl flex gap-20'>
                    <div className="w-1/2 h-full flex  flex-col justify-center">
                         <h2 className="text-blue ">casting calls</h2>
                         <p className="text-wine font-bold opacity-80 text-2xl">Efficiently cultivate interdependent value before economically sound paradigms</p>
                    </div>
                    <div className="w-1/2 py-12">
                         <div className="grid grid-cols-2 gap-8">

                              <Link to={"/"} className="col-span-1">
                                   <article className="w-full h-44  px-8 py-12 flex flex-col justify-center border-4 border-pink rounded-lg">
                                        <small className="text-blue text-xs place-self-start">animal</small>
                                        <h3 className="text-2xl text-pink font-bold">happy bunnies</h3>
                                   </article>
                              </Link>

                              <Link to={"/"} className="col-span-1">
                                   <article className="w-full h-44 px-8 py-10 flex flex-col justify-center border-4 border-pink rounded-lg">
                                        <small className="text-blue text-xs place-self-start">human</small>
                                        <h3 className="text-2xl text-pink font-bold">parka girl 1</h3>
                                   </article>
                              </Link>

                              <Link to={"/"} className="col-span-1">
                                   <article className="w-full h-44 px-8 py-12 flex flex-col justify-center border-4 border-pink rounded-lg">
                                        <small className="text-blue text-xs place-self-start">human</small>
                                        <h3 className="text-2xl text-pink font-bold">lemonade boy</h3>
                                   </article>
                              </Link>
                         </div>
                    </div>
               </div>
          </section>
     )
}
 
export default (Casting)
 