import { wordsEnergy } from "../../constants";
import Button from "../buttons/Button";
import HeroModel from "../HeroModel/HeroModel";

import './styles.css'


const Hero = () => {
  return (
    <div id="hero" className="heroContainer">

      <div className="hero-layout-content">

        {/* **left hero content */}
        {/* bg-amber-400 p-1 hero-text flex flex-col justify-center md:w-full w-screen md:px-20 px-5 */}
        <div className="text-hero">
          <div className="title">
            <h1>Green Energy</h1>
          </div>
          <div id="text" className="hero-text flex flex-col overflow-hidden">
            <h2>
                Energias...
                <span className="slide">
                  <span className="wrapper  ml-4">
                    {wordsEnergy.map((word) => (
                      <span className="flex items-center md:gap-3 gap-1 pb-2">
                        <img 
                          src={word.imgPath}
                          alt={word.text}
                          className=" xl:size-12 md:size-8 size-7 md:p-2 p-1 rounded-full bg-[#009963]" />

                          <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
            </h2>
            
          </div>

          <div className="hero-text-2">
            <h2>El futuro es renovable</h2>
            <h2>Descubre los datos que estan trasformando el mundo</h2>
          </div>

          <div className="contain-button">
            <Button
              className="md:w-50 md:h-12 w-60 h-10 mt-2.5 rounded-lg bg-[#009963] text-[#E5E8EB]"
              id="button"
              text="Ver analisis actualizado"
            />
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
