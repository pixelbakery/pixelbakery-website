import React, { useEffect } from "react";
import ReactPlayer from 'react-player/twitch'


// const helmet = <Helmet><script type="module"  src="https://embed.twitch.tv/embed/v1.js" /></Helmet>



function TwitchStream(){
    

    // useEffect(() => {
    //     // <script type="text/javascript">
    //     const script = document.createElement('script');
    // script.src = "https://embed.twitch.tv/embed/v1.js";
    // script.async = true;
    // document.body.appendChild(script);
    //     new Twitch.Embed("twitch-embed", {
    //       width: 854,
    //       height: 480,
    //       channel: "monstercat",
    //       // Only needed if this page is going to be embedded on other websites
    //       parent: ["embed.example.com", "othersite.example.com"]
    //     });
    // //   </script>
    //   return () => {
    //       document.body.removeChild(script);
    //     }
    //   }, []);

    
    return (
        <section className="relative mt-48 mb-4 h-full">

            <div className="relative z-10 max-w-8xl">


                <div id="twitch-title" className="z-20 absolute bg-pink-light px-20 max-w-3xl place-self-center">
                    <h2 className="text-7xl text-peach -mt-12">Peep on us</h2>
                    <p className="pb-10 text-pink leading-relaxed font-semibold text-lg">Working from home? Pretend you're not and vibe with us. Can't sleep? Cozy up with us in your bed and listen to the ryhtemic sounds of computers clicking. <a className="text-blue underline" href="twitch.tv/pixelbakery" target="_blank">Follow us on twitch</a> because we're superficial and want to get affiliate status.</p>
                </div>


                <div className="aspect-w-9 md:aspect-w-16 md:aspect-h-9 ">
                        
                    <ReactPlayer
                            url="https://www.twitch.tv/pixelbakery"
                            controls
                            autoplay={true}
                            muted={true}
                            width={"100%"}
                            height={"100%"}
                    />
                </div>
            </div>
        </section>

    
    ); 
} 
export default TwitchStream;