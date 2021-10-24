import React from "react";


export default function FooterNav({ navitem }){
    return (
        <li className="my-1 flex-grow" >
            <a className="text-cream" href={navitem.url}>{navitem.text}</a>
        </li>
    );
}