import React from "react";
import PortfolioCard from "./work-portfolio-card";
import projects from "../../data/portfolio"


export default function Portfolio(){
  return(
    <section className="" id="work-portfolio">

      <div id="portfolioFilter">
          <button data-filter="*">All</button>
          <button data-filter=".animation">Animation & Motion Design</button>
          <button data-filter=".film">Commercial Film Production</button>
          <button data-filter=".concepting">Creative Concepting & Strategy</button>
          <button data-filter=".3dmodeling">3D Modeling</button>
          <button data-filter=".emergingmedia">Emerging Media</button>
          <button data-filter=".social">Social Media Kitouts</button>
      </div>
      <div className="portfolio-isotopes grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-4 "> 
          { projects.map(project=>(
              <PortfolioCard project={project} key={project.name} />
          ))}
      </div>


  </section>        
  )
}




