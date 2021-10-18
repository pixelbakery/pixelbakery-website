import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);




// const awards_tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#awards",
//         start: "top +100",
//         // end: "top 100px",
//         markers: true,
//         toggleActions: "play pause reverse pause"
//       }
// });


// gsap.to(".awardslist .award", {
//     stagger: 1,
//     scrollTrigger: {
//       trigger: "#awards",
//       scrub: 0.5,
//       start: "top bottom",
//       end: "bottom -300%",
//       ease: "power2"
//     },
//     markers: true,
//     y: "-30%"
//   });



  const awards = gsap.timeline();
  awards.from('.awardslist .award', {
    overwrite: 'auto',
    ease: 'power3.out',
    stagger: .08,
    opacity: 0,
    y: -15
    
})



ScrollTrigger.create({
    trigger: '#awards',
    toggleActions: "play reverse play reverse",
  start: 'top center',
  end: 'bottom center',
    // start: 'top 60%',

    animation: awards,

})