import { Button } from "@heroui/button";
import React from "react";

const Endban = () => {
  return (
    <div className="flex flex-col w-full bg-gray-50 px-[100px] justify-center items-center min-h-screen">
      {/* Content Box with Background Image */}
      <div
        className="w-full flex-col h-[700px] rounded-2xl bg-cover bg-center flex justify-center items-center relative"
        style={{
          backgroundImage:
            "url(&aposhttps://img.freepik.com/free-photo/woman-holding-weights-near-barbells_651396-1617.jpg?t=st=1743319686~exp=1743323286~hmac=551ee456dffe5f6b8a49cab37d54ac6b3f9da0bbc0e00b781e5647d97e824f4c&w=900&apos)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay for Opacity Effect */}
        <div className="absolute inset-0 bg-black opacity-50 rounded-2xl"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-7xl text-white mt-7 mb-4 dela-gothic-one-regular">
            Join Now and Reach
            <br /> Your Fitness Goals
          </h1>
          <p className="text-lg mt-5 text-gray-300">
            Take a step towards your health and fitness goals by joining our AI
            Fitness Trainer
          </p>
          <Button className="w-[300px] bg-blue-600 hover:bg-blue-500 rounded-full h-[80px] text-xl font-semibold my-6">
            Join Now For Free
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Endban;
