import React from "react";
import {Link, NavLink} from 'react-router-dom';
import SocialLinks from "../parts/socialOptions";
import ButtonFilled from "../parts/button-filled";
// import MainLogo from "../parts/main-logo";

export default function homeLanding(){
    return(
        <div>
            <section className="lander overflow-hidden w-full my-4 flex">
                <nav className="w-1/3 max-w-lg bg-pink-light h-full flex flex-col justify-between py-10 px-12 ">
                    
                       
                            <div className="logo-wrapper px-20 w-full text-blue fill-current">
                                <img 
                                    className=" object-center block m-auto object-contain w-full logo-pink"
                                    src="./src/assets/img/pixelbakery-logo-primary.svg" 
                                    
                                    id="home-logo"
                                    alt="pixel bakery is an animation and video production studio" 
                                />
                            </div>
                    <div className="mx-auto w-full px-4">
                        <div className="mx-auto mt-12" id="homepage-main-nav">
                            <ul className="">
                                <li className="my-1"><NavLink to={"/work"} className="text-pink font-bold lowercase text-4xl">work</NavLink></li>
                                <li className="my-1"><NavLink to={"/about"} className="text-pink font-bold lowercase text-4xl">bakery</NavLink></li>
                                <li className="my-1"><NavLink to={"/education"} className="text-pink font-bold lowercase text-4xl">education</NavLink></li>
                                <li className="my-1"><NavLink to={"/recipesss"} className="text-pink font-bold lowercase text-4xl">mom's recipes</NavLink></li>
                                <li className="my-2"><NavLink to={"/store"} className="text-pink font-bold lowercase text-4xl">company store</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-blue font-bold text-2xl text-center w-full mb-0 pb-0">fresh puns & nice buns</div>
                        <div className="flex flex-center w-full my-3 ">
                            <ButtonFilled text={"Start something wonderful"} link={"/contact"} color={"bg-pink"}/>
                        </div>
                        <div className="block">
                        <SocialLinks color={"text-blue"} />
                        </div>
                    </div>
                </nav>
                <div className="flex-grow pb-pattern " id="homepage-lander">
                    <div className=" flex flex-col mx-auto h-1/3 ">
                        <img 
                            src="./src/assets/img/pixelbakery_boxlogo.svg"
                            alt=""
                            className="object-center block m-auto "
                        />
                    </div>

                </div>
                    
             
            </section>
        </div>
    );
       
    
}

