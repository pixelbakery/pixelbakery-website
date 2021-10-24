import React from "react";

// import InstagramFeed from "../components/instagramFeed";

import blogPosts from "../data/blogPosts";
import BlogCard from "../components/blogCard";
import HomeLanding from "../components/homeLanding";
import HomeWhoTheHeck from "../components/homeWhoTheHeck";
import HomeWhatWeMake from "../components/homeWhatWeMake";

function Home() {
  return (
    <div>
    <HomeLanding />
    <HomeWhoTheHeck />
    <HomeWhatWeMake />
    

    

    
    
    
    {/* OUR BEST HITS */}
    <section id="besthits" className="bg-white grid text-pb-blue lg:grid-cols-2 2xl:grid-cols-5">
        <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
           
            <h2 className="text-pb-wine text-xl lg:text-2xl font-bold  text-gray-900 my-3"> Our Best Hits</h2>
            <p className="my-3">Professionally coordinate real-time mindshare whereas cross functional "outside the box" thinking. Dynamically reintermediate revolutionary "outside the box" thinking without.</p>
        </div>
        <div className="w-full bg-pb-peach "> 
       
        </div>
    </section>
   

</div>
  );
}

export default Home;