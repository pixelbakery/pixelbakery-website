import React from "react";

export default function FAQcard({faq}){
    return(
        <div>
             <div className="border-2 rounded-md border-blue px-4 py-3 my-4">
            <p className="text-pink font-bold py-1 my-0 text-lg">{faq.q}</p>
            </div>
            <p className="mx-6  text-blue-dark ">
                {faq.a}
            </p>
        </div>
       
            
    );
}