import { wordsEnergy } from "../../constants";
import HeroModel from "../HeroModel/HeroModel";

import './styles.css'


const Hero = () => {
  return (
    <div id="hero" className="heroContainer">

      <div className="hero-layout-content">

        {/* **left hero content */}
        {/* bg-amber-400 p-1 hero-text flex flex-col justify-center md:w-full w-screen md:px-20 px-5 */}
        <div className="text-hero">
          <div id="text" className="hero-text flex flex-col ">
            <h1>Green Energy</h1>
            <h2>
                Shapping
                <span className="slide">
                  <span className="wrapper  ml-4">
                    {wordsEnergy.map((word) => (
                      <span className="flex items-center md:gap-3 gap-1 pb-2">
                        <img 
                          src={word.imgPath}
                          alt={word.text}
                          className=" xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-current" />

                          <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
            </h2>
            <h2>Into real projects</h2>
            <h2>That Deliver Results</h2>
            
          </div>

        </div>
                   
        {/* ** right content: 3D Model ** */}
        <figure>
          
          <div className="hero-3d-layout">
            {/* <h1>ahora aqui</h1> */}
            <HeroModel />
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Hero;
