import React from "react";
import { Link } from "react-router-dom";

export default function FooterNav({ navitem }){
    return (
        <li className="my-1 flex-grow" >
            <Link className="text-cream" to={navitem.url}>{navitem.text}</Link>
        </li>
    );
}