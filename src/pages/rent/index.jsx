import React from "react";
import Layout from "../../components/layout";
import Hero from "./hero";
import Howitworks from "./howitworks";
import WhyUseXamp from "./why-use";
import Rectangle from "./rectangle";

const HowItWorks = () => {
  return (
    <div className="overflow-x-hidden">
      <Layout>
        <Hero />
        <Howitworks />
        <WhyUseXamp />
        <Rectangle />
      </Layout>
    </div>
  );
};

export default HowItWorks;
