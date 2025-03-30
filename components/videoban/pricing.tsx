import { Button } from "@heroui/button";
import React from "react";
import PricingCard from "./pricingcard";

const Pricing = () => {
  return (
    <div className="h-auto">
      <h1 className="text-6xl font-semibold text-center mt-[100px] mb-5 dela-gothic-one-regular ">
        Unlock the full potential of your
        <br /> fitness with our Pro Plans
      </h1>
      <p className="text-sm text-gray-400 text-center">
        We offer our Best plan for your Fitness Route . Wait if you don’t want
        pro plan you can stick with free plan also
      </p>
      <div className="mt-16">
        <PricingCard />
      </div>
    </div>
  );
};

export default Pricing;
