import React, { useEffect } from 'react'
import { gsap,  } from 'gsap';
import { Link } from 'react-router-dom'
 
 
function NotFound(){
     useEffect(() => {
         
         return () => { }
    }, [])
 
    return (
         <section id='404' className='my-4 lander flex gap-24'>
               <div className='w-3/5 h-full py-20'>
                    
                    <div className="max-w-lg ml-auto flex flex-col justify-center h-full py-12">
                         <h1 className="text-blue-dark text-7xl mb-10">Sorry, Charlie. <br/> That page doesn't exist</h1>
                         <div className="bg-peach-light px-8 py-8 text-peach text-2xl font-bold mt-10">
                              <p>that's probably our bad.</p>
                              <p className="mt-6">to make it up to you, enjoy this awkward blunder-years photo of <Link to={"/"} className="underline text-pink">Jordan</Link>.</p>
                         </div>
                    </div>
               </div>
               <div className='w-2/5 h-full relative overflow-hidden'>
                    <div className="absolute top-0 left-0 bottom-0 right-0 ">
                         <img src="../src/img/jordan_blunder.png" className="m-0 object-cover object-center w-100 h-100" />
                    </div>
               </div>
          </section>
     )
}
 
export default (NotFound)
 