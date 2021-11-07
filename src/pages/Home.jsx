import React from "react";

// import InstagramFeed from "../components/instagramFeed";

import blogPosts from "../data/blogPosts";
import BlogCard from "../components/parts/blogCard";
import HomeLanding from "../components/pg-home/homeLanding";
import HomeWhoTheHeck from "../components/pg-home/homeWhoTheHeck";
import HomeWhatWeMake from "../components/pg-home/homeWhatWeMake";
import HomeServices from "../components/pg-home/homeServices";
import HomePortfolio from "../components/pg-home/home-portfolio";

function Home() {
  return (
    <div>
    <HomeLanding />
    <HomeWhoTheHeck />
    <HomeWhatWeMake />
    <HomeServices />
    <HomePortfolio />

    

    
    
    
   
  
   

</div>
  );
}

export default Home;