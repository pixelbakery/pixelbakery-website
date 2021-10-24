import React from "react";

export default function ButtonFilled({text, link}){
    return(
        <a href={link} className="min-w-64 my-3 bg-blue py-4 rounded-md  px-24 justify-center inline-block">
            <span className="text-cream font-extrabold text-2xl">{text}</span>
        </a>
    );
}