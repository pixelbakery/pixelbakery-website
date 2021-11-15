import React, { useEffect } from "react";
import Flickity from 'react-flickity-component'
import photos from '../../data/about-studioviews';

const flickityOptions = {
     wrapAround: true,
     pageDots: true,
     lazyLoad: true,
     autoPlay: 5000,
pauseAutoPlayOnHover: false
 }

 
class Carousel extends React.Component {

     componentDidMount = () => {
       // You can register events in componentDidMount hook
       this.flkty.on('settle', () => {
         console.log(`current index is ${this.flkty.selectedIndex}`)
       })
     }
   

   
     render() {
       return (
         <section className="my-4 py-24">
              <div className="grid grid-cols-5 gap-12 w-full">
                    <div className="h-full col-span-2 flex flex-col justify-center mx-auto">
                         <div className="max-w-md px-12 mx-4">
                              <h2 className="text-8xl font-bold text-pink leading-none">Studio Views</h2>
                              <p className="text-2xl font-medium leading-loose py-3 text-wine opacity-80">Where the magic happens</p>
                         </div>
                    </div>
                   <div className=" col-span-3">
                              <Flickity 
                         options={flickityOptions}
                         className={'carousel '} // default ''
                         flickityRef={c => this.flkty = c}>
                              { photos.map(photo=>(
                                   <div className="w-full aspect-w-4 aspect-h-3 overflow-hidden bg-blue carousel-cell" key={photo.name}>
                                        
                                        <div>
                                             <img className="object-center object-cover w-full h-full" src={photo.url} />
                                        </div>
                                        
                                   </div>
                                   
                                   
                              ))}
                         
                     
                         </Flickity>
                    </div>

               </div>
         </section>
       )
     }
   }

   export default Carousel