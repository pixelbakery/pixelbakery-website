import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function SocialLinks(){
    return(
        <div className="flex justify-between max-w-xs mx-auto px-8">
            <a href="https://instagram.com/pixelbakery" className="transform-gpu text-2xl text-cream transition duration-700 ease-in-out hover:-translate-y-2" target="_blank">
                <i className="bi bi-instagram "  role="img" aria-label="Instagram"></i>
            </a>
            <a href="https://vimeo.com/pixelbakery" className="transform-gpu text-2xl text-cream transition duration-700 ease-in-out hover:-translate-y-2" target="_blank">
                <i className="bi bi-vimeo "  role="img" aria-label="Vimeo"></i>
            </a>
            <a href="" className="transform-gpu text-2xl text-cream transition duration-700 ease-in-out hover:-translate-y-2" target="_blank">
                <i className="bi bi-youtube "  role="img" aria-label="Youtube"></i>
            </a>
            <a href="https://twitch.tv/pixelbakery" className="transform-gpu text-2xl text-cream transition duration-700 ease-in-out hover:-translate-y-2" target="_blank">
                <i className="bi bi-twitch "  role="img" aria-label="Twitch"></i>
            </a>
            <a href="" className="transform-gpu text-2xl text-cream transition duration-700 ease-in-out hover:-translate-y-2" target="_blank">
                <i className="bi bi-discord "  role="img" aria-label="Discord"></i>
            </a>
            <a href="https://behance.com/pixelbakery" className="transform-gpu text-2xl text-cream transition duration-700 ease-in-out hover:-translate-y-2" target="_blank">
                <i className="bi bi-behance "  role="img" aria-label="Behance"></i>
            </a>
       
        
        </div>
        
    );
}