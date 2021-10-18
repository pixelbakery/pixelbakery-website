import React from "react";
import PortfolioCard from "../components/work-portfolio-card";
import projects from "../data/portfolio";

export default function Portfolio(){

    return(
        <section className="" id="work-portfolio">


            <div className="grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 "> 
                { projects.map(project=>(
                    <PortfolioCard project={project} key={project.project} />
                ))}
            </div>
        </section>
    )
}