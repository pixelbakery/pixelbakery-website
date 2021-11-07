import React from "react";

export default function FAQcard({faq}){
    
    return(
        <div className="faqcard">
             <button className="block w-full border-2 rounded-md border-blue px-4 py-3 my-4 question">
                <p className="text-pink font-bold py-1 my-0 text-lg">{faq.q}</p>


                <div className="w-4 h-4 circle-plus closed">
                    <div className=" circle">
                        <div className="absolute horizontal bg-blue"></div>
                        <div className="absolute vertical bg-blue"></div>
                    </div>
                </div>
            



            </button>
            <div className="answer">
                <p className="mx-6  text-blue-dark ">
                    {faq.a}
                </p>
            </div>
        </div>
       
            
    );
}