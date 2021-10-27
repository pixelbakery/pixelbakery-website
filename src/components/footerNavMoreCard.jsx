import React from "react";

export default function FooterNavMoreCard({ navitem }){
    return (
        <li className="text-left" ><a className="text-cream text-xl" href={navitem.url}>{navitem.text}</a></li>
    );
}