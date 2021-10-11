import React from "react";
import Work_Clients from "../components/work-clients";
import Work_Awards from "../components/work-awards";
import Work_Services from "../components/work-services";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";

export default function App(){
    return(
        <div>
            <PageHeader />
            <Work_Services />
            <Work_Clients />
            <Work_Awards />
           

        </div> 

);
}
