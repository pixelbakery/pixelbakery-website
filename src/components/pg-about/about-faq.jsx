import React, {useEffect} from "react";
import faq from "../../data/faq";
import GSAP from "gsap";
import FAQbox from "./about-faq-card";

export default function FAQ(){
    useEffect(() => {
        // let tl_answerBox = new gsap.timeline({paused:true});
        //     tl_answerBox.to({y:100, duration:0.66})
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
        <section className="py-16 my-4 bg-pink-light">
            <div className="wrapper mx-auto max-w-md  md:max-w-5xl">
            <h2 className="text-blue max-w-lg pb-16"> Some questions we get asked frequently</h2>
        { faq.map(faq=>(
              <FAQbox faq={faq} key={faq.q} />
          ))}
            </div>
        </section>
    );
}