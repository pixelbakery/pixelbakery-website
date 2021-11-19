import React from 'react'     



const StrokeText = ({text, fontSize, strokeWidth, color, fontWeight}) => {

     return(
          
          <svg xmlns='http://www.w3.org/2000/svg' width="auto"
    width="100%" height="100%"  className="social-link text-blue-dark hover:fill-current hover:text-blue-dark" fill="none" stroke="currentColor" >


          <text className={" font-body w-full tracking-wider " + (fontSize) + " " + (fontWeight) + " " + (strokeWidth) + " hover:fill-" + (color) } x="0" y="25%">
          {text}
          </text>
     </svg>


   )
     }

export default StrokeText;
