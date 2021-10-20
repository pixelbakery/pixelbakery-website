import React from "react";
import "https://embed.twitch.tv/embed/v1.js";

new Twitch.Embed("twitch-embed", {
    width: 854,
    height: 480,
    channel: "monstercat",
    // Only needed if this page is going to be embedded on other websites
    parent: ["embed.example.com", "localhost:3000"]
  });


export default function Twitch(){
    return(
        <section className="">
      
        <div id="twitch-embed"></div>
    </section>
    );
    
}