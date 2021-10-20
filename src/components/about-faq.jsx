import React from "react";
import faq from "../data/faq";
import FAQbox from "./about-faq-card";

export default function FAQ(){
    return(
        <section className="py-8 my-4 bg-cream">
            <div className="wrapper mx-auto max-w-5xl">
            <h2 className="text-blue max-w-lg"> Some questions we get asked frequently</h2>
        { faq.map(faq=>(
              <FAQbox faq={faq} key={faq.q} />
          ))}
            </div>
        </section>
    );
}