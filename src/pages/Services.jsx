import React from "react"
import Header from "../components/pg-services/services-header";
import Subservices from "../components/pg-services/services-subservices"; 
import RelatedServices from "../components/pg-services/services-related";
import AllServices from "../components/pg-services/services-allservices";
import Process from "../components/pg-services/services-ourprocess";
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