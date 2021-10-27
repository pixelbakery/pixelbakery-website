import React from "react";
import Work_Clients from "../components/work-clients";
import Work_Awards from "../components/work-awards";
import Work_Services from "../components/work-services";
import PageHeader from "../components/PageHeader";
import Work_Portfolio from "../components/work-portfolio";

// import Work_Portfolio from "../components/work-portfolio";
// import Work_Filter from "../components/work-portfolio-filter";
export default function App(){
    return(
        <div>
            <PageHeader />
        
         
            <Work_Services /> 
            <Work_Clients />
            <Work_Awards />
           <script src="./src/js/stickysidebar.jsx"></script>

        </div> 
    
);

}

