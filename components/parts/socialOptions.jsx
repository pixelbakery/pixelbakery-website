import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function SocialLinks({color}){
    return(
        <div className="flex justify-between max-w-xs mx-auto px-8">
            <a 
                href="https://instagram.com/pixelbakery" 
                className={"socialIcons " + (color)}
                target="_blank">
                <i className="bi bi-instagram " role="img" aria-label="Instagram"></i>
            </a>
            <a 
                href="https://vimeo.com/pixelbakery" 
                className={"socialIcons " + (color)} 
                target="_blank">
                <i className="bi bi-vimeo "  role="img" aria-label="Vimeo"></i>
            </a>
            <a 
                href="https://www.youtube.com/c/PixelBakery/" 
                className={"socialIcons " + (color)} 
                target="_blank">
                <i className="bi bi-youtube "  role="img" aria-label="Youtube"></i>
            </a>
            <a 
                href="https://twitch.tv/pixelbakery" 
                className={"socialIcons " + (color)} 
                target="_blank">
                <i className="bi bi-twitch "  role="img" aria-label="Twitch"></i>
            </a>
            <a 
                href="https://discord.gg/fKxXKWME8W" 
                className={"socialIcons " + (color)}
                target="_blank">
                <i className="bi bi-discord "  role="img" aria-label="Discord"></i>
            </a>
            <a 
                href="https://behance.com/pixelbakery" 
                className={"socialIcons " + (color)} 
                target="_blank">
                <i className="bi bi-behance "  role="img" aria-label="Behance"></i>
            </a>
       
        
        </div>
        
    );
}