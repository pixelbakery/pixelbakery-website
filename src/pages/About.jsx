import React from "react";
import roster from "../data/team";
import FAQ from "../components/pg-about/about-faq";
// import TwitchStream from "../components/about-twitch";
function About() {
  return (
    <>
    <section className="" id="about">
      {roster.map((value, index) => {        
        return <div className="h-64 w-64 m-8">
             <a key={index} href={"/"+value["url"]}><img className="w-full h-full object-cover" src={value["image_headshot"]} /></a>
          </div>
         
      })}
    </section>
    <FAQ/>
    </>

  );
}

export default About;