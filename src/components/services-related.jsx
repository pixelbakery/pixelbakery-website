import React from "react";
import RelatedCard from "./services-related-card";
import relatedProjects from "../data/services-animation-related";
import ButtonFilled from "./button-filled";

function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      
    }
    for(let x=0; x < array.length; x++){
        console.log(array[x].name);
    }
    return array;
  }

export default function TryAgain(){
    const shuffledPosts = shuffleArray(relatedProjects);
    return(
        <section className="my-4" id="services-animation-related">
            <div className="">
                <div className="container max-w-xl ml-24 my-8 pb-4 pt-16">
                    <span className="text-peach text-2xl font-bold pb-0 mb-0">Related Projects</span>
                    <h2 className="text-blue mt-0 pt-0">Words are wind, so here's proof:</h2>
                </div>
                <div className="pt-8 grid grid-cols-3 gap-4 ">
                    {
                        shuffledPosts.map(
                            project=>(
                                <RelatedCard project={project} key={project.name} />
                            )
                        )
                    }
                </div>
                <div className=" py-8 mx-auto w-full">
                    <ButtonFilled text="test" link="#" />
                </div>
            </div>
        </section>
    );
}

  