import React from "react";
import {Link, NavLink} from 'react-router-dom';
import SocialLinks from "../parts/socialOptions";
import ButtonFilled from "../parts/button-filled";

export default function homeLanding(){
    return(
        <div>
            <section className="lander w-full my-4 flex">
                <nav className="w-1/3 max-w-lg bg-cream h-full flex flex-col justify-between py-10 px-8 ">
                    <div className="mx-auto w-full px-4">
                        <div>
                            <div className="logo-wrapper  w-full">
                                <img 
                                    className="object-left block m-auto ml-0 object-contain w-48"
                                    src="./src/img/pixelbakery-logo-primary-pink.svg" 
                                    alt="pixel bakery is an animation and video production studio" 
                                />
                            </div>
                        </div>
                        <div className="mx-auto mt-12" id="homepage-main-nav">
                            <ul className="">
                                <li className="my-2"><NavLink to={"/work"} className="text-pink font-extrabold lowercase text-5xl">work</NavLink></li>
                                <li className="my-2"><NavLink to={"/about"} className="text-pink font-extrabold lowercase text-5xl">bakery</NavLink></li>
                                <li className="my-2"><NavLink to={"/education"} className="text-pink font-extrabold lowercase text-5xl">education</NavLink></li>
                                <li className="my-2"><NavLink to={"/recipesss"} className="text-pink font-extrabold lowercase text-5xl">mom's recipes</NavLink></li>
                                <li className="my-2"><NavLink to={"/store"} className="text-pink font-extrabold lowercase text-5xl">company store</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="">
                        <div className="text-blue font-bold text-xl text-center w-full">fresh puns & nice buns</div>
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
                            src="./src/img/pixelbakery_boxlogo.svg"
                            alt=""
                            className="object-center block m-auto"
                        />
                    </div>

                </div>
                    
             
            </section>
        </div>
    );
       
    
}

