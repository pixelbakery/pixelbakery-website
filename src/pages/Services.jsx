import React from "react"
import Header from "../components/services-header";
import Subservices from "../components/services-subservices"; 
import RelatedServices from "../components/services-related";
import AllServices from "../components/services-allservices";
import Process from "../components/services-ourprocess";
// import StickySidebarJS from "../js/stickysidebar";

export default function Services(){
    return(
        <div>
            <Header/>
            <Subservices />
            <RelatedServices />
            <AllServices />
            <Process />
          
        </div>
    );
}