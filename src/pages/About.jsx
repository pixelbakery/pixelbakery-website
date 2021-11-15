import React from "react";
import roster from "../data/team";

import StudioViews from "../components/pg-about/about-studioViews";
import Twitch from "../components/pg-about/about-twitch";
import FAQ from "../components/pg-about/about-faq";

// import TwitchStream from "../components/about-twitch";
function About() {
  return (
    <main>
      <section className="lander my-4 bg-blue">
        lander
      </section>
    <section className="my-4" id="about">
      <div class="grid gap-4 grid-cols-4">
      {roster.map((value, index) => {        
        return <div className="w-full aspect-w-3 aspect-h-4">
             <a key={index} href={"/"+value["url"]}><img className="w-full h-full object-cover" src={value["image_headshot"]} /></a>
          </div>
         
      })}
      </div>
    </section>
    <section className="h-screen bg-blue"></section>
    <StudioViews />
    <Twitch />
    <FAQ/>
    </main>

  );
}

export default About;