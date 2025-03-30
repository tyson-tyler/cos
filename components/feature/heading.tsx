import { Button } from "@heroui/button";
import { ArrowUpLeft } from "lucide-react";
import React from "react";

const Heading2 = () => {
  return (
    <div className="container mx-auto max-w-7xl pt-6 px-6 flex-grow">
      <div className="flex justify-center text-left">
        <h2 className="text-7xl text-center mt-7 mb-4 text-white dela-gothic-one-regular">
          Our Feature
        </h2>
      </div>
      <div className="text-2xl flex justify-around items-center mt-6 mb-5">
        <h1 className="text-lg text-gray-400 w-[600px]">
          Our BuildHub Give the Feature that you Need to start you Fitness Route
          From Zero to Hero Level and Our Ai Trainer Help you guide you throw
          this Route. Just Start it for Today. Join Now and become Fit
        </h1>
        <Button size="lg" color="primary">
          Check All Feature
        </Button>
      </div>

      <div className="grid w-full  grid-cols-2 gap-8 h-[800px] mt-16 ">
        <div className="row-span-2 font-medium  bg-gray-400 rounded-md  text-3xl transition scale-100 hover:scale-105 text-center bottom-2 bga">
          <h1 className="bottom-1 absolute  text-2xl px-5 mt-6 font-semibold  ">
            Workout Plan
          </h1>
        </div>
        <div className="bg-gray-400 rounded-md bga1 transition scale-100 hover:scale-105">
          <h1 className="bottom-2 absolute   text-2xl px-5 mt-6 font-semibold ">
            Diet Plan
          </h1>
        </div>
        <div className="bg-slate-500 rounded-md bga2 transition scale-100 hover:scale-105">
          <div className="bottom-1 right-4 z-50 absolute w-[50px]  text-black h-[50px]  mt-6 font-extrabold flex justify-center items-center bg-white rounded-md ">
            <ArrowUpLeft className="w-16" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading2;
