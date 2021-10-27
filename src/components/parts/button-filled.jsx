import React from "react";
import {Link} from 'react-router-dom';

export default function ButtonFilled({text, link, color}){
    return(
        <Link to={link} className={"my-3 py-6 rounded-sm px-8 w-full text-center " + (color)} >
            <span className="text-cream font-extrabold text-xl lowercase">{text}</span>
        </Link>
    );
}