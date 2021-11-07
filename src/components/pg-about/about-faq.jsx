import React, {useEffect} from "react";
import faq from "../../data/faq";
import FAQbox from "./about-faq-card";

export default function FAQ(){
    useEffect(() => {
        const faqcard = document.querySelectorAll(".faqcard");
        faqcard.forEach(faq => {
            let buttonEl = faq.firstChild;
            let answerEl = faq.lastChild;
            
            buttonEl.onclick = function() {
                
                buttonEl.classList.toggle("opened");
                answerEl.classList.toggle("opened");
            }
        });
        return () => {
          
        }
      }, [])
    return(
        <section className="py-8 my-4 bg-pink-light">
            <div className="wrapper mx-auto max-w-5xl">
            <h2 className="text-blue max-w-lg"> Some questions we get asked frequently</h2>
        { faq.map(faq=>(
              <FAQbox faq={faq} key={faq.q} />
          ))}
            </div>
        </section>
    );
}