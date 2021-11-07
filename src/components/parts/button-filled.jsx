import React from "react";
import {Link} from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/solid'

export default function ButtonFilled({text, link, color}){
    return(
        <Link to={link} className={"py-3 rounded-sm px-6 w-full text-center " + (color)} >
            <div className="text-cream font-extrabold text-xl lowercase flex">
              
                <div className="flex-grow flex flex-col justify-center">{text}</div>
                   
                <i className="h-12 w-12 flex flex-col justify-center">
                    <ChevronRightIcon className="  text-color"/>
                </i>
        
            </div>
        </Link>
    );
}