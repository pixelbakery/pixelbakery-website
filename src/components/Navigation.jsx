import React from "react";
import {Link} from 'react-router-dom';
import StartButton from './parts/button-filled';

function hamToggle() {
    var element = document.getElementById("ham");
    element.classList.toggle("active");
}

function Navbar() {
  return (
   <div className="fixed w-screen top-0 z-20 mt-8 px-4 flex justify-between">
     <div>
      <Link to="/">
          <div className="bg-cream text-peach text-center font-extrabold rounded-md px-4 py-4 text-5xl leading-none inline-block">
            <p className="tracking-normal">pb</p>
            <p className="tracking-wide -mt-2 -ml-1">ds</p>
          </div>
      </Link>
     </div>
     <div className="mr-8">
       <Link className="mx-3 text-xl tracking-wide lowercase text-peach font-bold" to="/work">Our Work</Link>
       <Link className="mx-3 text-xl tracking-wide lowercase text-peach font-bold" to="/about">Who We Are</Link>
       
       <Link to="/contact" className="mx-3 my-2 py-3 rounded-sm px-6 w-full text-center bg-peach" >
            <span className="text-cream font-extrabold text-md lowercase tracking-wide">Start a Project</span>
        </Link>
        <div className="inline-block">
          <svg className="ham hamRotate ham8" viewBox="0 0 100 100" width="80" onClick={hamToggle} id="ham">
            <path
                  className="line top stroke-current text-peach"
                  d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20" />
            <path
                  className="line middle stroke-current text-peach"
                  d="m 30,50 h 40" />
            <path
                  className="line bottom stroke-current text-peach"
                  d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20" />
          </svg>
        </div>
     </div>
    
   </div>
  );
}

export default Navbar;