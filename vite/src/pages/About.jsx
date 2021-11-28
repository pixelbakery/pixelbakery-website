import React from "react";


import StudioViews from "../components/pg-about/about-studioViews";
import Team from "../components/pg-about/about-team";
import Values from "../components/pg-about/about-values";
import Twitch from "../components/pg-about/about-twitch";
import FAQ from "../components/pg-about/about-faq";


// import TwitchStream from "../components/about-twitch";
function About() {
  return (
    <main>
      <section className="lander my-4 bg-blue">
        lander
      </section>
    <Team/>
    <Values />
    <StudioViews />
    <Twitch />
    <FAQ/>
    </main>

  );
}

export default About;