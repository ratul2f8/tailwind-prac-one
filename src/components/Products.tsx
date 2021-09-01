import { ParallaxLayer } from "@react-spring/parallax";
import React from "react";
const Products: React.FC = () => {
  return (
    <ParallaxLayer
      offset={2.8}
      speed={0}
      className="flex flex-col justify-center items-center ng-black">
       <div className="rounded overflow-hidden shadow-lg">
      <img className="w-full" src="/mountain.jpg" alt="Mountain"/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Mountain</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
    </ParallaxLayer>
  );
};
export default Products;
