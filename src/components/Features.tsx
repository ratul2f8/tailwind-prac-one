import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
const Features: React.FC = () => {
  return (
    <ParallaxLayer
      offset={1.0}
      speed={0}
      className="w-full overflow-auto h-auto justify-center items-center px-4 pt-8  mt-4 features-bg">
      <h1 className="text-4xl lg:text-9xl md:text-7xl text-center font-extrabold features">
        Wählen Sie eines der besten
      </h1>
      <div className="overflow-y-auto h-auto flex flex-col lg:flex-row lg:w-full lg:justify-between w-full px-4 py-6 space-y-4 lg:mt-6 lg:px-0 lg:items-center">
        <div className="shadow-lg relative lg:px-4 lg:w-4/12 lg:h-96 f-1 font-bold flex flex-col h-64 items-center justify-center text-white lg:ml-4">
          <h2 className="text font-bold text-center text-3xl lg:text-6xl">
            The Arteon
          </h2>
          <button
            className="rounded bg-blue-900 mt-5 hover:bg-blue-800 transition
         w-2/6 text-center font-bold px-6 py-3 lg:text-4xl
         ">
            Explore
          </button>
        </div>
        <div className="shadow-lg relative lg:px-4 lg:w-4/12 lg:h-96 f-2 font-bold flex flex-col h-64 items-center justify-center text-white lg:ml-4">
          <h2 className="text font-bold text-center text-3xl lg:text-6xl">
            The Tiguan
          </h2>
          <button
            className="rounded bg-blue-900 mt-5 hover:bg-blue-800 transition
         w-2/6 text-center font-bold px-6 py-3 lg:text-4xl
         ">
            Explore
          </button>
        </div>
        <div className="shadow-lg lg:ml-4 relative lg:w-4/12 lg:h-96 f-3 font-bold flex flex-col h-64 items-center justify-center text-white">
          <h2 className="text font-bold text-center text-3xl lg:text-6xl">
            The Golf
          </h2>
          <button
            className="rounded bg-blue-900 mt-5 hover:bg-blue-800 transition
         w-2/6 text-center font-bold px-6 py-3 lg:text-4xl
         ">
            Explore
          </button>
        </div>
      </div>
    </ParallaxLayer>
  );
};
export default Features;
