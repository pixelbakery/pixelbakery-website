import React from "react";

export default function ServiceCard({project}){
    return(
       
                <article className="aspect-w-3 xl:aspect-w-4 aspect-h-2 xl:aspect-h-3  w-full hover:opacity-90 hover:scale-95" >
                    <div className="absolute w-full h-full">
                      <img src={project.previewImg} className="w-full h-full object-center object-cover" alt={project.previewImgAlt}/>
                    </div>
                   <div className="absolute w-full h-full p-2">
                    <div className="px-12 py-4 bg-cream inline-block">
                        <h3 className=" leading-none my-0 -pb-2  text-wine ">{project.client}</h3>
                        <h2 className="text-wine leading-none text-3xl py-0 my-0">{project.name}</h2>
                    </div>
                    </div>
                    <a href="" className="absolute h-full w-full z-10 opacity-0 top-0 left-0 cursor-pointer"></a>
                </article>
    
    );
}