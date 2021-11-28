import React from "react";

function ExpectationNumbers({number }){
     return(
     
                <div className="w-2/5  flex flex-col justify-center ">
                              <div id={"expectation-" + (number)} className="relative h-full w-full text-18xl font-black text-cream expectations-number-wrapper inset-x-1/4 ">
                                   <div className="text-blue absolute l-50 z-50 expect-numb opacity-80">{number}</div>
                                   <div className="text-yellow absolute z-40 expect-numb opacity-80">{number}</div>
                                   <div className="text-peach absolute z-30 expect-numb opacity-80">{number}</div>
                                   <div className="text-pink-light absolute z-20 expect-numb opacity-80">{number}</div>
                                   <div className="text-pink absolute z-10 expect-numb opacity-80">{number}</div>
                              </div>
                         </div>
          

     );
}


export default ExpectationNumbers;