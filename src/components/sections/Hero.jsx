import React from "react";
import { wordsEnergy } from "../../constants";
import HeroModel from "../HeroModel/HeroModel";

/* import './styles.css' */


const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden p-5 bg-red-700">
      {/* <div className="absolute top-0 left-0 z-10">
            <h1>algo aca</h1>
        </div> */}

      <div className="hero-layout">
        {/* **left hero content */}
        <div className="bg-amber-400 p-1 hero-text flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div id="text" className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shapping
                <span className="slide">
                  <span className="wrapper">
                    {wordsEnergy.map((word) => (
                      <span className="flex items-center md:gap-3 gap-1 pb-2">
                        <img 
                          src={word.imgPath}
                          alt={word.text}
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-transparent" />

                          <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>Into real projects</h1>
              <h1>That Deliver Results</h1>
            </div>
          </div>

        </div>
                   
        {/* ** right content: 3D Model ** */}
        <figure>
          <div className="hero-3d-layout">
            <HeroModel />
          </div>
        </figure>            
      </div>
    </section>
  );
};

export default Hero;
