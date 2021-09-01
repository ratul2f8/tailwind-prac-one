import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
import "../styles/others.css";

const Welcome: React.FC = () => {
  return (
    <ParallaxLayer offset={0} speed={0.3}>
      <div className="flex h-auto lg:flex-row md:mt-10 flex-col justify-center sm:items-center w-full h-full mt-28 lg:mt-0">
        <div className="flex flex-col w-full justify-center h-auto lg:px-10 lg:h-full w-1/2 md:w-full md:h-2/3 lg:w-1/3">
          <h1 className="xl:text-8xl lg:text-4xl font-bold welcome text-4xl text-center">
          Bitte schön
          </h1>
          <h3 className="lg:text-xl font-bold sm:text-lg text-center">
            Volkswagen Automobile Stuttgart
          </h3>
        </div>
        <div className="flex flex-grow-1 w-full h-full justify-center px-0 lg:px-3 items-center">
          <div className="h-5/6 w-4/5  lg:mt-auto sm:mt-0 relative">
            <div className="container img-1 absolute bottom-0 z-20 shadow-md left-0 h-3/6" />
            <div className="container img-3 absolute top-0 z-30 shadow-md right-0 h-full w-2/5" />
            <div className="container img-2 absolute top-0 z-10 shadow-md left-0 h-2/3" />
          </div>
        </div>
      </div>
    </ParallaxLayer>
  );
};
export default Welcome;
