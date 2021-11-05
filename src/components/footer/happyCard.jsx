import React from "react";


export default function HappyCard({ happyitem }) {



let len =  happyitem.length;
let randitem =  Math.floor(Math.random()  * len);
  return (
    <div >
        <p className="text-6xl font-black text-cream">{happyitem[randitem].text}</p>
    </div>
  );
}