import React, {createElement} from "react";
import Icons from "../components/parts/icons";
// import icons from '../data/pbIcons'
import PropTypes from 'prop-types';
import * as icons from '../components/icons/rel/index'
// import { Renderer } from "./Renderer";
// import Test from '../components/test'



function IconRef(){
     const width="100%";
     const height="100%";
     const components = [
          {    
               icon: <icons.PbIconApronRel title={"Pixel Bakery Apron Icon"} width={width} height={height}/>,
               title: "Apron",
          },
          {    
               icon: <icons.PbIconBrowserRel title={"Pixel Bakery Browser Icon"} width={width} height={height}/>,
               title: "Browser",
          },
          {    
               icon: <icons.PbIconCakePanRel title={"Pixel Bakery Cake Pan Icon"} width={width} height={height}/>,
               title: "Cake Pan",
          },
          {    
               icon: <icons.PbIconCloudRel title={"Pixel Bakery Cloud Icon"} width={width} height={height}/>,
               title: "Cloud",
          },
          {    
               icon: <icons.PbIconCoffeeRel title={"Pixel Bakery Coffee Icon"} width={width} height={height}/>,
               title: "Coffee",
          },
          {    
               icon: <icons.PbIconCookieCutterRel title={"Pixel Bakery Cookie Cutter Icon"} width={width} height={height}/>,
               title: "Cookie Cutter",
          },
          {    
               icon: <icons.PbIconCroissantRel title={"Pixel Bakery Croissant Icon"} width={width} height={height}/>,
               title: "Croissant",
          },
          {    
               icon: <icons.PbIconCupcakePanHeartsRel title={"Pixel Bakery Cupcake Pan Hearts Icon"} width={width} height={height}/>,
               title: "Cupcake Pan (Hearts)",
          },
          {    
               icon: <icons.PbIconCupcakePanRel title={"Pixel Bakery Cupcake Pan Icon"} width={width} height={height}/>,
               title: "Cupcake Pan",
          },
          {    
               icon: <icons.PbIconCursorRel title={"Pixel Bakery Cursor Icon"} width={width} height={height}/>,
               title: "Cursor",
          },
          {    
               icon: <icons.PbIconDogBowlRel title={"Pixel Bakery Dog Bowl Icon"} width={width} height={height}/>,
               title: "Dog Bowl",
          },
          {    
               icon: <icons.PbIconEggTimerRel title={"Pixel Bakery Egg Timer Icon"} width={width} height={height}/>,
               title: "Egg Timer",
          },
          {    
               icon: <icons.PbIconFistBumpRel title={"Pixel Bakery Fist Bump Icon"} width={width} height={height}/>,
               title: "Fist Bump",
          },
          {    
               icon: <icons.PbIconHeadphonesRel title={"Pixel Bakery Headphones Icon"} width={width} height={height}/>,
               title: "Headphones",
          },
          {    
               icon: <icons.PbIconIcingSpatulaRel title={"Pixel Bakery Icing Spatula Icon"} width={width} height={height}/>,
               title: "Icing Spatula",
          },
          {    
               icon: <icons.PbIconImacRel title={"Pixel Bakery Imac Icon"} width={width} height={height}/>,
               title: "Imac",
          },
          {    
               icon: <icons.PbIconMeasuringCupRel title={"Pixel Bakery Measuring Cup Icon"} width={width} height={height}/>,
               title: "Measuring Cup",
          },
          {    
               icon: <icons.PbIconMeasuringSpoonsRel title={"Pixel Bakery Measuring Spoons Icon"} width={width} height={height}/>,
               title: "Measuring Spoons",
          },
          {    
               icon: <icons.PbIconMicrophoneRel title={"Pixel Bakery Microphone Icon"} width={width} height={height}/>,
               title: "Microphone",
          },
          {    
               icon: <icons.PbIconMixerRel title={"Pixel Bakery Mixer Icon"} width={width} height={height}/>,
               title: "Mixer",
          },
          {    
               icon: <icons.PbIconMixingBowlRel title={"Pixel Bakery Mixing Bowl Icon"} width={width} height={height}/>,
               title: "Mixing Bowl",
          },
          {    
               icon: <icons.PbIconMouseRel title={"Pixel Bakery Mouse Icon"} width={width} height={height}/>,
               title: "Mouse",
          },
          {    
               icon: <icons.PbIconOvenMitsRel title={"Pixel Bakery Oven Mit Icon"} width={width} height={height}/>,
               title: "Oven Mit",
          },
          {    
               icon: <icons.PbIconPantoneBookRel title={"Pixel Bakery Pantone Book Icon"} width={width} height={height}/>,
               title: "Pantone Book",
          },
          {    
               icon: <icons.PbIconPenToolRel title={"Pixel Bakery Pen Tool Icon"} width={width} height={height}/>,
               title: "Pen Tool",
          },
          {    
               icon: <icons.PbIconPencilRel title={"Pixel Bakery Pencil Icon"} width={width} height={height}/>,
               title: "Pencil",
          },
          {    
               icon: <icons.PbIconPieServerRel title={"Pixel Bakery Pie Server Icon"} width={width} height={height}/>,
               title: "Pie Server",
          },
          {    
               icon: <icons.PbIconPipingBagRel title={"Pixel Bakery Piping Bag Icon"} width={width} height={height}/>,
               title: "Piping Bag",
          },
          {    
               icon: <icons.PbIconRecycleRel title={"Pixel Bakery Recycle Icon"} width={width} height={height}/>,
               title: "Recycle",
          },
          {    
               icon: <icons.PbIconRollingPinRel title={"Pixel Bakery Rolling Pin Icon"} width={width} height={height}/>,
               title: "Rolling Pin",
          },
          {    
               icon: <icons.PbIconSifterRel title={"Pixel Bakery Sifter Icon"} width={width} height={height}/>,
               title: "Sifter",
          },
          {    
               icon: <icons.PbIconSlateRel title={"Pixel Bakery Slate Icon"} width={width} height={height}/>,
               title: "Slate",
          },
          {    
               icon: <icons.PbIconSpatulaRel title={"Pixel Bakery patula Icon"} width={width} height={height}/>,
               title: "Spatula",
          },
          {    
               icon: <icons.PbIconTvRel title={"Pixel Bakery TV Icon"} width={width} height={height}/>,
               title: "TV",
          },
          {    
               icon: <icons.PbIconSpatulaRel title={"Pixel Bakery Spatula Icon"} width={width} height={height}/>,
               title: "Spatula",
          },
          {    
               icon: <icons.PbIconWhiskRel title={"Pixel Bakery Whisk Icon"} width={width} height={height}/>,
               title: "Whisk",
          }
     ];

     return(
          <main>
               <section className="mx-4 bg-white my-4 pt-32 pb-16">

                    <div className="max-w-6xl mx-auto">
                         <h1>Icon Reference</h1>
                         <div className="my-4 grid grid-cols-6 gap-8">
                              {components.map((component, index) => (
                                   <article className="border border-pink-light rounded-lg  ">
                                        <div className="px-4 my-4">
                                             {component.icon }
                                        
                                        </div>
                                        <div className="border-t border-pink-light text-center">
                                             <h2 className=" text-base font-normal text-wine my-1 py-1">{component.title}</h2>
                                        </div>
                                   </article>
                                   
                              ))}
                         </div>
     
                              
                    </div>
               </section>
          </main>
          
          )
}
export default IconRef;