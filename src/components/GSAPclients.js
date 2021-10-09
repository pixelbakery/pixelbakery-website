import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

//Setup Variables
const setHeight = 200; //height of the boxes
const boxesArray = document.querySelectorAll('.box'); //array of all boxes
const numBoxes = boxesArray.length; //get quantity of boxes


//initialize box position in a row
  gsap.set(".box", {
  height: 150,
  y: (i) => i * setHeight
  });

// Gsap Time //
const totalHeight= numBoxes*setHeight;
const wrapOffsetTop = setHeight/-2;
const wrapOffsetBottom = totalHeight+wrapOffsetTop;
var wrap = gsap.utils.wrap(wrapOffsetTop,wrapOffsetBottom);
const yheight = "-=" + totalHeight;



let tl = gsap.timeline();
tl.to(".box", {
  duration: 40,
  ease: "none",
  y: yheight, //move each box the total height of all boxes to upwards
  modifiers: {
    y: gsap.utils.unitize(wrap) //force y value to wrap when it reaches -100
  },
  repeat: -1
});

function setup(){
  // console.log(boxesArray.length);
  for (let i = 0; i < boxesArray.length; i++) {
    let thisBox = boxesArray[i];
    console.log("test " + i);
    thisBox.addEventListener("mouseenter", function( event ) {
      gsap.to(tl, {timeScale: 0, overwrite: true})
      gsap.to(boxesArray[i],{scale:1.2, ease: "power1.inOut"});
    });
    thisBox.addEventListener("mouseleave", function() {
      
      gsap.to(boxesArray[i],{scale:1, ease: "power1.inOut", duration:0.5});
      gsap.to(tl, { timeScale: 1, overwrite: true});
      

    });
 }
}
setup();